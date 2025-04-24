const Contact = () => (
  <section className="font-intertight bg-blue-300 py-20 text-white">
    <div className="flex flex-wrap items-center justify-center gap-20">
      <div>
        <h2 className="text-2xl font-bold">Kost Barokah</h2>
        <p className="mb-6 text-xl">
          Narahubung
          <br />
          Tanyakan kebutuhanmu terlebih dahulu untuk kenyamanan bersama
        </p>
        <a
          href="https://wa.me/625367307970"
          className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all duration-500 ease-out hover:bg-blue-700 lg:text-lg"
        >
          Hubungi
        </a>
      </div>
      <iframe
        title="Lokasi Kost Barokah"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.9013472308725!2d105.21273177480637!3d-4.956063095020052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40a90076b57b2f%3A0x7ef9fcd0656e5de1!2sKost%20Barokah%20Putri!5e0!3m2!1sid!2sid!4v1745417733682!5m2!1sid!2sid"
        width="600"
        height="450"
        className="h-72 w-full max-w-md rounded-2xl shadow-md"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);
export default Contact;
