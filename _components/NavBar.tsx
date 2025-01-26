
interface NavbarProps {
  links: { text: string; href: string }[];
  sticky?: boolean;
  centered?: boolean;
}

export default function Navbar(
  { links, sticky = false, centered = false }: NavbarProps,
) {
  return (
    <nav
      className={`text-xl grid grid-flow-row sm:grid-flow-col ${
        sticky ? "sticky top-0 z-50" : ""
      } bg-transparent bg-opacity-50 backdrop-blur-md ${
        centered ? "justify-center" : ""
      }`}
    >
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <a
            href={link.href}
            className="px-4 py-2 dark:text-white hover:bg-gray-100 hover:text-black transition-colors"
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
