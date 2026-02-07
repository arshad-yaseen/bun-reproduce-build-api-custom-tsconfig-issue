await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "dist",
  tsconfig: "./tsconfig.custom.json"
})
