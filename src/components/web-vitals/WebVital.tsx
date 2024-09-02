"use client";

import { useReportWebVitals } from "next/web-vitals";

// Analytics - Measuring and reporting performance metrics
// Ref: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
export default function WebVital() {
  useReportWebVitals((metric) => {
    console.log(metric);
  });

  return null;
}
