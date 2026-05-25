import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import {
  INITIAL_VISITOR_COUNT,
  ONE_YEAR_SECONDS,
  VISITOR_COUNTER_NAME,
  VISITOR_ID_COOKIE,
  VISITOR_NUMBER_COOKIE,
  getFallbackVisitorResponse,
  getQuoteForVisitor,
  parseVisitorNumber,
} from "@/lib/visitor";

export const runtime = "nodejs";

export async function GET() {
  try {
    const sql = getSql();
    const cookieStore = await cookies();
    const visitorId = cookieStore.get(VISITOR_ID_COOKIE)?.value;
    const visitorNumber = parseVisitorNumber(
      cookieStore.get(VISITOR_NUMBER_COOKIE)?.value,
    );

    if (visitorId && visitorNumber) {
      const result = await sql`
        select count
        from portfolio_visitors
        where counter_name = ${VISITOR_COUNTER_NAME}
        limit 1
      `;
      const totalVisitors = Number(result[0]?.count ?? INITIAL_VISITOR_COUNT);

      return NextResponse.json({
        isNewVisitor: false,
        visitorNumber,
        totalVisitors,
        quote: getQuoteForVisitor(visitorNumber),
      });
    }

    await sql`
      insert into portfolio_visitors (counter_name, count)
      values (${VISITOR_COUNTER_NAME}, ${INITIAL_VISITOR_COUNT})
      on conflict (counter_name) do nothing
    `;

    const result = await sql`
      update portfolio_visitors
      set count = count + 1,
          updated_at = now()
      where counter_name = ${VISITOR_COUNTER_NAME}
      returning count
    `;
    const assignedNumber = Number(result[0]?.count ?? INITIAL_VISITOR_COUNT);

    const response = NextResponse.json({
      isNewVisitor: true,
      visitorNumber: assignedNumber,
      totalVisitors: assignedNumber,
      quote: getQuoteForVisitor(assignedNumber),
    });

    const cookieOptions = {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      maxAge: ONE_YEAR_SECONDS,
      path: "/",
    };

    response.cookies.set(VISITOR_ID_COOKIE, randomUUID(), cookieOptions);
    response.cookies.set(
      VISITOR_NUMBER_COOKIE,
      String(assignedNumber),
      cookieOptions,
    );

    return response;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Visitor API fell back after database error.", error);
    }

    return NextResponse.json(getFallbackVisitorResponse());
  }
}
