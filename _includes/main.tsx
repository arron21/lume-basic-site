import Navbar from "../_components/NavBar.tsx";

const links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Gallery", href: "/gallery" },
    { text: "Donate", href: "/donate" },
    { text: "Contact", href: "/contact" },
  ]

export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (

    
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>

      <Navbar
          sticky={true}
          links={links}
        />
        {children}
      </body>
    </html>
  );