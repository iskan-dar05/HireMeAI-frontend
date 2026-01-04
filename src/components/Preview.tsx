import { Document, Page } from "react-pdf";
import { Loader2, AlertCircle } from "lucide-react";


interface PreviewProps {
  isLoading: boolean;
  hasError: boolean;
  pdfBlobUrl: string | null;
  numPages: number | null;
  onDocumentLoadSuccess: ({ numPages }: { numPages: number }) => void;
}



export default function Preview({
  isLoading,
  hasError,
  pdfBlobUrl,
  numPages,
  onDocumentLoadSuccess,
}: PreviewProps) {
  return (
    <div className="w-full h-[80vh] border border-border rounded-xl overflow-y-auto bg-gray-100 shadow-inner flex flex-col items-center p-4">
      
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <Loader2 className="animate-spin text-blue-500" />
          <span className="text-muted-foreground text-sm font-medium">
            Preparing Document...
          </span>
        </div>
      )}

      {hasError && (
        <div className="flex flex-col items-center justify-center h-full gap-2 text-red-500">
          <AlertCircle size={32} />
          <span className="font-medium">Failed to load PDF preview.</span>
        </div>
      )}

      {pdfBlobUrl && !isLoading && !hasError && (
        <Document
          file={pdfBlobUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={null}
          className="flex flex-col items-center gap-4"
        >
          {Array.from(new Array(numPages), (_, index) => (
            <div
              key={`page_${index + 1}`}
              className="shadow-lg border border-gray-200"
            >
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
  );
}
