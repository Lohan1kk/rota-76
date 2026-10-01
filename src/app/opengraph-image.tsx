import { ImageResponse } from "next/og";

export const alt = "Rota da Pizza 76 — Pizzaria no Brás, São Paulo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f3ece0",
          background:
            "radial-gradient(ellipse 70% 80% at 100% 100%, #8a2131 0%, #3d1219 45%, #110e0d 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              border: "2px solid #d4a23f",
              color: "#d4a23f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            76
          </div>
          <div style={{ fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#d4a23f" }}>
            Brás · São Paulo
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>Rota da Pizza 76</div>
          <div style={{ marginTop: 24, fontSize: 36, color: "rgba(243,236,224,0.75)" }}>
            Pizzaria com espaço familiar, lareira, delivery e retirada.
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 28, color: "rgba(243,236,224,0.85)" }}>
          <div style={{ display: "flex" }}>4,6 estrelas no Google</div>
          <div style={{ display: "flex" }}>Abre às 18:00</div>
          <div style={{ display: "flex" }}>(11) 96640-2249</div>
        </div>
      </div>
    ),
    size,
  );
}
