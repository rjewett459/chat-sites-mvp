"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Paperclip, X } from "lucide-react";

export default function ChatPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMode, setChatMode] = useState("text"); // Default to text mode

  const renderChatContent = () => {
    switch (chatMode) {
      case "text":
        return (
          <div className="flex flex-col items-center w-full p-4 text-white">
            <p>Text Mode Active</p>
            <input className="w-full p-2 mt-2 bg-gray-700 rounded" placeholder="Type a message..." />
          </div>
        );
      case "voice":
        return <motion.div className="w-16 h-16 bg-blue-500 rounded-full animate-pulse" />;
      default:
        return <div className="text-white">Select a mode.</div>;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {!isOpen && (
        <motion.div
          className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
        >
          🔵
        </motion.div>
      )}
      {isOpen && (
        <motion.div
          className="w-80 h-[500px] bg-black rounded-2xl shadow-xl overflow-hidden flex flex-col"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex justify-between items-center p-4">
            <span className="text-white text-lg">ChatSites</span>
            <X className="text-white cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">{renderChatContent()}</div>
          <div className="p-4 border-t border-gray-700 flex items-center justify-between">
            <button
              className={`px-4 py-2 text-sm rounded-lg ${chatMode === "text" ? "bg-blue-500" : "bg-gray-700"}`}
              onClick={() => setChatMode("text")}
            >
              Text
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-lg ${chatMode === "voice" ? "bg-blue-500" : "bg-gray-700"}`}
              onClick={() => setChatMode("voice")}
            >
              Voice
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

