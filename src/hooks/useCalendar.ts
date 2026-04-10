"use client";

import { useState, useCallback } from "react";

export interface CalendarState {
  isOpen: boolean;
  context: "buy" | "remind" | null;
  start: Date | null;
  end: Date | null;
  baseMonth: { year: number; month: number };
}

function addMonths(base: { year: number; month: number }, n: number) {
  let m = base.month + n;
  let y = base.year + Math.floor(m / 12);
  m = ((m % 12) + 12) % 12;
  return { year: y, month: m };
}

export function useCalendar() {
  const [state, setState] = useState<CalendarState>({
    isOpen: false,
    context: null,
    start: null,
    end: null,
    baseMonth: {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    },
  });

  const open = useCallback((ctx: "buy" | "remind") => {
    const today = new Date();
    setState({
      isOpen: true,
      context: ctx,
      start: null,
      end: null,
      baseMonth: { year: today.getFullYear(), month: today.getMonth() },
    });
  }, []);

  const close = useCallback(() => {
    setState((s) => ({ ...s, isOpen: false }));
  }, []);

  const pickDay = useCallback((date: Date) => {
    setState((s) => {
      if (!s.start || (s.start && s.end)) {
        return { ...s, start: date, end: null };
      } else if (date < s.start) {
        return { ...s, start: date, end: s.start };
      } else if (date.getTime() === s.start.getTime()) {
        return { ...s, start: null };
      } else {
        return { ...s, end: date };
      }
    });
  }, []);

  const prevMonth = useCallback(() => {
    setState((s) => ({ ...s, baseMonth: addMonths(s.baseMonth, -1) }));
  }, []);

  const nextMonth = useCallback(() => {
    setState((s) => ({ ...s, baseMonth: addMonths(s.baseMonth, 1) }));
  }, []);

  const confirm = useCallback(() => {
    setState((s) => {
      if (!s.start || !s.end) return s;
      return { ...s, isOpen: false };
    });
  }, []);

  const getSecondMonth = useCallback(() => {
    return addMonths(state.baseMonth, 1);
  }, [state.baseMonth]);

  return {
    state,
    open,
    close,
    pickDay,
    prevMonth,
    nextMonth,
    confirm,
    getSecondMonth,
  };
}
