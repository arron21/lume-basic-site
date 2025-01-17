// components/Footer.tsx
interface Link {
  text: string;
  href: string;
}

interface FooterProps {
  links: Link[];
}

export default function Footer({ links }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          {links.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()}{" "}
          Harold and Marzetta V. Jones Memorial Scholarship Charity. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
