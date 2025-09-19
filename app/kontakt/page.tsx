"use client";

import React, { useState } from "react";
import { format, isSameDay, addMonths, getDaysInMonth } from "date-fns";

const availableDates = ["2025-08-23", "2025-08-26", "2025-08-28"];
const fullyBookedDates = ["2025-08-20", "2025-08-21"];

const isAvailable = (date: Date): boolean => {
  return availableDates.includes(format(date, "yyyy-MM-dd"));
};

const isBooked = (date: Date): boolean => {
  return fullyBookedDates.includes(format(date, "yyyy-MM-dd"));
};

export default function KontaktPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [appointmentType, setAppointmentType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [monthOffset, setMonthOffset] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, appointmentType, selectedDate, message });
  };

  const renderCalendarModal = () => {
    const currentMonth = addMonths(new Date(), monthOffset);
    const daysInMonth = getDaysInMonth(currentMonth);

    const days: React.JSX.Element[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );
      const formatted = format(date, "yyyy-MM-dd");
      const isSunday = date.getDay() === 0;
      const status = isSunday
        ? "closed"
        : isAvailable(date)
        ? "available"
        : isBooked(date)
        ? "booked"
        : "closed";

      let bg = "bg-gray-200 text-gray-400 cursor-not-allowed";
      if (status === "available")
        bg = "bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer";
      if (status === "booked")
        bg = "bg-red-100 text-red-600 cursor-not-allowed";

      days.push(
        <button
          key={formatted}
          className={`w-10 h-10 text-sm rounded-full ${bg} ${
            selectedDate && isSameDay(selectedDate, date)
              ? "ring-2 ring-green-600"
              : ""
          }`}
          onClick={() => {
            if (status === "available") {
              setSelectedDate(date);
              setShowCalendar(false);
            }
          }}
          disabled={status !== "available"}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="absolute z-20 mt-2 p-4 bg-white shadow-xl rounded border w-full">
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-sm text-blue-700 hover:underline"
            onClick={() => setMonthOffset((prev) => prev - 1)}
          >
            ◀ Vorheriger Monat
          </button>
          <span className="font-semibold">
            {format(currentMonth, "MMMM yyyy")}
          </span>
          <button
            className="text-sm text-blue-700 hover:underline"
            onClick={() => setMonthOffset((prev) => prev + 1)}
          >
            Nächster Monat ▶
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">{days}</div>
      </div>
    );
  };

  return (
    <main className="bg-white min-h-screen">
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
          Kontakt & Terminvereinbarung
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          Sie möchten mit uns Kontakt aufnehmen oder einen Termin vereinbaren?
          Nutzen Sie das untenstehende Formular oder kontaktieren Sie uns
          direkt.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Adresse
              </h3>
              <p>PhysioVital Ilmenau</p>
              <p>Goethestraße 12</p>
              <p>98693 Ilmenau</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Kontakt
              </h3>
              <p>Telefon: 03677 123456</p>
              <p>E-Mail: info@physiovital-ilmenau.de</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Öffnungszeiten
              </h3>
              <p>Mo – Fr: 08:00 – 18:00 Uhr</p>
              <p>Sa: 09:00 – 13:00 Uhr</p>
              <p>So: Geschlossen</p>
            </div>
            <div className="text-sm text-gray-500 italic pt-4">
              Für dringende Fälle stehen wir auch telefonisch zur Verfügung.
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-blue-50 p-8 rounded-lg shadow space-y-6 relative"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">E-Mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Art des Termins
              </label>
              <select
                value={appointmentType}
                onChange={(e) => setAppointmentType(e.target.value)}
                className="w-full p-3 rounded border border-gray-300"
                required
              >
                <option value="">Bitte wählen...</option>
                <option value="Beratung">Beratung</option>
                <option value="Schmerzbehandlung">Schmerzbehandlung</option>
                <option value="Rehabilitation">Rehabilitation</option>
              </select>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                Datum wählen
              </label>
              <input
                type="text"
                value={selectedDate ? format(selectedDate, "dd.MM.yyyy") : ""}
                onClick={() => setShowCalendar(!showCalendar)}
                placeholder="Datum auswählen"
                className="w-full p-3 rounded border border-gray-300 cursor-pointer"
                readOnly
              />
              {showCalendar && renderCalendarModal()}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Ihre Nachricht (optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded border border-gray-300"
                rows={4}
                placeholder="Womit können wir Ihnen helfen?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg font-medium hover:bg-blue-900 transition"
            >
              Termin anfragen
            </button>
          </form>
        </div>
      </section>

      <section>
        <iframe
          title="PhysioVital Lage"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.866983983601!2d10.93329541576228!3d50.683493879499215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a47ec96f2de1b5%3A0xa3e98a23e7635b3f!2sIlmenau!5e0!3m2!1sde!2sde!4v1620222222222!5m2!1sde!2sde"
          width="100%"
          height="400"
          loading="lazy"
          className="w-full border-0"
        ></iframe>
      </section>
    </main>
  );
}
