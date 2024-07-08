import init from "https://deno.land/x/deno_dom@v0.1.47/build/deno-wasm/deno-wasm.js";
import lumeCMS, { Fs } from "lume/cms/mod.ts";

const cms = lumeCMS();

// Configuration here
cms.storage("tools", "tools");

cms.collection("tools", "tools:*.md", [
  "title: text",
  "description: text",
  "homepage: url",
  {
    name: "type",
    type: "select",
    options: [
      "command-line-app",
      "data-portal",
      "database",
      "desktop-app",
      "integration",
      "library",
      "miscellaneous",
      "orchestration",
      "programming-language",
      "site-generator",
      "web-app",
      "web-platform",
    ],
  },
  "content: markdown",
]);

export default cms;
