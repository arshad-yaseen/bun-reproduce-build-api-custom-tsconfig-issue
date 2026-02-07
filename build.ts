await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "dist",
  tsconfig: "./configs/tsconfig.custom.json"
})
