import React from 'react';
import { useStore } from '../../store/useStore';
import { Check, Info, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export function ToastContainer() {
  const { toasts, removeToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "pointer-events-auto flex items-center gap-3 px-4 py-3 bg-white border border-border shadow-lg min-w-[300px] animate-in slide-in-from-bottom-5 fade-in duration-300",
          )}
        >
          {toast.type === 'success' ? (
            <Check className="w-5 h-5 text-green-600" strokeWidth={2} />
          ) : (
            <Info className="w-5 h-5 text-blue-600" strokeWidth={2} />
          )}
          <p className="text-sm font-medium text-text-primary flex-1">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-text-secondary hover:text-text-primary"
            aria-label="Close"
          >
            <X className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      ))}
    </div>
  );
}
