import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { AssetLoop } from "./composition.jsx";
const root = createRoot(document.getElementById("app"));
root.render(
  /* @__PURE__ */ jsxDEV(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000"
      },
      children: /* @__PURE__ */ jsxDEV(
        Player,
        {
          component: AssetLoop,
          durationInFrames: 180,
          fps: 30,
          compositionWidth: 540,
          compositionHeight: 960,
          loop: true,
          controls: true,
          autoplay: true,
          style: { maxWidth: "100%", maxHeight: "100%" }
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 19,
          columnNumber: 5
        }
      )
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 3
    }
  )
);
