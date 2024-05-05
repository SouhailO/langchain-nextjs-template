"use client";

import { usePathname } from 'next/navigation';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'

export function Navbar() {
  const pathname = usePathname();

  const linkStyle = "px-4 py-2 mx-20 text-center rounded-3 hover:bg-blue-400 transition-colors duration-200 cursor-pointer";
  const activeStyle = "text-white bg-blue-500";

  return (
    <nav className="mb-4 flex justify-center items-center rounded-2 bg-opacity-50 bg-blue-300 p-2 text-gray-400">
      <a className={`${linkStyle} ${pathname === "/" ? activeStyle : ""}`} href="/">
        <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 inline-block mr-2 -mt-1" />
        Chat
      </a>
      <a className={`${linkStyle} ${pathname === "/structured_output" ? activeStyle : ""}`} href="/structured_output">
          Output Structuré
      </a>
      <a className={`${linkStyle} ${pathname === "/agents" ? activeStyle : ""}`} href="/agents">
          Agents
      </a>
      <a className={`${linkStyle} ${pathname === "/retrieval" ? activeStyle : ""}`} href="/retrieval">
          RAG
      </a>
      <a className={`${linkStyle} ${pathname === "/retrieval_agents" ? activeStyle : ""}`} href="/retrieval_agents">
          RAG Agents
      </a>
    </nav>
  );
}
