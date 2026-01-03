import { Download } from "lucide-react";

export default function DownloadButton() {
  return (
    <a
      href="/Faris_Chtatou_Resume.pdf"
      download="Faris_Chtatou_Resume.pdf"
      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium transition-colors hover:bg-gray-200"
    >
      <Download className="w-4 h-4" />
      <span>Download my CV</span>
    </a>
  );
}
