"use client";

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "../animations/RevealOnScroll";

export default function Solution() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [caption, setCaption] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlayWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    try {
      await video.play();
    } catch {
      // Edge case: some mobile browsers may still reject. The user can use
      // the native controls that appear after `hasStarted` flips.
    }
    setHasStarted(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attachToTrack = (track: TextTrack) => {
      track.mode = "hidden";
      const onCueChange = () => {
        const active = track.activeCues?.[0] as VTTCue | undefined;
        setCaption(active?.text ?? "");
      };
      track.addEventListener("cuechange", onCueChange);
      return () => track.removeEventListener("cuechange", onCueChange);
    };

    let cleanup: (() => void) | undefined;
    if (video.textTracks.length > 0) {
      cleanup = attachToTrack(video.textTracks[0]);
    } else {
      const onAdd = (e: TrackEvent) => {
        if (e.track) cleanup = attachToTrack(e.track);
      };
      video.textTracks.addEventListener("addtrack", onAdd);
      return () => {
        video.textTracks.removeEventListener("addtrack", onAdd);
        cleanup?.();
      };
    }

    return () => cleanup?.();
  }, []);

  return (
    <div className="px-5 py-6">
      <RevealOnScroll>
        <div className="flex items-center gap-1.5 mb-3">
          <span className="font-display text-[15px] font-extrabold text-brand-500 tracking-wide uppercase">
            הפתרון
          </span>
          <span className="flex-1 h-px bg-brand-200" />
        </div>

        <div
          className="bg-card rounded-2xl border border-brand-100 overflow-hidden mx-auto"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div
            dir="rtl"
            lang="he"
            className="text-white text-center font-display font-extrabold px-4 py-3 flex items-center justify-center"
            style={{
              minHeight: "3.25rem",
              fontSize: "clamp(15px, 4.2vw, 20px)",
              lineHeight: 1.25,
              background: "var(--color-brand-500)",
            }}
          >
            <span>{caption || " "}</span>
          </div>

          <div className="relative">
            <video
              ref={videoRef}
              src="/videos/solution-16x9.mp4"
              loop
              playsInline
              controls={hasStarted}
              preload="metadata"
              onPlay={() => setHasStarted(true)}
              className="w-full block aspect-[16/9] object-cover bg-black solution-video"
            >
              {/* No `default` attribute — we render captions ourselves via the
                  red banner above. Track stays at mode "disabled" until JS
                  flips it to "hidden" (which fires cuechange events but
                  suppresses native rendering). */}
              <track
                kind="subtitles"
                srcLang="he"
                label="עברית"
                src="/videos/solution-16x9.he.vtt"
              />
            </video>

            {/* Click-to-play overlay with sound. Browsers block autoplay-with-sound,
                so we use a user gesture to start playback unmuted. */}
            {!hasStarted && (
              <button
                type="button"
                onClick={handlePlayWithSound}
                className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/45 active:bg-black/55 transition-colors group focus-visible:outline-none focus-visible:bg-black/50"
                aria-label="הפעל וידאו עם סאונד"
              >
                <span
                  className="bg-white rounded-full w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-110 group-active:scale-105"
                  style={{
                    boxShadow:
                      "0 12px 36px rgba(225,14,24,0.45), 0 2px 8px rgba(0,0,0,0.25)",
                  }}
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="var(--color-brand-500)"
                    aria-hidden
                    style={{ marginInlineStart: 4 }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span
                  className="absolute bottom-3 inset-x-0 text-center text-white text-[12px] font-display font-bold"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
                >
                  לחצו להפעלה עם סאונד
                </span>
              </button>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
