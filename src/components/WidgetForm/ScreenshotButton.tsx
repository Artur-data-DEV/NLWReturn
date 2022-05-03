import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

export function ScreenshotButton() {
  const [isTakingScreeshot, setIsTakingScreeshot] = useState(false);
  async function handleTakeScreenshot() {
    setIsTakingScreeshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    console.log(base64image);
    setIsTakingScreeshot(false);
  }
  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >
      {isTakingScreeshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6" />
      )}
    </button>
  );
}
