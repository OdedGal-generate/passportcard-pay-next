"use client";

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "../animations/RevealOnScroll";

export default function Solution() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [caption, setCaption] = useState("");

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
            className="bg-[#1A1313] text-white text-center font-display font-extrabold px-4 py-3 flex items-center justify-center"
            style={{
              minHeight: "3.25rem",
              fontSize: "clamp(15px, 4.2vw, 20px)",
              lineHeight: 1.25,
            }}
          >
            <span>{caption || " "}</span>
          </div>

          <video
            ref={videoRef}
            src="/videos/solution-16x9.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            className="w-full block aspect-[16/9] object-cover bg-black"
          >
            <track
              kind="subtitles"
              srcLang="he"
              label="עברית"
              src="/videos/solution-16x9.he.vtt"
              default
            />
          </video>
        </div>
      </RevealOnScroll>
    </div>
  );
}
