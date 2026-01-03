export default function PDFViewer() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm relative">
      <iframe
        src="/Faris_Chtatou_Resume.pdf"
        className="w-full h-full rounded-xl"
        title="CV Preview"
      />
    </div>
  );
}
