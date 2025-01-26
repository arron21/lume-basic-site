import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "npm:octokit";

// const username = Deno.env.get("USERNAME") || "admin";
// const password = Deno.env.get("PASSWORD") || "admin";
const username = "admin";
const password = "admin";
const url = "http://localhost:3000";
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
      url,
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
  {
    name: "date",
    type: "datetime",
    label: "Created date",
    value: new Date(),
    description: "Set a future date if you want to publish it later",
    attributes: {
      placeholder: "For example: 2024-01-01 00:00:01",
    },
  },
]);

cms.collection("pages-md", "src:pages-md/*.md", [
  "title: text",
  "content: markdown",
]);

cms.collection("pages-tsx", "src:pages-tsx/*.tsx", [
  "content: code",
]);

cms.document(
{
  name: "Landing Page",
  description: "Edit the content of the home page of your website",
  store: "src:index.tsx",
  fields: [
    "content: code",
  ],
})

cms.document({
  name: "Navigation Links",
  description: "Edit the navbar links for your website",
  store: "src:_nav-links.ts",
  fields: [
    "content: code",
  ],
})
cms.upload("media", "src:media");
export default cms;
