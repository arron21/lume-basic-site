import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "npm:octokit";

// const username = Deno.env.get("USERNAME") || "admin";
// const password = Deno.env.get("PASSWORD") || "admin";
const username = "admin";
const password = "admin";
const cms = lumeCMS(
  {
    auth: {
      method: "basic",
      users: {
        [username]: password,
      },
    },
    site: {
      name: "Basic CMS",
      description: "Edit the content of your website",
      url: "https://myblog.com",
      body: `
            <p>Long text, for instructions or other content that you want to make it visible in the homepage</p>
            `,
    },
  },
);

cms.storage(
  "src",
  new GitHub({
    client: new Octokit({ auth: Deno.env.get("GITHUB_TOKEN") }),
    owner: "arron21",
    repo: "lume-basic-site",
  }),
);

cms.collection("posts", "src:posts/*.md", [
  "title: text",
  "content: markdown",
]);

cms.collection("pages-md", "src:pages-md/*.md", [
  "title: text",
  "content: markdown",
]);

cms.collection("pages-tsx", "src:pages-tsx/*.tsx", [
  "content: code",
]);

cms.document("landing-page", "src:index.tsx", [
  "title: text",
  "subtitle: text",
  "content: markdown",
]);

cms.document("Navigation Links", "src:_nav-links.ts", [
  "content: code",
]);

cms.upload("images", "src:images");
export default cms;
