import { quotes } from "@/data/quotes";
import type { Quote } from "@/types/portfolio";

export const VISITOR_ID_COOKIE = "ariz_portfolio_visitor_id";
export const VISITOR_NUMBER_COOKIE = "ariz_portfolio_visitor_number";
export const INITIAL_VISITOR_COUNT = 120;
export const VISITOR_COUNTER_NAME = "main";
export const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function getQuoteForVisitor(visitorNumber: number): Quote {
  return quotes[visitorNumber % quotes.length] ?? quotes[0];
}

export function getFallbackVisitorResponse() {
  return {
    isNewVisitor: false,
    visitorNumber: INITIAL_VISITOR_COUNT,
    totalVisitors: INITIAL_VISITOR_COUNT,
    quote: quotes[0],
  };
}

export function parseVisitorNumber(value?: string) {
  if (!value) {
    return null;
  }

  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}
