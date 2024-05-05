import type { Message } from "ai/react";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'


export function ChatMessageBubble(props: { message: Message, aiEmoji?: string, sources: any[] }) {
  const colorClassName =
    props.message.role === "user" ? "bg-sky-600 text-white" : "bg-slate-50 text-black";
  const alignmentClassName =
    props.message.role === "user" ? "items-end" : "items-start";
  const containerClassName =
    props.message.role === "user" ? "flex-row-reverse" : "flex-row";

  // Define the user initials or AI icon based on the role
  const iconElement = props.message.role === "user" ? (
    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white font-bold rounded-full">
      SO
    </div>
  ) : (
    <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-gray-500" />
  );

  return (
    <div className={`flex ${containerClassName} mb-8`}>
      {iconElement}
      <div
        className={`${colorClassName} rounded px-4 py-2 max-w-[80%] flex flex-col ${alignmentClassName}`}
      >
        <span>{props.message.content}</span>
        {props.sources && props.sources.length ? <>
          <code className="mt-4 mr-auto bg-slate-600 px-2 py-1 rounded">
            <h2>
              🔍 Sources:
            </h2>
          </code>
          <code className="mt-1 mr-2 bg-slate-600 px-2 py-1 rounded text-xs">
            {props.sources?.map((source, i) => (
              <div className="mt-2" key={"source:" + i}>
                {i + 1}. &quot;{source.pageContent}&quot;{
                  source.metadata?.loc?.lines !== undefined
                    ? <div><br/>Lines {source.metadata?.loc?.lines?.from} to {source.metadata?.loc?.lines?.to}</div>
                    : ""
                  }
              </div>
            ))}
          </code>
        </> : ""}
      </div>
    </div>
  );
}
