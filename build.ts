import esbuild from "esbuild";

console.time("build");
await esbuild.build({
	entryPoints: ["src/index.ts"],
	bundle: true,
	outfile: "dist/index.js",
	platform: "node",
	packages: "external",
});
console.timeEnd("build");
