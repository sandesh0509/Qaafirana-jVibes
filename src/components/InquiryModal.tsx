import React, { useState } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; phone: string; question: string }) => void;
  selectedBatchTitle?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  selectedBatchTitle = 'The Great Kashmir Circuit',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      onSubmit({ name, phone, question });
      setIsSubmitting(false);
      setName('');
      setPhone('');
      setQuestion('');
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#181c1a]/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-md rounded-t-3xl sm:rounded-2xl bg-white p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-bottom-6 duration-300 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-1 border-b border-[#ecefeb]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#ffdcc2] flex items-center justify-center text-[#8f4e00]">
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </div>
            <div>
              <h3 className="font-headline text-[20px] font-semibold text-[#07290c] leading-none">
                Ask a Himalayan Captain
              </h3>
              <p className="text-[11px] text-[#737970] mt-1 truncate max-w-[240px]">
                Regarding: {selectedBatchTitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-[#ecefeb] flex items-center justify-center text-[#424840] hover:bg-[#e0e3e0] active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <p className="text-xs text-[#424840] leading-relaxed">
          Have questions on high-altitude weather, couple room upgrades, custom departures, or solo roommate matching? Send a direct note to our local expedition team.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-[#424840] uppercase tracking-wider">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aarav Sharma"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f4f1] text-[#181c1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3f20]/30 transition-all placeholder:text-[#737970]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-[#424840] uppercase tracking-wider flex items-center justify-between">
              <span>Contact WhatsApp / Phone</span>
              <span className="text-[#8f4e00] font-normal text-[10px]">Instant reply</span>
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

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-[#424840] uppercase tracking-wider">
              What's on your mind?
            </label>
            <textarea
              rows={3}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Tell us if you are traveling solo, need vegetarian Wazwan, or want flight booking guidance..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f4f1] text-[#181c1a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3f20]/30 transition-all resize-none placeholder:text-[#737970]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full py-3 rounded-full bg-[#1e3f20] hover:bg-[#07290c] text-white text-sm font-semibold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">
                  progress_activity
                </span>
                <span>Connecting with Captain...</span>
              </>
            ) : (
              <>
                <span>Connect with Captain</span>
                <span className="material-symbols-outlined text-[16px]">send</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
