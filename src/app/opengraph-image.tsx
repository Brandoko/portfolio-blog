import { ImageResponse } from "next/server";
import colors from "tailwindcss/colors";

export const runtime = "edge";

export const alt = "Brandon Kocur";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          color: colors.slate[100],
          background: colors.slate[900],
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: colors.blue[400],
            width: "10px",
            height: "100px",
            marginRight: "20px",
          }}
        />
        <div>Brandon Kocur</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
