import { NextRequest, NextResponse } from "next/server";
import { songs } from "@/data/songs";
import { parseVisitorNumber } from "@/lib/visitor";

export const runtime = "nodejs";

type SpotifyOEmbedResponse = {
  title?: string;
  thumbnail_url?: string;
  html?: string;
};

function selectSong(visitorNumber: number | null) {
  const index = visitorNumber ? visitorNumber % songs.length : 0;
  return songs[index] ?? songs[0];
}

function parseSpotifyTitle(title?: string) {
  if (!title) {
    return { title: null, artist: null };
  }

  const separators = [" - ", " – ", " — "];
  const separator = separators.find((value) => title.includes(value));

  if (!separator) {
    return { title, artist: null };
  }

  const [trackTitle, ...artistParts] = title.split(separator);
  const artist = artistParts.join(separator).trim();

  return {
    title: trackTitle.trim() || title,
    artist: artist || null,
  };
}

export async function GET(request: NextRequest) {
  const visitorNumber = parseVisitorNumber(
    request.nextUrl.searchParams.get("visitorNumber") ?? undefined,
  );
  const selectedSong = selectSong(visitorNumber);

  try {
    const response = await fetch(
      `https://open.spotify.com/oembed?url=${encodeURIComponent(
        selectedSong.spotifyUrl,
      )}`,
      { cache: "force-cache", next: { revalidate: 60 * 60 * 24 } },
    );

    if (!response.ok) {
      throw new Error("Spotify oEmbed request failed.");
    }

    const data = (await response.json()) as SpotifyOEmbedResponse;
    const parsedTitle = parseSpotifyTitle(data.title);

    return NextResponse.json({
      title: parsedTitle.title,
      artist: parsedTitle.artist,
      spotifyUrl: selectedSong.spotifyUrl,
      thumbnailUrl: data.thumbnail_url ?? null,
      embedHtml: data.html ?? null,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Music API fell back after oEmbed error.", error);
    }

    return NextResponse.json({
      title: "One of my favorite tracks",
      artist: null,
      spotifyUrl: selectedSong.spotifyUrl,
      thumbnailUrl: null,
    });
  }
}
