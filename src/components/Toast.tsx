import React from 'react';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'highlight';
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  if (!toast) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] max-w-sm z-50 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
      <div className="p-4 rounded-2xl bg-[#07290c] text-white shadow-2xl flex items-center gap-3 border border-[#1e3f20]/40">
        <div className="w-9 h-9 rounded-full bg-[#fea049] text-[#6e3a00] flex items-center justify-center flex-shrink-0 font-bold shadow-md">
          <span className="material-symbols-outlined text-[20px]">check</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold tracking-tight leading-snug">{toast.title}</h4>
          <p className="text-xs text-[#e0e3e0] mt-0.5 leading-normal">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-[#e0e3e0] hover:text-white p-1 rounded-full active:scale-90 transition-transform"
          aria-label="Close notification"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </div>
  );
};
