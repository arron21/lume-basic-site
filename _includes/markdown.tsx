import BodyText from "../_components/BodyText.tsx";
import Logo from "../_components/Logo.tsx";
import Navbar from "../_components/NavBar.tsx";
import { links } from "../_nav-links.ts";

export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <html>
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="/styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body className="dark:bg-black dark:text-white">
      <Logo centered={true} image="/assets/image/logoipsum-235.svg" />
      <Navbar
        centered={true}
        sticky={true}
        links={links}
      />

      <BodyText>
        {children}
      </BodyText>
    </body>
  </html>
);
