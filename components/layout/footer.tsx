export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white text-center">
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="px-4">
            <h2 className="text-xl font-semibold mb-4">Tourism SAFARIS</h2>
            <p className="text-sm">
              Khael Tourism Safaris  is a reliable Uganda Safaris & Tour operator with years of experience serving tourists from all over the world.
            </p>
          </div>
          <div className="px-4">
            <h2 className="text-xl font-semibold mb-4">Helpful Links</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="/about-us">About Us</a></li>
              <li className="mb-2"><a href="/contact-us">Contact Us</a></li>
              <li className="mb-2"><a href="/posts/bunyonyi">Our Safari Blog</a></li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-sm">
              Khael Safaris<br />
              Address: Zana, off Entebbe road Kampala - Uganda<br />
              P.O Box 12345 Kampala<br />
              Phone: +256 755 574905<br />
              E-mail: aleku399gmail.com
            </p>
          </div>
        </div>
      </footer>
      <p className="text-gray-500 py-3">
        {new Date().getFullYear()}{" "}
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://twitter.com/aleku399"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright
        </a>
      </p>
    </div>
  );
}
