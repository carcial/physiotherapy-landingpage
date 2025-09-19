"use client";

import React from "react";

export default function ImpressumPage() {
  return (
    <main className="bg-white min-h-screen px-6 md:px-20 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        Impressum
      </h1>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Angaben gemäß § 5 TMG
      </p>

      <section className="space-y-8 text-gray-800">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Anbieter</h2>
          <p>PhysioVital Ilmenau</p>
          <p>Inhaber: Max Mustermann</p>
          <p>Goethestraße 12</p>
          <p>98693 Ilmenau</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Kontakt</h2>
          <p>Telefon: 03677 123456</p>
          <p>E-Mail: info@physiovital-ilmenau.de</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>Max Mustermann</p>
          <p>Goethestraße 12, 98693 Ilmenau</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Haftung für Links
          </h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Urheberrecht
          </h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
            Dritter sind als solche gekennzeichnet.
          </p>
        </div>
      </section>
    </main>
  );
}
