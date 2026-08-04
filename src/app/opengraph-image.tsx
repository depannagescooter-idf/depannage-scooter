import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const runtime = "edge";
export const alt = company.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #fafaf9 0%, #fff7ed 100%)",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#1c1917",
            marginBottom: 16,
          }}
        >
          {company.name}
        </div>
        <div style={{ fontSize: 28, color: "#78716c" }}>
          Dépannage & remorquage scooter · moto · 24h/24
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 32,
            fontWeight: 700,
            color: "#f97316",
          }}
        >
          {company.phoneDisplay}
        </div>
      </div>
    ),
    { ...size },
  );
}
