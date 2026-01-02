import { useParams } from "react-router-dom";
import { Download, Printer, Loader2, AlertCircle } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Document, Page, pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


export default function ResumePreview() {
  const { pdfPath } = useParams<{ pdfPath: string }>();
  const { getToken } = useAuth();
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null); // لحساب عدد الصفحات
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchPdf = useCallback(async () => {
    if (!pdfPath) return;

    setIsLoading(true);
    setHasError(false);

    try {
      const token = await getToken({ template: "backend" });
      const res = await fetch(`${import.meta.env.VITE_API_URL}/resume/view-resume/${encodeURIComponent(pdfPath)}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to fetch PDF");

      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      setPdfBlobUrl(blobUrl);
    } catch (err) {
      console.error("Error fetching PDF:", err);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [pdfPath, getToken]);

  useEffect(() => {
    fetchPdf();
    return () => {
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
    };
  }, [fetchPdf]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    if (!pdfBlobUrl) return;
    const link = document.createElement("a");
    link.href = pdfBlobUrl;
    link.download = pdfPath?.split("/").pop() || "resume.pdf";
    link.click();
  };

  const handlePrint = () => {
    if (!pdfBlobUrl) return;
    const printWindow = window.open(pdfBlobUrl, "_blank");
    printWindow?.print();
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Header Section */}
      <div className="sticky top-0 z-20 flex items-center justify-between mb-4 bg-background   backdrop-blur border border-border rounded-xl p-4 shadow-sm">
        <div>
          <h2 className="font-semibold text-lg">Resume Preview</h2>
          <p className="text-sm text-muted-foreground truncate max-w-[200px] sm:max-w-xs">
            {pdfPath?.split("/").pop()}
          </p>
        </div>

        <div className="flex gap-2">
          <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm">
            <Download size={16} />
            <span className="hidden sm:inline text-white">Download</span>
          </button>
          <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition shadow-sm">
            <Printer size={16} />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </div>

      <div className="w-full h-[80vh] border border-border rounded-xl overflow-y-auto bg-gray-100 shadow-inner flex flex-col items-center p-4">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <Loader2 className="animate-spin text-blue-500" />
            <span className="text-muted-foreground text-sm font-medium">Preparing Document...</span>
          </div>
        )}

        {hasError && (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-red-500">
            <AlertCircle size={32} />
            <span className="font-medium">Failed to load PDF preview.</span>
          </div>
        )}

        {pdfBlobUrl && (
          <Document
            file={pdfBlobUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={null}
            className="flex flex-col items-center gap-4"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div key={`page_${index + 1}`} className="shadow-lg border border-gray-200">
                <Page 
                  pageNumber={index + 1} 
                  renderTextLayer={false} 
                  renderAnnotationLayer={false}
                  scale={1.2}
                  width={Math.min(window.innerWidth - 60, 800)}
                />
              </div>
            ))}
          </Document>
        )}
      </div>
    </div>
  );
}
