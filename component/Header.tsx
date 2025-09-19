"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Startseite" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/impressum", label: "Impressum" },
  ];

  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="text-2xl font-bold">
          PhysioVital
        </Link>

        {/* Desktop Nav + CTA */}
        <div className="hidden md:flex items-center gap-x-6">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:underline ${
                  pathname === link.href
                    ? "underline underline-offset-4 font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/kontakt"
            className="bg-white text-blue-800 px-4 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition"
          >
            Termin vereinbaren
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Menü öffnen"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 hover:underline ${
                pathname === link.href
                  ? "underline underline-offset-4 font-semibold"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="block mt-3 bg-white text-blue-800 px-4 py-2 rounded-full text-center shadow-md hover:bg-gray-100 transition"
          >
            Termin vereinbaren
          </Link>
        </div>
      )}
    </header>
  );
}
