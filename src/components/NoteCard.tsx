"use client";
import { useState } from "react";

interface NoteCardProps {
  text: string;
}

export default function NoteCard({ text }: NoteCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-yellow-200 p-4 shadow-md cursor-pointer rounded-md transform rotate-1 hover:rotate-0 transition-transform duration-200"
        onClick={() => setOpen(true)}
      >
        <p className="text-gray-900 text-sm">{text}</p>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-md">
            <p className="text-lg font-semibold">{text}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
