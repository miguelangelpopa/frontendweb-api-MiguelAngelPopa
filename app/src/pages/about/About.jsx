import { Link, Outlet } from "react-router";

const About = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white">
    <div className="max-w-5xl mx-auto px-6 py-16">
     
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Over ons
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          Clavimial Technical Solutions BV biedt industriële en residentiële elektrische
          oplossingen op maat, met focus op veiligheid, duurzaamheid en persoonlijk advies.
        </p>
      </header>

     
      <nav className="mb-10">
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link
              to="/about/services"
              className="inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Onze diensten
            </Link>
          </li>
          <li>
            <Link
              to="/about/history"
              className="inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Geschiedenis
            </Link>
          </li>
          <li>
            <Link
              to="/about/location"
              className="inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Locatie & contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Subroutes */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 md:p-8 transition-colors">
        <Outlet />
      </div>
    </div>
  </div>
);

export default About;

export const Services = () => (
  <section className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-black dark:text-slate-100 tracking-tight">
        Diensten
      </h2>
      <p className="mt-3 text-gray-600 dark:text-slate-300">
        We zijn er om uw ideeën te realiseren met betrouwbare en efficiënte elektrische oplossingen.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          title: "Industriële elektrische installaties",
          text: "Professionele installatie en onderhoud van elektrische systemen in fabrieken en bedrijven.",
          icon: "src/images/icons/industrial.svg",
        },
        {
          title: "Elektrische renovaties",
          text: "Modernisering en uitbreiding van elektrische installaties in woningen en gebouwen.",
          icon: "src/images/icons/renovation.svg",
        },
        {
          title: "Creatief verlichtingsontwerp",
          text: "Slimme en stijlvolle verlichting voor zowel woningen als industriële ruimtes.",
          icon: "src/images/icons/lighting.svg",
        },
        {
          title: "Technische ondersteuning & service",
          text: "Snelle en efficiënte storingsdienst en onderhoud voor al uw elektrische systemen.",
          icon: "src/images/icons/support.svg",
        },
        {
          title: "Innovatieve elektrische oplossingen",
          text: "Advies en implementatie van domotica, slimme installaties en duurzame energie.",
          icon: "src/images/icons/innovation.svg",
        },
        {
          title: "Energiebeheer & duurzame technologieën",
          text: "Zonnepanelen, energieopslag en efficiënte systemen voor energiebesparing.",
          icon: "src/images/icons/energy.svg",
        },
      ].map((service) => (
        <article
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
        </article>
      ))}
    </div>
  </section>
);

// Aquí quita faker si no lo importas; puedes meter texto real.
export const History = () => (
  <section className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
    <h2 className="text-2xl md:text-3xl font-bold mb-2">
      Geschiedenis
    </h2>
    <p>
      Clavimial Technical Solutions BV is ontstaan uit jarenlange ervaring in
      industriële en residentiële elektriciteitswerken. We combineren vakmanschap
      met moderne technologie om betrouwbare installaties te realiseren.
    </p>
    <p>
      Vanuit onze vestiging in Aalst ondersteunen we bedrijven en particulieren
      in Vlaanderen met advies, installatie, renovatie en onderhoud.
    </p>
  </section>
);

export const Location = () => (
  <section id="contact" className="container mx-auto px-6">
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
  </section>
);
