#!/usr/bin/env node

import fs from "node:fs/promises";
import { generatorHandler } from "@prisma/generator-helper";

generatorHandler({
	onManifest: () => ({
		defaultOutput: "dmmf.json",
		prettyName: "Prisma DMMF",
		version: "0.0.1",
	}),
	onGenerate: async (options) => {
		const output = options.generator.output?.value;

		if (!output) {
			throw new Error("No output path provided to DMMF generator");
		}

		const dmmf = JSON.stringify({ datamodel: options.dmmf.datamodel });

		try {
			await fs.writeFile(output, dmmf);
		} catch (e) {
			throw new Error(`Unable to write DMMF to ${output}: ${e}`);
		}
	},
});
