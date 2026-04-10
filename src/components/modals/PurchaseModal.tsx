"use client";

import { useState } from "react";
import Modal from "../ui/Modal";
import { AgentConfig } from "@/lib/types";
import { formatDate, formatDisplayDate } from "@/lib/utils";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  agent: AgentConfig;
  dateStart: Date | null;
  dateEnd: Date | null;
  onOpenCalendar: () => void;
}

export default function PurchaseModal({
  isOpen,
  onClose,
  onSuccess,
  agent,
  dateStart,
  dateEnd,
  onOpenCalendar,
}: PurchaseModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const handleSubmit = async () => {
    if (!consent) {
      setConsentError(true);
      setTimeout(() => setConsentError(false), 2500);
      return;
    }

    const data = {
      lead_type: "purchase" as const,
      agent: agent.slug,
      agent_name: agent.name,
      timestamp: new Date().toISOString(),
      full_name: name.trim(),
      phone: phone.trim(),
      destination: destination.trim(),
      date_from: dateStart ? formatDate(dateStart) : "",
      date_to: dateEnd ? formatDate(dateEnd) : "",
      consent: true,
    };

    fetch(agent.webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});

    onClose();
    setTimeout(() => onSuccess(), 150);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between items-center">
        <div className="text-[17px] font-extrabold text-text">
          ✈️ רכישת ביטוח נסיעות
        </div>
        <button
          onClick={onClose}
          className="bg-[#f3f4f6] border-none w-[30px] h-[30px] rounded-full text-[13px] cursor-pointer text-muted flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      <p className="text-[13px] text-muted -mt-1.5">
        מלאו את הפרטים ונציג יחזור אליכם בהקדם
      </p>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-bold text-[#374151]">שם מלא</label>
          <input
            type="text"
            placeholder="ישראל ישראלי"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1.5px] border-border rounded-[10px] py-[11px] px-3.5 text-[14px] text-text outline-none text-right focus:border-brand-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-bold text-[#374151]">טלפון נייד</label>
          <input
            type="tel"
            placeholder="05X-XXXXXXX"
            dir="ltr"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-[1.5px] border-border rounded-[10px] py-[11px] px-3.5 text-[14px] text-text outline-none focus:border-brand-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-bold text-[#374151]">לאן טסים?</label>
          <input
            type="text"
            placeholder="לדוגמה: איטליה, ניו יורק..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border-[1.5px] border-border rounded-[10px] py-[11px] px-3.5 text-[14px] text-text outline-none text-right focus:border-brand-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-bold text-[#374151]">תאריכי הנסיעה</label>
          <div
            onClick={onOpenCalendar}
            className="border-[1.5px] border-border rounded-[10px] py-[11px] px-3.5 flex items-center justify-between cursor-pointer hover:border-brand-500 transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-[#9ca3af] font-semibold">מתאריך</span>
              <span className="text-[13px] text-text">
                {dateStart ? formatDisplayDate(dateStart) : "בחר תאריך"}
              </span>
            </div>
            <span className="text-[#d1d5db] text-[16px]">—</span>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#9ca3af] font-semibold">עד תאריך</span>
              <span className="text-[13px] text-text">
                {dateEnd ? formatDisplayDate(dateEnd) : "בחר תאריך"}
              </span>
            </div>
          </div>
        </div>

        {/* Consent checkbox */}
        <div
          className={`rounded-[10px] p-3 border-[1.5px] transition-colors ${
            consentError
              ? "border-brand-500 bg-brand-light"
              : "border-brand-border bg-[#fff8f8]"
          }`}
        >
          <label className="flex items-start gap-2.5 cursor-pointer text-[12px] text-[#4b5563] leading-relaxed">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="w-[18px] h-[18px] accent-brand-500 flex-shrink-0 mt-0.5 cursor-pointer"
            />
            <span>
              מאשר/ת העברת הפרטים למוקד מכירות PassportCard לצורך קבלת הצעת
              ביטוח
            </span>
          </label>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-brand-500 text-white border-none rounded-xl py-[15px] w-full text-[15px] font-bold cursor-pointer text-center mt-1 active:opacity-90"
      >
        שלח פרטים →
      </button>
    </Modal>
  );
}
