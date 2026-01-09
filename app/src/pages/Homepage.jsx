import { useState, useEffect } from "react";

const Homepage = () => {
  const slides = [
    {
      id: 1,
      img: "src/images/slider-00.jpg",
      title: "Neem contact op met Clavimial Technical Solutions",
      text: "Samen bouwen we aan duurzame en innovatieve oplossingen voor uw groei en succes",
    },
    {
      id: 2,
      img: "src/images/slider-02.jpg",
      title: "HUISRENOVATIES",
      text: "Wij zijn gespecialiseerd in complete huisrenovaties, van kleine verbouwingen tot grootschalige transformaties.",
    },
    {
      id: 3,
      img: "src/images/slider-03.jpg",
      title: "ELEKTRISCHE INSTALLATIES",
      text: "Gespecialiseerd in projecten van elektrische installaties en onderhoud",
    },
  ];

  const projects = [
    { title: "Kantoor Renovatie", img: "src/images/gallery_img-01.jpg" },
    { title: "Industriële Ruimte", img: "src/images/gallery_img-02.jpg" },
    { title: "Verlichtingsontwerp", img: "src/images/gallery_img-03.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, [slides.length]);

  const goTo = (index) => setCurrent(index);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="text-black dark:text-slate-100 bg-white dark:bg-slate-950">
      {/* HOME / SLIDER */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-xl text-white">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                    {slide.title}
                  </h2>
                  <p className="mb-6 text-lg md:text-xl">{slide.text}</p>
                  <a
                    href="#about"
                    className="inline-block bg-white hover:bg-black text-black hover:text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Leer Meer
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controles */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white items-center justify-center hover:bg-black/60 transition z-10"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white items-center justify-center hover:bg-black/60 transition z-10"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full border border-white ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-16 bg-gray-50 dark:bg-slate-900/60 transition-colors"
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-slate-100">
              Welkom bij Clavimial Technical Solutions - Uw partner in
              renovaties en elektriciteitswerken
            </h2>
            <p className="mb-3 text-gray-800 dark:text-slate-300">
              Bij Clavimial Technical Solutions staan wij voor flexibiliteit,
              kwaliteit en klanttevredenheid.
            </p>
            <p className="mb-3 text-gray-800 dark:text-slate-300">
              Met een gedreven team van vakbekwame specialisten en betrouwbare
              onderaannemers leveren wij topwerk dat aan al uw verwachtingen
              voldoet. Van kleine renovaties tot grote verbouwingen, wij zorgen
              ervoor dat elk project met zorg en vakmanschap wordt uitgevoerd.
            </p>
            <p className="mb-3 text-gray-800 dark:text-slate-300">
              Dankzij onze jarenlange ervaring in de sector en ons oog voor
              detail, kunt u rekenen op:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-1 text-gray-800 dark:text-slate-300">
              <li>Renovatie van woningen</li>
              <li>Vloeren leggen en tegels leggen</li>
              <li>Ontwerpen en installeren van verlaagde plafonds</li>
              <li>Installatie van schakelkasten en verdelers</li>
              <li>Elektrische onderhoud en reparaties</li>
              <li>Installatie van verlichting en verlichtingssystemen</li>
              <li>Slimme elektrische oplossingen en domotica</li>
            </ul>
            <a
              href="#contactForm"
              className="inline-block bg-white hover:bg-black text-black hover:text-white px-6 py-2 rounded-full font-semibold transition dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-black dark:hover:text-white"
            >
              Contacteer Ons
            </a>
          </div>
          <div>
            <img
              src="src/images/about_04.jpg"
              alt="Clavimial"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Projecten gedaan", value: "180" },
            { label: "Uren werk", value: "+5000" },
            { label: "Ideeën", value: "1000" },
            { label: "Klanten", value: "50" },
          ].map((c) => (
            <div
              key={c.label}
              className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 shadow"
            >
              <h3 className="text-3xl font-extrabold text-black dark:text-slate-100">
                {c.value}
              </h3>
              <p className="mt-2 font-semibold text-gray-800 dark:text-slate-300">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 bg-slate-50 dark:bg-slate-900/70"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-black dark:text-slate-100 tracking-tight">
              Diensten
            </h2>
            <p className="mt-3 text-gray-600 dark:text-slate-300">
              We zijn hier om uw ideeën te ontwikkelen
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Industriële Elektrische Installaties",
                text: "Professionele installatie en onderhoud van elektrische systemen in fabrieken en bedrijven.",
                icon: "src/images/icons/industrial.svg",
              },
              {
                title: "Elektrische Renovaties",
                text: "Modernisering en uitbreiding van elektrische installaties in woningen en gebouwen.",
                icon: "src/images/icons/renovation.svg",
              },
              {
                title: "Creatief Verlichtingsontwerp",
                text: "Slimme en stijlvolle verlichting voor zowel woningen als industriële ruimtes.",
                icon: "src/images/icons/lighting.svg",
              },
              {
                title: "Technische Ondersteuning & Service",
                text: "Snelle en efficiënte storingsdienst en onderhoud voor al uw elektrische systemen.",
                icon: "src/images/icons/support.svg",
              },
              {
                title: "Innovatieve Elektrische Oplossingen",
                text: "Advies en implementatie van domotica, slimme installaties en duurzame energie.",
                icon: "src/images/icons/innovation.svg",
              },
              {
                title: "Energiebeheer & Duurzame Technologieën",
                text: "Zonnepanelen, energieopslag en efficiënte systemen voor energiebesparing.",
                icon: "src/images/icons/energy.svg",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="relative bg-white dark:bg-slate-900 rounded-[40px] px-10 py-10 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_40px_rgba(15,23,42,0.6)] flex flex-col items-center text-center hover:shadow-[0_22px_50px_rgba(15,23,42,0.14)] dark:hover:shadow-[0_22px_50px_rgba(15,23,42,0.9)] transition-shadow duration-300"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0f3364]">
                  {service.icon ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <span className="text-3xl text-white">⚡</span>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-slate-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-slate-300 leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 bg-gray-50 dark:bg-slate-900/70"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-slate-100">
            Projecten
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-slate-900"
              >
                <img
                  src={p.img}
                  alt={`Foto van project: ${p.title}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black dark:text-slate-100">
                    {p.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section
        id="contact"
        className="py-16 bg-gray-50 dark:bg-slate-900/70"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-black dark:text-slate-100">
              Contact
            </h2>
          </div>
          <div className="mb-6 space-y-1 text-center text-gray-800 dark:text-slate-300">
            <p>
              <strong>Clavimial Technical Solutions BV</strong>
            </p>
            <p>
              Zaakvoerder: <strong>Popa Virgil</strong>
            </p>
            <p>BTW: BE 0779.980.958</p>
            <p>Laarstraat 27, 9320 Aalst</p>
            <p>Telefoon: +32 (0)466.15.16.49</p>
            <p>
              Email:{" "}
              <a
                href="mailto:clavimial@telenet.be"
                className="underline text-black dark:text-slate-100"
              >
                clavimial@telenet.be
              </a>
            </p>
            <p>
              Of contacteer ons via het{" "}
              <a
                href="#contactForm"
                className="underline font-medium text-black dark:text-slate-100"
              >
                contactformulier
              </a>
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Clavimial Technical Solutions locatie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20124.87220947798!2d4.00637435!3d50.912450050000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a2c671970017%3A0x28760234c91d0946!2sLaarstraat%2027%2C%209320%20Aalst!5e0!3m2!1sro!2sbe!4v1742733996963!5m2!1sro!2sbe"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contactForm" className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-black dark:text-slate-100">
              Contacteer ons
            </h2>
            <p className="text-gray-700 dark:text-slate-300">
              Geslaagde projecten met Clavimial Technical Solutions
            </p>
          </div>
          <form className="max-w-3xl mx-auto bg-gray-50 dark:bg-slate-900 p-6 rounded-2xl shadow space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Uw Naam"
                className="border border-gray-300 rounded-lg p-2 w-full dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              />
              <input
                type="email"
                placeholder="Uw Email"
                className="border border-gray-300 rounded-lg p-2 w-full dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              />
            </div>
            <input
              type="tel"
              placeholder="Uw Telefoon"
              className="border border-gray-300 rounded-lg p-2 w-full dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
            <textarea
              placeholder="Uw Bericht"
              className="border border-gray-300 rounded-lg p-2 w-full h-32 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white hover:bg-black text-black hover:text-white px-6 py-2 rounded-full font-semibold transition dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-black dark:hover:text-white"
              >
                Stuur bericht
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
