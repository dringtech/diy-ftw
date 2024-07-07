import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  location: new URL('https://diy-ftw.deno.dev/'),
});

site.use(base_path());
site.use(metas());

export default site;
