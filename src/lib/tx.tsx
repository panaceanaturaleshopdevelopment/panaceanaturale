import React from "react";

// Renders a translation string, converting **bold** markers to styled spans.
export function tx(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/);
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-medium text-[#1E3A1E]">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
