import ChatPortal from "@/components/ChatPortal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-black text-3xl font-bold mb-4">Welcome to ChatSites - The Revolution Begins Now</h1>
      <p className="text-gray-700 mb-6">The AI Operating System You Didn’t Know You Needed.</p>
      <ChatPortal />
    </div>
  );
}

