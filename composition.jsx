import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, Audio, Img } from "remotion";
const AssetLoop = () => {
  return /* @__PURE__ */ jsxDEV(
    AbsoluteFill,
    {
      style: {
        background: "#111",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsxDEV(
          Img,
          {
            src: "/wow-.png",
            style: {
              width: "80%",
              height: "auto",
              maxWidth: 400,
              borderRadius: 24,
              boxShadow: "0 18px 40px rgba(0,0,0,0.65)",
              objectFit: "cover"
            }
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 13,
            columnNumber: 7
          }
        ),
        /* @__PURE__ */ jsxDEV(Audio, { src: "/hey-thats-on-websim.mp3" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 25,
          columnNumber: 7
        }),
        /* @__PURE__ */ jsxDEV(Audio, { src: "/wowowowowow-noise.wav" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 26,
          columnNumber: 7
        })
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 6,
      columnNumber: 5
    }
  );
};
export {
  AssetLoop
};
