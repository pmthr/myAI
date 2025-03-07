import { Button } from "@/components/ui/button";
import { EraserIcon, RefreshCw } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

export const AILogo = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} />
    <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-1 right-1 border-2 border-background"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
  resetChat
}: {
  clearMessages: () => void;
  resetChat: () => void;
}) {
  return (
    <div className="z-10 flex justify-center items-center fixed top-0 w-full p-5 bg-background shadow-md text-foreground">
      <div className="flex w-full">
        <div className="flex-0 w-[100px]"></div>
        <div className="flex-1 flex justify-center items-center gap-2">
          <AILogo />
          <p>{CHAT_HEADER}</p>
        </div>
        <div className="flex-0 w-[100px] flex justify-end items-center gap-2">
          <Button
            onClick={resetChat}
            className="gap-2 shadow-sm"
            variant="outline"
            size="sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset</span>
          </Button>
          <Button
            onClick={clearMessages}
            className="gap-2 shadow-sm"
            variant="outline"
            size="sm"
          >
            <EraserIcon className="w-4 h-4" />
            <span>{CLEAR_BUTTON_TEXT}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
