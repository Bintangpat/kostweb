const Nav = () => {
  return (
    <nav className="font-intertight fixed z-10 flex h-16 w-full items-center justify-center gap-10 bg-white p-4 text-sm shadow-lg">
      <a
        href="#"
        className="transition-all duration-500 ease-out hover:font-bold"
      >
        Home
      </a>
      <a
        href="#"
        className="transition-all duration-500 ease-out hover:font-bold"
      >
        Lokasi
      </a>
      <a
        href="#"
        className="transition-all duration-500 ease-out hover:font-bold"
      >
        Fasilitas
      </a>
      <a
        href="#"
        className="transition-all duration-500 ease-out hover:font-bold"
      >
        Kontak
      </a>
    </nav>
  );
};

export default Nav;
