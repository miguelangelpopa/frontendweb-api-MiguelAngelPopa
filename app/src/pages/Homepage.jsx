const Homepage = () => {
  const services = [
    {
      title: "Industriële Elektrische Installaties",
      desc: "Professionele installatie en onderhoud van elektrische systemen in bedrijven.",
    },
    {
      title: "Elektrische Renovaties",
      desc: "Modernisering en uitbreiding van elektrische installaties in woningen.",
    },
    {
      title: "Innovatieve Elektrische Oplossingen",
      desc: "Domotica, slimme installaties en duurzame energieoplossingen.",
    },
  ];

  const projects = [
    { title: "Kantoor Renovatie", img: "/uploads/gallery_img-01.jpg" },
    { title: "Industriële Ruimte", img: "/uploads/gallery_img-02.jpg" },
    { title: "Verlichtingsontwerp", img: "/uploads/gallery_img-03.jpg" },
  ];

  return (
    <div className="text-blue-600">
      {/* Home Section */}
    <section
  id="home"
  className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
  style={{ backgroundImage: `url(./images/slider-00.jpg')` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="relative text-center text-white z-10 px-4 drop-shadow">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Neem contact op met Clavimial Technical Solutions
    </h1>
    <p className="text-lg mb-6 font-medium">
      Samen bouwen we aan duurzame en innovatieve oplossingen voor uw groei en succes
    </p>
    <a
      href="#about"
      className="border-2 border-white bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition"
    >
      Leer Meer
    </a>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welkom bij Clavimial Technical Solutions</h2>
            <p className="mb-4">
              Uw partner in renovaties en elektriciteitswerken. Wij staan voor flexibiliteit, kwaliteit en klanttevredenheid.
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>Renovatie van woningen</li>
              <li>Vloeren en tegels leggen</li>
              <li>Installatie van verlichting en domotica</li>
            </ul>
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-full transition"
            >
              Contacteer Ons
            </a>
          </div>
          <div>
            <img
              src="/uploads/about_04.jpg"
              alt="Over Clavimial"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Diensten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Projecten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={p.img}
                  alt={`Foto van project: ${p.title}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p>
            <strong>Clavimial Technical Solutions BV</strong>
          </p>
          <p>Zaakvoerder: <strong>Popa Virgil</strong></p>
          <p>BTW: BE 0779.980.958</p>
          <p>Laarstraat 27, 9320 Aalst</p>
          <p>Telefoon: +32 (0)466.15.16.49</p>
          <p>
            Email:{" "}
            <a
              href="mailto:clavimial@telenet.be"
              className="text-amber-600 hover:underline"
            >
              clavimial@telenet.be
            </a>
          </p>
          <div className="mt-8">
            <iframe
              title="Locatie van Clavimial Technical Solutions"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.97320801085465!2d4.0051815493385385!3d50.91821352804593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a369d7c84be7%3A0x8ee41d163155b701!2sCLAVIMIAL%20TECHNICAL%20SOLUTIONS!5e1!3m2!1ses!2sbe!4v1763498890987!5m2!1ses!2sbe"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
