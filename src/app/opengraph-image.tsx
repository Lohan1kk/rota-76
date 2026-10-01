import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "Rota da Pizza 76 — Pizzaria no Brás, São Paulo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const emblem = await readFile(join(process.cwd(), "public/images/emblema-rota76.jpg"));
  const emblemSrc = `data:image/jpeg;base64,${emblem.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 56px 64px 80px",
          color: "#f3ece0",
          background: "radial-gradient(ellipse 65% 90% at 0% 100%, #6b1a27 0%, #2a0d12 45%, #000000 75%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#d4a23f" }}>
            Pizzaria no Brás · São Paulo
          </div>
          <div style={{ marginTop: 28, fontSize: 76, lineHeight: 1, letterSpacing: -2, whiteSpace: "nowrap" }}>
            Rota da Pizza 76
          </div>
          <div style={{ marginTop: 24, fontSize: 32, lineHeight: 1.3, color: "rgba(243,236,224,0.75)" }}>
            55 sabores, espaço familiar com lareira, delivery e retirada.
          </div>
          <div style={{ marginTop: 40, display: "flex", gap: 32, fontSize: 24, color: "rgba(243,236,224,0.85)" }}>
            <div style={{ display: "flex" }}>4,6 estrelas no Google</div>
            <div style={{ display: "flex" }}>Ter. a dom. · 18h às 23h30</div>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={emblemSrc} width={440} height={440} alt="" style={{ width: 440, height: 440 }} />
      </div>
    ),
    size,
  );
}
