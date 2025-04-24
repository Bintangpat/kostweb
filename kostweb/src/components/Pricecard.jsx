const Pricecard = () => (
  <section className="font-intertight py-16 text-center">
    <h2 className="mb-10 text-4xl font-bold">
      Pilihan Kamar
      <p className="text-lg font-medium text-zinc-500">
        Pilih kamar yang sesuai dengan kebutuhan anda
      </p>
    </h2>

    <div className="flex flex-wrap justify-center gap-8">
      <div className="flex h-70 w-71 flex-col justify-between rounded-2xl border-2 border-zinc-400 p-5 shadow-sm transition-all duration-300 ease-out lg:h-131.75 lg:w-134.5 lg:p-23">
        <div className="flex h-[92px] lg:h-[119px] lg:w-[119px]">
          <img
            className="h-full w-full"
            width=""
            src="../src/assets/Woman-icon.svg"
            alt="Kamar 1 Sendiri"
          />
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-bold lg:text-2xl">Kamar 1 Sendiri</h3>
            <p className="text-sm font-medium text-zinc-500 lg:text-2xl">
              Kasur
            </p>
          </div>
          <div className="flex flex-row items-center-safe gap-x-8">
            <p className="text-sm font-semibold lg:text-2xl">Rp 650.000</p>
            <a
              href="https://wa.me/625367307970"
              className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all duration-500 ease-out hover:bg-blue-700 lg:text-lg"
            >
              Hubungi
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-70 w-71 flex-col justify-between rounded-2xl border-2 border-zinc-400 p-5 shadow-sm transition-all duration-300 ease-out lg:h-131.75 lg:w-134.5 lg:p-23">
        <div className="flex h-[119px] w-[119px]">
          <img
            className="flex h-[92px] lg:h-[119px] lg:w-[119px]"
            width=""
            src="../src/assets/Woman-icon.svg"
            alt="Kamar 1 Sendiri"
          />
          <img
            className="flex h-[92px] lg:h-[119px] lg:w-[119px]"
            width=""
            src="../src/assets/Woman-icon.svg"
            alt="Kamar 1 Sendiri"
          />
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-bold lg:text-2xl">Kamar 1 Berdua</h3>
            <p className="text-sm font-medium text-zinc-500 lg:text-2xl">
              Kasur
            </p>
          </div>
          <div className="flex flex-col items-start justify-between text-zinc-500">
            <span className="flex flex-col text-center text-[0.50rem] lg:text-[0.75rem]">
              <span className="font-semibold">Rp 350.000</span>
              <span className="font-semibold">+</span>
              <span className="font-semibold">Rp 350.000</span>
            </span>

            <div className="flex flex-row items-center justify-center gap-x-8">
              <span className="text-sm font-semibold text-black lg:text-2xl">
                Rp 750.000
              </span>
              <a
                href="https://wa.me/625367307970"
                className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all duration-500 ease-out hover:bg-blue-700 lg:text-lg"
              >
                Hubungi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Pricecard;
