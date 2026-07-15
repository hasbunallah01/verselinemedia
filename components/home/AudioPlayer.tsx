"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

interface AudioPlayerProps {
  /** Data-driven audio source — never hardcode. */
  src: string;
  title?: string;
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * Custom on-page audio player: play / pause, seekable
 * progress bar, current time and total duration.
 */
export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      void audio.play();
      setPlaying(true);
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(duration) || duration === 0) return;
    audio.currentTime = value;
    setCurrent(value);
  };

  return (
    <div className="w-full rounded-lg border border-mist bg-stone/70 p-4">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause conversation" : "Play conversation"}
          className="btn-forest shrink-0 !px-5"
        >
          {playing ? (
            <>
              <Pause className="h-4 w-4 fill-current" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-4 w-4 fill-current" />
              Play Conversation
            </>
          )}
        </button>

        <div className="min-w-0 flex-1">
          {title && (
            <p className="mb-1.5 truncate text-xs font-medium text-charcoal/70">
              {title}
            </p>
          )}
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={current}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label="Seek"
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-mist accent-forest"
          />
          <div className="mt-1 flex justify-between text-[11px] tabular-nums text-charcoal/60">
            <span>{formatTime(current)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
