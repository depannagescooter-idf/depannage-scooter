"use client";

import dynamic from "next/dynamic";

const ClientChrome = dynamic(
  () => import("@/components/ClientChrome").then((m) => m.ClientChrome),
  { ssr: false },
);

const DeferredVitals = dynamic(
  () => import("@/components/DeferredVitals").then((m) => m.DeferredVitals),
  { ssr: false },
);

export function ClientShell() {
  return (
    <>
      <ClientChrome />
      <DeferredVitals />
    </>
  );
}
