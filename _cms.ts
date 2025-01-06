import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "npm:octokit";

const username = Deno.env.get("USERNAME");
const password = Deno.env.get("PASSWORD");

const cms = lumeCMS(
    {
        auth: {
            method: "basic",
            users: {
                [username]: password,
            },
        },
        site: {
            name: "My blog CMS",
            description: "Here I can edit the content of my blog",
            url: "https://myblog.com",
            body: `
            <p>Long text, for instructions or other content that you want to make it visible in the homepage</p>
            `,
          },
    }
    
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

  cms.document("landing-page", "src:index.tsx", [
    "title: text",
    "subtitle: text",
    "content: markdown",
  ]);
cms.upload("images", "src:images");
export default cms;
