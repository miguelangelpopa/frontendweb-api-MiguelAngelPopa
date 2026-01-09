import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-50 dark:bg-slate-950 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="src/images/logo.jpg"
              alt="Clavimial Technical Solutions"
              className="h-10 w-auto rounded-md shadow-sm"
            />
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-slate-100">
                Clavimial Technical Solutions BV
              </p>
              <p className="text-xs text-neutral-500 dark:text-slate-400">
                Professionele elektrische en technische oplossingen op maat.
              </p>
            </div>
          </div>


          <div className="grid grid-cols-2 gap-4 text-left text-xs text-neutral-600 dark:text-slate-400 sm:grid-cols-3">
            <div>
              <p className="mb-1 font-semibold text-neutral-800 dark:text-slate-100">
                Bedrijf
              </p>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Over ons
                  </Link>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Projecten
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-1 font-semibold text-neutral-800 dark:text-slate-100">
                Diensten
              </p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#services"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Installaties
                  </a>
                </li>
                <li>
                  <a
                    href="#contactForm"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Offerte aanvragen
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-1 font-semibold text-neutral-800 dark:text-slate-100">
                Juridisch
              </p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Privacybeleid
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-black dark:hover:text-white"
                  >
                    Algemene voorwaarden
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="mt-6 border-t border-neutral-200 dark:border-slate-800" />

        <div className="mt-4 flex flex-col items-center justify-between gap-2 text-xs text-neutral-500 dark:text-slate-500 sm:flex-row">
          <p>
            © 2025 Clavimial Technical Solutions BV. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4">
            <a
              href="#privacy"
              className="hover:text-neutral-800 dark:hover:text-slate-200"
            >
              Privacybeleid
            </a>
            <a
              href="#terms"
              className="hover:text-neutral-800 dark:hover:text-slate-200"
            >
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
