import lume from "https://deno.land/x/lume@v2.5.0/mod.ts";
import { serve } from "https://deno.land/std@0.198.0/http/server.ts";
import * as proxy from "jsr:@http/proxy";

const CMS_URL = "https://arronmccror-lume-basic-54.deno.dev/";

// Initialize the Lume site
const site = lume();
site.ignore("admin"); // Exclude `/admin` from the build process

// Create the Lume middleware
const lumeMiddleware = await site.serverMiddleware();

// Define the request handler
const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);

  if (url.pathname.startsWith("/admin")) {
    // Proxy `/admin` requests to the CMS
    const cmsUrl = new URL(url.pathname.replace("/admin", ""), CMS_URL);
    cmsUrl.search = url.search;

    const proxyReq = new Request(cmsUrl, {
      method: req.method,
      headers: req.headers,
      body: req.body,
    });

    return await proxy(proxyReq);
  }


  // Serve static content with Lume middleware
  const response = await site.runMiddleware(req);
  if (response) return response;

  // Fallback: 404 for unmatched routes
  return new Response("Not Found", { status: 404 });
};

// Start the server
serve(handler);
