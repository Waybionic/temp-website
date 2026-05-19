"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window { pdfjsLib: any; }
}

const PDFJS_VERSION = "3.11.174";
const PDFJS_CDN = `https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/build`;

export default function PdfViewer({ file }: { file: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    if (window.pdfjsLib) {
      render();
      return () => { cancelled = true; };
    }

    const script = document.createElement("script");
    script.src = `${PDFJS_CDN}/pdf.min.js`;
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${PDFJS_CDN}/pdf.worker.min.js`;
      if (!cancelled) render();
    };
    document.head.appendChild(script);

    async function render() {
      if (!containerRef.current) return;
      const lib = window.pdfjsLib;
      const pdf = await lib.getDocument(file).promise;
      if (cancelled || !containerRef.current) return;
      containerRef.current.innerHTML = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        if (cancelled || !containerRef.current) return;
        const page = await pdf.getPage(i);
        // render at 2x for sharpness, scale down w/ css
        const viewport = page.getViewport({ scale: 2 });

        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = "100%";
        canvas.style.display = "block";

        if (i > 1) {
          const divider = document.createElement("div");
          divider.style.cssText = "width:100%;height:8px;background:#f0ebf8;flexShrink:0;";
          containerRef.current.appendChild(divider);
        }
        containerRef.current.appendChild(canvas);
        await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
      }
    }

    return () => { cancelled = true; };
  }, [file]);

  return <div ref={containerRef} style={{ width: "100%" }} />;
}
