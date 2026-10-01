import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "Rota da Pizza 76 — Pizzaria no Brás, São Paulo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function toDataUri(file: string, mime: string) {
  const data = await readFile(join(process.cwd(), "public/images", file));
  return `data:${mime};base64,${data.toString("base64")}`;
}

export default async function OpengraphImage() {
  const [photo, emblem] = await Promise.all([
    toDataUri("hero-rota76-animada.jpg", "image/jpeg"),
    toDataUri("emblema-rota76-claro.png", "image/png"),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", color: "#faf7f2" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          width={1200}
          height={675}
          style={{ position: "absolute", top: -22, left: 0, width: 1200, height: 675 }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background: "linear-gradient(90deg, #0d0a09 0%, rgba(13,10,9,0.9) 42%, rgba(13,10,9,0.45) 62%, rgba(13,10,9,0) 85%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            maxWidth: 780,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={emblem} alt="" width={132} height={132} style={{ width: 132, height: 132 }} />
          <div style={{ marginTop: 28, fontSize: 70, lineHeight: 1, letterSpacing: -2, whiteSpace: "nowrap" }}>
            Rota da Pizza 76
          </div>
          <div style={{ marginTop: 20, maxWidth: 560, fontSize: 30, lineHeight: 1.3, color: "rgba(250,247,242,0.8)" }}>
            55 sabores, espaço familiar com lareira, delivery e retirada.
          </div>
          <div style={{ marginTop: 32, display: "flex", fontSize: 24, color: "#5fc27e", whiteSpace: "nowrap" }}>
            4,6 estrelas no Google · Terça a domingo, 18h às 23h30
          </div>
        </div>
      </div>
    ),
    size,
  );
}
