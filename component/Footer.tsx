import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-sm">
        <div className="text-center md:text-left">
          <p className="text-white/80">
            &copy; 2025{" "}
            <span className="font-semibold text-white">
              PhysioVital Ilmenau
            </span>
            . Alle Rechte vorbehalten.
          </p>
          <p className="mt-1 text-white/60">
            Website gestaltet & entwickelt von{" "}
            <span className="text-white font-medium italic underline underline-offset-2">
              Vadel Tchoumene
            </span>
          </p>
        </div>
        <div className="space-x-4 mt-4 md:mt-0 text-white/90">
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
