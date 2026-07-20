import Image from "next/image";
import { Download, Music2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type SongCardProps = {
  song: {
    id: number;
    title: string;
    artist: string;
    album: string;
    duration: string;
    cover: string;
    audio: string;
  };
  index: number;
};

export default function SongCard({ song, index }: SongCardProps) {
  return (
    <article className="group grid gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/20 transition hover:border-emerald-300/35 hover:bg-white/[0.07] sm:grid-cols-[72px_1fr_auto] sm:items-center">
      <div className="relative size-20 overflow-hidden rounded-md border border-white/10 bg-zinc-900 sm:size-[72px]">
        <Image
          src={song.cover}
          alt={`${song.album} cover`}
          fill
          sizes="80px"
          className="object-cover"
        />
        <div className="absolute left-2 top-2 grid size-6 place-items-center rounded bg-black/55 text-xs font-semibold text-white">
          {index + 1}
        </div>
      </div>

      <div className="min-w-0 space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold leading-6 text-white">
              {song.title}
            </h3>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-zinc-400">
              <Music2 className="size-3.5 text-emerald-300" aria-hidden="true" />
              <span>{song.artist}</span>
              <span className="text-zinc-600">/</span>
              <span>{song.album}</span>
            </p>
          </div>
          <span className="rounded-md border border-white/10 px-2 py-1 text-xs font-medium text-zinc-300">
            {song.duration}
          </span>
        </div>

        <audio
          controls
          preload="none"
          src={song.audio}
          className="h-9 w-full min-w-0 accent-emerald-300"
        >
          <a href={song.audio}>Play {song.title}</a>
        </audio>
      </div>

      <Button
        asChild
        variant="outline"
        size="sm"
        className="w-full border-white/10 bg-white/[0.03] text-zinc-100 hover:bg-emerald-300 hover:text-zinc-950 sm:w-auto"
      >
        <a href={song.audio} download>
          <Download className="size-4" aria-hidden="true" />
          Download
        </a>
      </Button>
    </article>
  );
}
