"use client";

import { useState } from "react";
import { AgentConfig } from "@/lib/types";
import { useCalendar } from "@/hooks/useCalendar";

import PageWrapper from "@/components/layout/PageWrapper";
import AgentBar from "@/components/layout/AgentBar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import MidCTA from "@/components/sections/MidCTA";
import Comparison from "@/components/sections/Comparison";
import Savings from "@/components/sections/Savings";
import Proof from "@/components/sections/Proof";
import TaxFree from "@/components/sections/TaxFree";
import Bonus from "@/components/sections/Bonus";
import CTASection from "@/components/sections/CTASection";

import PurchaseModal from "@/components/modals/PurchaseModal";
import ReminderModal from "@/components/modals/ReminderModal";
import SuccessModal from "@/components/modals/SuccessModal";
import CalendarPicker from "@/components/ui/CalendarPicker";

interface AgentPageClientProps {
  agent: AgentConfig;
}

export default function AgentPageClient({ agent }: AgentPageClientProps) {
  const [buyOpen, setBuyOpen] = useState(false);
  const [remindOpen, setRemindOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const buyCal = useCalendar();
  const remindCal = useCalendar();

  return (
    <>
      <PageWrapper>
        <AgentBar agent={agent} />
        <Hero />
        <Problem />
        <MidCTA />
        <Comparison />
        <Savings />
        <Proof />
        <TaxFree />
        <Bonus />
        <CTASection
          agent={agent}
          onBuy={() => setBuyOpen(true)}
          onRemind={() => setRemindOpen(true)}
        />
      </PageWrapper>

      <PurchaseModal
        isOpen={buyOpen}
        onClose={() => setBuyOpen(false)}
        onSuccess={() => setSuccessOpen(true)}
        agent={agent}
        dateStart={buyCal.state.start}
        dateEnd={buyCal.state.end}
        onOpenCalendar={() => buyCal.open("buy")}
      />

      <ReminderModal
        isOpen={remindOpen}
        onClose={() => setRemindOpen(false)}
        onSuccess={() => setSuccessOpen(true)}
        agent={agent}
        dateStart={remindCal.state.start}
        dateEnd={remindCal.state.end}
        onOpenCalendar={() => remindCal.open("remind")}
      />

      <SuccessModal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
      />

      <CalendarPicker
        isOpen={buyCal.state.isOpen}
        start={buyCal.state.start}
        end={buyCal.state.end}
        baseMonth={buyCal.state.baseMonth}
        secondMonth={buyCal.getSecondMonth()}
        onPick={buyCal.pickDay}
        onPrev={buyCal.prevMonth}
        onNext={buyCal.nextMonth}
        onConfirm={buyCal.confirm}
        onClose={buyCal.close}
      />

      <CalendarPicker
        isOpen={remindCal.state.isOpen}
        start={remindCal.state.start}
        end={remindCal.state.end}
        baseMonth={remindCal.state.baseMonth}
        secondMonth={remindCal.getSecondMonth()}
        onPick={remindCal.pickDay}
        onPrev={remindCal.prevMonth}
        onNext={remindCal.nextMonth}
        onConfirm={remindCal.confirm}
        onClose={remindCal.close}
      />
    </>
  );
}
