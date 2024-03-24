const esbuild = require("esbuild");

console.time("build");
esbuild
	.build({
		entryPoints: ["src/index.ts"],
		bundle: true,
		outfile: "dist/index.js",
		platform: "node",
		packages: "external",
	})
	.then(() => {
		console.timeEnd("build");
	});
