const Navbar = () => {
  return (
    <nav className="w-full bg-white text-blue-700 border-b-2 border-black py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <img src="src/images/logo.jpg" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-10 font-semibold">
          <a href="#home" className="hover:text-blue-900 transition">Home</a>
          <a href="#about" className="hover:text-blue-900 transition">About</a>
          <a href="#services" className="hover:text-blue-900 transition">Service</a>
          <a href="#contact" className="hover:text-blue-900 transition">Contact</a>
        </div>

        {/* Login a la derecha */}
        <div>
          <a
            href="login"
            className="font-semibold bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
