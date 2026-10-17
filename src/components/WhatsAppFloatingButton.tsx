import React, { useState } from 'react';

interface WhatsAppFloatingButtonProps {
  onOpenChat: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ onOpenChat }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside className="fixed right-4 sm:right-6 bottom-20 sm:bottom-24 z-40 flex flex-col items-end">
      {/* Quick helper message bubble */}
      {showTooltip && (
        <div className="mb-2 mr-1 px-3 py-1.5 rounded-xl bg-white shadow-lg border border-[#ecefeb] text-xs text-[#07290c] font-medium animate-in fade-in slide-in-from-bottom-2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Online • Kashmir Curator</span>
        </div>
      )}
      <button
        onClick={onOpenChat}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="WhatsApp Expedition Concierge"
        className="w-13 h-13 rounded-full bg-[#1e3f20] hover:bg-[#07290c] text-white flex items-center justify-center shadow-[0_12px_32px_-4px_rgba(30,63,32,0.38)] active:scale-90 transition-all group"
      >
        <span className="material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform">
          chat
        </span>
      </button>
    </aside>
  );
};
