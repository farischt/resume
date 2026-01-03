import PDFViewer from "@/components/PDFViewer";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[60%] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="z-10 w-full max-w-6xl h-[90vh] flex flex-col gap-6">
        <header className="flex flex-col items-center gap-2 text-center shrink-0">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
            Hey there!
          </h1>
          <p className="text-gray-400">
            Preview and download my latest curriculum vitae
          </p>
        </header>

        <section className="flex-1 min-h-0 relative">
          <PDFViewer />
        </section>

        <footer className="flex justify-center pb-2 shrink-0">
          <DownloadButton />
        </footer>
      </div>
    </main>
  );
}
