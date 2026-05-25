"use client";

import { Music2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import type { VisitorResponse } from "@/types/portfolio";

type MusicResponse = {
  title: string | null;
  artist: string | null;
  spotifyUrl: string;
  thumbnailUrl?: string | null;
  embedHtml?: string | null;
};

const fallbackMusic: MusicResponse = {
  title: null,
  artist: null,
  spotifyUrl: "https://open.spotify.com/track/62KZRwymXq9Rgm8Cm5UCfx",
};

export function MusicListeningButton() {
  const [music, setMusic] = useState<MusicResponse>(fallbackMusic);

  useEffect(() => {
    let mounted = true;

    async function loadMusic() {
      try {
        const visitorResponse = await fetch("/api/visitor", { cache: "no-store" });
        const visitorPayload = visitorResponse.ok
          ? ((await visitorResponse.json()) as VisitorResponse)
          : null;
        const visitorNumber = visitorPayload?.visitorNumber;
        const musicResponse = await fetch(
          `/api/music${visitorNumber ? `?visitorNumber=${visitorNumber}` : ""}`,
          { cache: "no-store" },
        );

        if (!musicResponse.ok) {
          return;
        }

        const payload = (await musicResponse.json()) as MusicResponse;

        if (mounted) {
          setMusic(payload);
        }
      } catch {
        if (mounted) {
          setMusic(fallbackMusic);
        }
      }
    }

    loadMusic();

    return () => {
      mounted = false;
    };
  }, []);

  const trackText = music.title
    ? `${music.title}${music.artist ? ` · ${music.artist}` : ""}`
    : "Open on Spotify";

  return (
    <a
      href={music.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Track for you — ${trackText}`}
      className="group block py-2"
    >
      <motion.div
        className="mx-auto flex w-full max-w-[960px] items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition hover:border-foreground/20 hover:text-foreground"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="flex min-w-0 items-center gap-3">
          <SiSpotify className="h-4 w-4 shrink-0 transition group-hover:text-[#1DB954]" />
          <span className="truncate">Track for you — {trackText}</span>
        </span>
        <Music2 className="h-4 w-4 shrink-0" />
      </motion.div>
    </a>
  );
}
