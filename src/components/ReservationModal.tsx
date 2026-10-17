import React, { useState } from 'react';
import { Batch } from '../data/mockData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBatch: Batch;
  onConfirmReservation: (details: {
    batch: Batch;
    travelers: number;
    travelerName: string;
    travelerPhone: string;
    totalPrice: number;
    depositAmount: number;
  }) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  selectedBatch,
  onConfirmReservation,
}) => {
  const [travelers, setTravelers] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const depositPerPerson = 3000;
  const totalDeposit = depositPerPerson * travelers;
  const totalPrice = selectedBatch.rawPrice * travelers;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsProcessing(true);
    setTimeout(() => {
      onConfirmReservation({
        batch: selectedBatch,
        travelers,
        travelerName: name,
        travelerPhone: phone,
        totalPrice,
        depositAmount: totalDeposit,
      });
      setIsProcessing(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#181c1a]/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-md rounded-t-3xl sm:rounded-2xl bg-white p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-bottom-6 duration-300 max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#ecefeb]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8f4e00] bg-[#ffdcc2] px-2 py-0.5 rounded-full inline-block">
              Instant Seat Lock
            </span>
            <h3 className="font-headline text-[22px] font-semibold text-[#07290c] mt-1">
              Reserve Your Seat
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-[#ecefeb] flex items-center justify-center text-[#424840] hover:bg-[#e0e3e0] active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Selected Batch Summary Box */}
        <div className="p-3.5 rounded-xl bg-[#f1f4f1] border border-[#e0e3e0] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-[#737970] font-medium">Soul of Kashmir Circuit</span>
            <span className="text-sm font-bold text-[#07290c] mt-0.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#8f4e00]">event</span>
              {selectedBatch.date}
            </span>
            <span className="text-xs text-[#424840] mt-0.5">{selectedBatch.subtitle}</span>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-[#07290c]">{selectedBatch.price}</span>
            <span className="text-[10px] text-[#737970] block">per traveler</span>
          </div>
        </div>

        <form onSubmit={handleConfirm} className="flex flex-col gap-3.5">
          {/* Travelers Counter */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#ecefeb] shadow-sm">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#181c1a]">Travelers</span>
              <span className="text-[11px] text-[#737970]">
                {travelers === 1 ? 'Solo explorer' : `${travelers} kindred souls`}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                disabled={travelers <= 1}
                className="w-8 h-8 rounded-full bg-[#f1f4f1] text-[#181c1a] disabled:opacity-30 hover:bg-[#e0e3e0] flex items-center justify-center transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[16px]">remove</span>
              </button>
              <span className="text-sm font-bold text-[#07290c] w-5 text-center">
                {travelers}
              </span>
              <button
                type="button"
                onClick={() => setTravelers(Math.min(selectedBatch.seatsLeft, travelers + 1))}
                disabled={travelers >= selectedBatch.seatsLeft}
                className="w-8 h-8 rounded-full bg-[#f1f4f1] text-[#181c1a] disabled:opacity-30 hover:bg-[#e0e3e0] flex items-center justify-center transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
              </button>
            </div>
          </div>

          {/* Traveler Details */}
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-[#424840] uppercase tracking-wider">
              Primary Traveler Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Zoya Akhtar"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f4f1] text-[#181c1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3f20]/30 transition-all placeholder:text-[#737970]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-[#424840] uppercase tracking-wider">
              WhatsApp Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f4f1] text-[#181c1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3f20]/30 transition-all placeholder:text-[#737970]"
            />
          </div>

          {/* Deposit Breakdown */}
          <div className="p-3.5 rounded-xl bg-[#1e3f20]/5 border border-[#1e3f20]/15 flex flex-col gap-2">
            <div className="flex justify-between text-xs text-[#424840]">
              <span>Token Deposit ({travelers} × ₹3,000)</span>
              <span className="font-bold text-[#07290c]">₹{totalDeposit.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-xs text-[#737970]">
              <span>Remaining Balance (Due 10 days before)</span>
              <span>₹{(totalPrice - totalDeposit).toLocaleString('en-IN')}</span>
            </div>
            <div className="h-[1px] bg-[#e0e3e0] my-0.5"></div>
            <div className="flex justify-between text-xs font-bold text-[#07290c]">
              <span>Pay Today to Lock</span>
              <span className="text-[#8f4e00] text-sm">₹{totalDeposit.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-3.5 rounded-full bg-[#1e3f20] hover:bg-[#07290c] text-white text-sm font-semibold shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">
                  progress_activity
                </span>
                <span>Locking Your Sacred Seat...</span>
              </>
            ) : (
              <>
                <span>Lock Seat with ₹{totalDeposit.toLocaleString('en-IN')}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-3 text-[11px] text-[#737970]">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#07290c]">verified_user</span>
              100% Refundable Guarantee*
            </span>
            <span>•</span>
            <span>Zero Processing Fees</span>
          </div>
        </form>
      </div>
    </div>
  );
};
