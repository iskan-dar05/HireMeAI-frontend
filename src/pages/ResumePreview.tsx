import { useParams } from "react-router-dom";
import { Download, Printer } from "lucide-react";
import { useState } from "react";

export default function ResumePreview() {
  const { pdfPath } = useParams<{ pdfPath: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!pdfPath) {
    return <div className="text-center py-10">PDF not found</div>;
  }

  const pdfUrl = `http://127.0.0.1:8000/resume/view-resume/${encodeURIComponent(pdfPath)}`;
  const fileName = pdfPath.split("/").pop();

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* HEADER */}
      <div className="sticky top-0 z-10 flex items-center justify-between mb-4 bg-card border border-border rounded-xl p-4 shadow-sm">
        <div>
          <h2 className="font-semibold text-lg">Resume Preview</h2>
          <p className="text-sm text-muted-foreground">{fileName}</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <a
            href={pdfUrl}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition"
          >
            <Download size={16} />
            Download
          </a>

          <button
            onClick={() => window.open(pdfUrl, "_blank")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted/10 transition"
          >
            <Printer size={16} />
            Print
          </button>
        </div>
      </div>

      {/* PDF VIEW */}
      <div className="w-full h-[85vh] sm:h-[75vh] md:h-[85vh] border border-border rounded-xl overflow-hidden bg-white shadow-sm relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
            <span className="text-muted-foreground">Loading PDF...</span>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-600 z-10">
            Failed to load PDF.
          </div>
        )}
        <iframe
          src={pdfUrl}
          title="Resume Preview"
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      </div>
    </div>
  );
}
