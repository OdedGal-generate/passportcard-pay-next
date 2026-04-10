"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HEBREW_MONTHS, HEBREW_DAYS, formatDisplayDate } from "@/lib/utils";

interface MonthGridProps {
  year: number;
  month: number;
  start: Date | null;
  end: Date | null;
  onPick: (date: Date) => void;
  onPrev?: () => void;
  onNext?: () => void;
  showPrev: boolean;
  showNext: boolean;
}

function MonthGrid({
  year,
  month,
  start,
  end,
  onPick,
  onPrev,
  onNext,
  showPrev,
  showNext,
}: MonthGridProps) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="mb-4">
      {/* Month header */}
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={onNext}
          className={`bg-[#f3f4f6] border-none w-[30px] h-[30px] rounded-full text-[13px] cursor-pointer text-muted flex items-center justify-center ${
            !showNext ? "invisible" : ""
          }`}
        >
          ‹
        </button>
        <div className="text-[16px] font-bold text-text">
          {HEBREW_MONTHS[month]} {year}
        </div>
        <button
          onClick={onPrev}
          className={`bg-[#f3f4f6] border-none w-[30px] h-[30px] rounded-full text-[13px] cursor-pointer text-muted flex items-center justify-center ${
            !showPrev ? "invisible" : ""
          }`}
        >
          ›
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 text-center mb-1">
        {HEBREW_DAYS.map((d) => (
          <span key={d} className="text-[11px] font-bold text-muted py-1">
            {d}
          </span>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {/* Empty cells */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`e-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const d = i + 1;
          const date = new Date(year, month, d);
          date.setHours(0, 0, 0, 0);
          const isPast = date < today;

          const isStart = start && date.getTime() === start.getTime();
          const isEnd = end && date.getTime() === end.getTime();
          const inRange =
            start && end && date > start && date < end;

          let cls =
            "w-full aspect-square flex items-center justify-center text-[13px] rounded-full cursor-pointer transition-colors ";

          if (isPast) {
            cls += "text-[#d1d5db] cursor-default";
          } else if (isStart || isEnd) {
            cls += "bg-brand-500 text-white font-bold";
          } else if (inRange) {
            cls += "bg-brand-light text-brand-500 font-medium";
          } else {
            cls += "text-text hover:bg-[#f3f4f6]";
          }

          return (
            <div
              key={d}
              className={cls}
              onClick={() => !isPast && onPick(date)}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface CalendarPickerProps {
  isOpen: boolean;
  start: Date | null;
  end: Date | null;
  baseMonth: { year: number; month: number };
  secondMonth: { year: number; month: number };
  onPick: (date: Date) => void;
  onPrev: () => void;
  onNext: () => void;
  onConfirm: () => void;
  onClose: () => void;
}

export default function CalendarPicker({
  isOpen,
  start,
  end,
  baseMonth,
  secondMonth,
  onPick,
  onPrev,
  onNext,
  onConfirm,
  onClose,
}: CalendarPickerProps) {
  const hint = start && !end ? "בחר תאריך חזרה" : "בחר תאריך עזיבה";
  const canConfirm = !!(start && end);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[2000] flex justify-center items-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl p-5 max-w-[360px] w-[90%] max-h-[90vh] overflow-y-auto"
            dir="rtl"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-[16px] font-bold text-text">
                בחר תאריכי נסיעה
              </div>
              <button
                onClick={onClose}
                className="bg-[#f3f4f6] border-none w-[30px] h-[30px] rounded-full text-[13px] cursor-pointer text-muted flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Hint */}
            <div className="text-[12px] text-muted mb-3 text-center">
              {hint}
            </div>

            {/* Two month grids */}
            <MonthGrid
              year={baseMonth.year}
              month={baseMonth.month}
              start={start}
              end={end}
              onPick={onPick}
              onPrev={onPrev}
              showPrev={true}
              showNext={false}
            />
            <MonthGrid
              year={secondMonth.year}
              month={secondMonth.month}
              start={start}
              end={end}
              onPick={onPick}
              onNext={onNext}
              showPrev={false}
              showNext={true}
            />

            {/* Selection display */}
            {start && (
              <div className="text-center text-[13px] text-muted mb-3">
                {formatDisplayDate(start)}
                {end ? ` — ${formatDisplayDate(end)}` : ""}
              </div>
            )}

            {/* Confirm */}
            <button
              onClick={onConfirm}
              disabled={!canConfirm}
              className={`w-full rounded-xl py-3.5 text-[15px] font-bold border-none cursor-pointer transition-opacity ${
                canConfirm
                  ? "bg-brand-500 text-white"
                  : "bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed"
              }`}
            >
              אישור →
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
