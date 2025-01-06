
interface NavbarProps {
    links: { text: string; href: string }[];
    sticky?: boolean;
}

export default function Navbar({ links, sticky = false }: NavbarProps) {
return (
    <nav
    className={`bg-neutral-800 text-white ${
        sticky ? "sticky top-0 z-50" : ""
    }`}
    >
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
        Harold and Marzetta V. Jones Memorial Scholarship Charity 
        </a>

        {/* Hamburger Icon */}
        <button
        className="block md:hidden focus:outline-none"
        >
        <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            
        </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
        {links.map((link) => (
            <a
            href={link.href}
            className="hover:text-blue-400 transition-colors"
            >
            {link.text}
            </a>
        ))}
        </div>
    </div>

    </nav>
);
}
