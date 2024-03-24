#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if const_hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_promises = __toESM(require("node:fs/promises"), 1);
var import_generator_helper = require("@prisma/generator-helper");
(0, import_generator_helper.generatorHandler)({
  onManifest: () => ({
    defaultOutput: "dmmf.json",
    prettyName: "Prisma DMMF",
    version: "0.0.1"
  }),
  onGenerate: async (options) => {
    const output = options.generator.output?.value;
    if (!output) {
      throw new Error("No output path provided to DMMF generator");
    }
    const dmmf = JSON.stringify({ datamodel: options.dmmf.datamodel });
    try {
      await import_promises.default.writeFile(output, dmmf);
    } catch (e) {
      throw new Error(`Unable to write DMMF to ${output}: ${e}`);
    }
  }
});
