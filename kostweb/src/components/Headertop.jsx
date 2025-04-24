import { useEffect, useState } from "react";

const Headertop = () => {
  const texts = [
    "Tempat nyaman untuk beristirahat dari penatnya kerja",
    "Keamanan menjadi prioritas kami",
    "Sesuaikan dengan jam kerja produktifitas anda",
  ];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const visibleDuration = 2500;
    const hiddenDuration = 500;

    const timer = setTimeout(() => {
      setIsVisible(false); // Mulai menghilang

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length); // Ganti teks
        setIsVisible(true); // Munculkan kembali
      }, hiddenDuration);
    }, visibleDuration);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <header className="flex h-screen w-full items-center justify-center bg-white text-center 2xl:h-260">
      <h1
        className={`font-intertight w-[493px] text-2xl font-bold transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {texts[index]}
      </h1>
    </header>
  );
};

export default Headertop;
