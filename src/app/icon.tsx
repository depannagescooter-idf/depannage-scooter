import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FF5A1F 0%, #c2410c 100%)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: 800,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          DS
        </div>
      </div>
    ),
    { ...size },
  );
}
