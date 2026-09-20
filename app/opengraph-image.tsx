import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#F5F7F6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ width: 20, height: 20, borderRadius: 999, backgroundColor: "#0B6B5D" }} />
          <div style={{ fontSize: 40, fontWeight: 600, color: "#0D1B18" }}>{SITE_NAME}</div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 72,
            fontWeight: 600,
            color: "#0D1B18",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Mold Doesn&apos;t Belong Here. Let&apos;s Fix That.
        </div>
        <div style={{ marginTop: 32, fontSize: 28, color: "#4A5B56" }}>
          Mold inspection &amp; remediation across NYC and Long Island
        </div>
      </div>
    ),
    { ...size }
  );
}
