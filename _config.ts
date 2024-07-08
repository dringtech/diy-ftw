import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import esbuild from "lume/plugins/esbuild.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  src: "./src",
  location: new URL("https://diy-open-data.deno.dev/"),
});

site.use(base_path());
site.use(esbuild());
site.use(metas());

export default site;
