"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          WarkopADF
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-navy hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 bg-navy transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-0.5 bg-navy ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`h-0.5 bg-navy transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-navy hover:bg-primary hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}