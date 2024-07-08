import lumeCMS, { Fs } from "lume/cms/mod.ts";

const cms = lumeCMS();

// Configuration here
cms.storage('tools', 'tools');

cms.collection('tools', 'tools:*.md', [
  "title: text",
  "description: text",
  "homepage: url",
  {
    name: "type",
    type: "select",
    options: [
      "database",
      "web-app",
      "desktop-app",
      "command-line-app",
      "programming-language",
      "library",
      "data-portal",
      "miscellaneous",
      "site-generator",
      "web-platform",
      ""
    ],
  },
  "content: markdown",
])

export default cms;