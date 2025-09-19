import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p>&copy; 2025 PhysioVital Ilmenau. Alle Rechte vorbehalten.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <Link href="/impressum" className="hover:underline">
            Impressum
          </Link>
          <Link href="/kontakt" className="hover:underline">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
