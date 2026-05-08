import Link from "next/link";
import { heroContent, services, menuCategories } from "@/data/menu";

const WHATSAPP_LINK = `https://wa.me/6281515760009?text=${encodeURIComponent("Halo WarkopADF, saya ingin bertanya tentang menu dan catering.")}`;

export default function Home() {
  const featuredItems = menuCategories.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroContent.heading}</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">{heroContent.subheading}</p>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-navy font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all"
          >
            Pesan via WhatsApp
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover">
                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy mb-4">Menu Unggulan</h2>
          <p className="text-center text-gray-600 mb-12">Pilihan menu populer dari WarkopADF</p>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredItems.map((category) => (
              <div key={category.id} className="card p-6 card-hover">
                <h3 className="text-xl font-semibold text-primary mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.slice(0, 4).map((item) => (
                    <li key={item} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/menu" className="inline-block mt-4 text-primary font-medium hover:underline">
                  Selengkapnya →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kenapa Memilih Kami</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🍲</div>
              <h3 className="font-semibold mb-2">Rasa Authentic</h3>
              <p className="text-gray-300 text-sm">Resep tradisional dengan cita rasa khas</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🚚</div>
              <h3 className="font-semibold mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-300 text-sm">Tepat waktu untuk acara Anda</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">💰</div>
              <h3 className="font-semibold mb-2">Harga Bersahabat</h3>
              <p className="text-gray-300 text-sm">Kualitas premium dengan harga terjangkau</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">⭐</div>
              <h3 className="font-semibold mb-2">Pelayanan Prima</h3>
              <p className="text-gray-300 text-sm">Customer satisfaction adalah prioritas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Testimoni</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-secondary text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">"Masakan catering dari WarkopADF sangat enak! Semua tamu puas dengan makanannya. Recommended!"</p>
              <p className="font-semibold text-navy">- Bu Dewi, Wedding Organizer</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-secondary text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">"Sudah 3 kali pesan nasi box untuk acara kantor. Porsinya pas, rasanya juara!"</p>
              <p className="font-semibold text-navy">- Pak Hendra, perusahaan swasta</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Siap Memesan?</h2>
          <p className="text-navy text-lg mb-8">Hubungi kami via WhatsApp untuk konsultasi dan pemesanan</p>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  );
}