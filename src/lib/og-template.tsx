import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const ogSize = { width: 1200, height: 630 };

export function createOgImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1c1917 0%, #292524 100%)",
          padding: 64,
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 600, color: "#f97316", marginBottom: 12 }}>
          {company.name}
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#fafaf9",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div style={{ fontSize: 24, color: "#a8a29e", marginTop: 20, maxWidth: 800 }}>
            {subtitle}
          </div>
        ) : null}
        <div style={{ marginTop: 36, fontSize: 28, fontWeight: 700, color: "#f97316" }}>
          {company.phoneDisplay} · 24h/24
        </div>
      </div>
    ),
    ogSize,
  );
}
