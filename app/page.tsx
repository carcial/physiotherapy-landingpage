import { physioGrid } from "@/utile/physioGrid";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/physio1.jpg"
            alt="Physiotherapeut behandelt Patienten"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:object-[center_right]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-6 md:px-20">
          <div className="text-white max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Gesund bewegen, besser leben
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Ihre moderne Physiotherapie in Ilmenau für eine schmerzfreie
              Zukunft.
            </p>
            <Link
              href="/kontakt"
              className="bg-white text-blue-800 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Jetzt Termin vereinbaren
            </Link>
          </div>
        </div>

        {/* Decorative Wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,224L60,218.7C120,213,240,203,360,197.3C480,192,600,192,720,197.3C840,203,960,213,1080,202.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </section>

      {/* Intro Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
            Willkommen bei{" "}
            <span className="text-blue-600">PhysioVital Ilmenau</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Unsere Praxis ist ein Ort der Heilung, Bewegung und persönlichen
            Betreuung. Mit einem Team aus erfahrenen Therapeuten und einem
            tiefen Verständnis für ganzheitliche Physiotherapie begleiten wir
            Sie auf dem Weg zu einem aktiveren, schmerzfreien Leben. Lassen Sie
            sich individuell beraten – in einer Atmosphäre, die Vertrauen
            schafft.
          </p>
          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-900 transition"
            >
              Jetzt Termin vereinbaren
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Unsere Leistungen
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {physioGrid.flat().map(({ id, title, image }) => (
            <div
              key={id}
              className="bg-blue-50 rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm">
                  Professionelle Behandlung individuell auf Sie abgestimmt.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-24 px-6 md:px-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 leading-tight">
            Unser Ansatz – Ganzheitlich & Persönlich
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Unsere Behandlungen basieren auf einem tiefen Verständnis des
            menschlichen Körpers. Wir kombinieren bewährte physiotherapeutische
            Methoden mit modernen Techniken, um nicht nur Symptome zu lindern,
            sondern die Ursachen gezielt zu behandeln.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-blue-50 py-28 px-6 md:px-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Team Visuals */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/team1.jpg"
              alt="Therapeutin bei der Behandlung"
              width={300}
              height={250}
              className="rounded-xl shadow-md transform rotate-[-2deg]"
            />
            <Image
              src="/images/team2.jpg"
              alt="Patient wird betreut"
              width={300}
              height={250}
              className="rounded-xl shadow-md transform rotate-[2deg]"
            />
            <Image
              src="/images/team3.jpg"
              alt="Team beim Gespräch"
              width={300}
              height={250}
              className="rounded-xl shadow-md transform rotate-[1deg]"
            />
            <Image
              src="/images/team4.jpg"
              alt="Therapeutin im Gespräch"
              width={300}
              height={250}
              className="rounded-xl shadow-md transform rotate-[-1deg]"
            />
          </div>

          {/* Right: Text & Features */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-extrabold text-blue-800 mb-6 leading-tight">
              Ihre Gesundheit liegt uns am Herzen
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Unser engagiertes Team aus erfahrenen Physiotherapeut:innen
              begleitet Sie mit einem ganzheitlichen Blick auf Ihre Gesundheit.
              Gemeinsam entwickeln wir einen individuellen Behandlungsplan, der
              auf Ihre Bedürfnisse zugeschnitten ist – für mehr Beweglichkeit,
              Wohlbefinden und Lebensfreude.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-700">
                <h4 className="text-blue-800 font-semibold text-lg mb-2">
                  📝 Therapiepläne
                </h4>
                <p className="text-gray-600 text-sm">
                  Individuell und effektiv – abgestimmt auf Ihre Ziele.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-700">
                <h4 className="text-blue-800 font-semibold text-lg mb-2">
                  ⚙️ Moderne Technik
                </h4>
                <p className="text-gray-600 text-sm">
                  Fortschrittliche Methoden für optimale Ergebnisse.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-700">
                <h4 className="text-blue-800 font-semibold text-lg mb-2">
                  🏠 Familiäre Atmosphäre
                </h4>
                <p className="text-gray-600 text-sm">
                  Vertrauen, Nähe und persönlicher Kontakt.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-700">
                <h4 className="text-blue-800 font-semibold text-lg mb-2">
                  ♿ Barrierefrei
                </h4>
                <p className="text-gray-600 text-sm">
                  Zugang für alle – ohne Hindernisse.
                </p>
              </div>
            </div>

            <Link
              href="/kontakt"
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-900 transition"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Was unsere Patienten sagen
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Patient 1 */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition">
            <Image
              src="/images/testimonial1.jpg"
              alt="Patientin Laura M."
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-blue-800">Laura M.</h3>
            <p className="text-sm text-gray-500 mb-2">Rückenschmerzen</p>
            <div className="flex justify-center mb-4 text-yellow-400">
              {"★★★★★"}
            </div>
            <p className="text-gray-700 italic">
              „Nach monatelangen Rückenschmerzen bin ich endlich schmerzfrei!
              Das Team war unglaublich einfühlsam und kompetent.“
            </p>
          </div>

          {/* Patient 2 */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition">
            <Image
              src="/images/testimonial2.jpg"
              alt="Patientin Anna K."
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-blue-800">Anna K.</h3>
            <p className="text-sm text-gray-500 mb-2">Sportverletzung</p>
            <div className="flex justify-center mb-4 text-yellow-400">
              {"★★★★★"}
            </div>
            <p className="text-gray-700 italic">
              „Dank der intensiven Betreuung konnte ich nach meiner
              Knieverletzung wieder mit dem Laufen beginnen. Absolut
              empfehlenswert!“
            </p>
          </div>

          {/* Patient 3 */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition">
            <Image
              src="/images/testimonial3.jpg"
              alt="Patient Markus B."
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-blue-800">Markus B.</h3>
            <p className="text-sm text-gray-500 mb-2">Bandscheibenvorfall</p>
            <div className="flex justify-center mb-4 text-yellow-400">
              {"★★★★★"}
            </div>
            <p className="text-gray-700 italic">
              „Nach meinem Bandscheibenvorfall dachte ich, ich müsste mit
              Schmerzen leben. Doch hier habe ich echte Hilfe gefunden.“
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-blue-800 text-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bereit für den ersten Schritt zu einem schmerzfreien Leben?
        </h2>
        <p className="mb-8">
          Vereinbaren Sie jetzt einen Termin – wir freuen uns auf Sie!
        </p>
        <Link
          href="/kontakt"
          className="bg-white text-blue-800 px-6 py-3 rounded-full text-lg shadow-md hover:bg-gray-100 transition"
        >
          Termin vereinbaren
        </Link>
      </section>
    </>
  );
}
