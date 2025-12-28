import { useParams } from "react-router-dom";
import { Download, Printer } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";

export default function ResumePreview() {
  const { pdfPath } = useParams<{ pdfPath: string }>();
  const token = localStorage.getItem("access_token"); // get your auth token
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!pdfPath || !token) return;

    const fetchPdf = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/resume/view-resume/${encodeURIComponent(pdfPath)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch PDF");

        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        setPdfBlobUrl(blobUrl);
      } catch (err) {
        console.error(err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPdf();

    // cleanup URL object when component unmounts
    return () => {
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
    };
  }, [pdfPath, token]);

  const handleDownload = () => {
    if (!pdfBlobUrl) return;
    const link = document.createElement("a");
    link.href = pdfBlobUrl;
    link.download = pdfPath.split("/").pop();
    link.click();
  };

  const handlePrint = () => {
    if (!pdfBlobUrl) return;
    const newWindow = window.open(pdfBlobUrl, "_blank");
    newWindow?.focus();
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* HEADER */}
      <div className="sticky top-0 z-10 flex items-center justify-between mb-4 bg-card border border-border rounded-xl p-4 shadow-sm">
        <div>
          <h2 className="font-semibold text-lg">Resume Preview</h2>
          <p className="text-sm text-muted-foreground">{pdfPath.split("/").pop()}</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition"
          >
            <Download size={16} />
            Download
          </button>

          <button
            onClick={handlePrint}
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
        {pdfBlobUrl && (
          <iframe
            src={pdfBlobUrl}
            title="Resume Preview"
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
}
