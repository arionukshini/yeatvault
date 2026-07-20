import Image from "next/image";
import { Disc3, Download, Headphones, Search } from "lucide-react";

import SongCard from "@/components/music/SongCard";
import { songs } from "@/data/songs";

const featuredSong = songs[0];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(16,35,27,0.95)_0%,rgba(9,9,11,1)_42%,rgba(0,0,0,1)_100%)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 py-4">
          <div className="flex items-center gap-3">
            <div className="grid size-14 place-items-center rounded-lg border border-emerald-300/25 bg-black/35 p-1 shadow-lg shadow-emerald-950/30">
              <Image
                src="/yeatvault-logo-full.png"
                alt=""
                width={64}
                height={64}
                className="size-full object-contain"
                priority
                unoptimized
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-normal sm:text-3xl">
                YeatVault
              </h1>
              <p className="text-sm text-zinc-400">Released and unreleased library</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-zinc-400">
            <Headphones className="size-4 text-amber-200" aria-hidden="true" />
            <span>{songs.length} tracks loaded</span>
          </div>
        </header>

        <section className="grid flex-1 gap-6 py-6 lg:grid-cols-[minmax(0,1.2fr)_380px] lg:items-start">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/35">
              <Image
                src={featuredSong.cover}
                alt={`${featuredSong.album} cover`}
                fill
                priority
                sizes="(min-width: 1024px) 820px, 100vw"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.7)_48%,rgba(0,0,0,0.2)_100%)]" />
              <div className="relative min-h-[300px] p-5 sm:p-8 lg:min-h-[430px]">
                <div className="flex h-full max-w-2xl flex-col justify-end gap-6">
                  <div className="space-y-4">
                    <div className="inline-flex w-fit items-center gap-2 rounded-md border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-100">
                      <Disc3 className="size-4" aria-hidden="true" />
                      2093 era
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">
                        Now in vault
                      </p>
                      <h2 className="mt-2 max-w-[11ch] text-5xl font-black leading-none tracking-normal text-white sm:text-7xl">
                        {featuredSong.album}
                      </h2>
                    </div>
                    <p className="max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
                      Start with the current local tracks, then build toward albums,
                      eras, playlists, likes, downloads, and search.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#library"
                      className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-300 px-4 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
                    >
                      Open library
                    </a>
                    <a
                      href={featuredSong.audio}
                      download
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.12]"
                    >
                      <Download className="size-4" aria-hidden="true" />
                      Download featured
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <section id="library" className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-emerald-200">
                    Library
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-white">Tracks</h2>
                </div>
                <label className="flex h-10 w-full items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 text-sm text-zinc-400 sm:max-w-xs">
                  <Search className="size-4 text-zinc-500" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search YeatVault"
                    className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-zinc-500"
                  />
                </label>
              </div>

              <div className="grid gap-3">
                {songs.map((song, index) => (
                  <SongCard key={song.id} song={song} index={index} />
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4 rounded-lg border border-white/10 bg-white/[0.045] p-4 lg:sticky lg:top-6">
            <div className="overflow-hidden rounded-md border border-white/10">
              <Image
                src={featuredSong.cover}
                alt={`${featuredSong.album} cover`}
                width={760}
                height={760}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Featured album</p>
              <h2 className="mt-1 text-2xl font-bold text-white">
                {featuredSong.album}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md border border-white/10 bg-black/20 p-3">
                <p className="text-zinc-500">Artist</p>
                <p className="mt-1 font-semibold text-white">{featuredSong.artist}</p>
              </div>
              <div className="rounded-md border border-white/10 bg-black/20 p-3">
                <p className="text-zinc-500">Tracks</p>
                <p className="mt-1 font-semibold text-white">{songs.length}</p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
