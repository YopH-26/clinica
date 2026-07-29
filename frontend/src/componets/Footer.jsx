
const Footer = () => {
  return (
    <footer className="bg-[rgb(243,248,252)] max-w-7xl mx-auto px-4 sm:px-6 md:px-10 my-1">
      <address className="not-italic">
        {/* Lista de contactos */}
        <ul className="flex items-center justify-center gap-4 sm:gap-6 text-sm text-gray-700">
          {/* Teléfono */}
          <li>
            <a
              href="tel:+5355555555"
              aria-label="Llamar al +53 5555 5555"
              className="flex items-center justify-center p-2 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path d="M8 11h.01" />
                <path d="M12 11h.01" />
                <path d="M16 11h.01" />
              </svg>
              <span className="sr-only">Llamar al</span>{' '}
              <span className="hidden lg:inline-block ml-2">
                +53 5555 5555
              </span>{' '}
            </a>
          </li>

          {/* Correo */}
          <li>
            <a
              href="mailto:correo@correo.com"
              aria-label="Enviar correo a correo@correo.com"
              className="flex items-center justify-center p-2 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="sr-only">Enviar correo a</span>{' '}
              <span className="hidden lg:inline-block ml-2">
                correo@correo.com
              </span>{' '}
            </a>
          </li>

          {/* Dirección */}
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+5ta+%2310+La+Habana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir ubicación Calle 5ta número 10 en Google Maps"
              className="flex items-center justify-center p-2 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="sr-only">Abrir en mapas</span>
              <span className="hidden lg:inline-block ml-2">Calle 5ta #10</span>
            </a>
          </li>
        </ul>
      </address>
    </footer>
  );
};

export default Footer;
