"use client";

import dynamic from "next/dynamic";
import { DeferredConsent } from "@/components/DeferredConsent";

const DeferredVitals = dynamic(
  () => import("@/components/DeferredVitals").then((m) => m.DeferredVitals),
  { ssr: false },
);

export function DeferredClientShell() {
  return (
    <>
      <DeferredConsent />
      <DeferredVitals />
    </>
  );
}
