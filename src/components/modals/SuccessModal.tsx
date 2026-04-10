"use client";

import Modal from "../ui/Modal";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center text-center py-6">
        <div className="text-[52px]">✅</div>
        <div className="text-[20px] font-extrabold text-text mt-2">
          הפרטים נשלחו בהצלחה!
        </div>
        <p className="text-[14px] text-muted leading-relaxed mt-2">
          ניצור איתכם קשר בהקדם.
          <br />
          נסיעה בטוחה! 🙏
        </p>
        <button
          onClick={onClose}
          className="bg-brand-500 text-white border-none rounded-xl py-[15px] w-full text-[15px] font-bold cursor-pointer mt-4 active:opacity-90"
        >
          סגור
        </button>
      </div>
    </Modal>
  );
}
