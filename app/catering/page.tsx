import Link from "next/link";

const WHATSAPP_LINK = `https://wa.me/6281515760009?text=${encodeURIComponent("Halo WarkopADF, saya ingin bertanya tentang catering.")}`;

const cateringPackages = [
  {
    title: "Paket Nasi Box",
    description: "Paket lengkap untuk acara meeting, selamatan, atau acara kantor",
    items: ["Nasi box dengan lauk pilihan", "Puding atau buah", "Air mineral", "Peralatan makan"]
  },
  {
    title: "Paket Catering Komplit",
    description: "Layanan catering lengkap untuk pernikahan, ulang tahun, dan acara besar",
    items: ["Menu sesuai request", "Peralatan lengkap", "Tim setup & service", "Free konsultasi menu"]
  },
  {
    title: "Paket Masakan Harian",
    description: "Pesan masakan harian untuk keluarga atau komunitas",
    items: ["Beragam pilihan menu", "Bahan berkualitas", "Pengiriman fresco", "Custom sesuai selera"]
  }
];

export default function CateringPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-navy mb-4">Layanan Catering</h1>
        <p className="text-center text-gray-600 mb-12">Various catering packages for all your needs</p>

        {/* Packages */}
        <div className="space-y-8">
          {cateringPackages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary">
              <h2 className="text-2xl font-bold text-navy mb-2">{pkg.title}</h2>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <ul className="space-y-2">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Options Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Pilihan Lauk & Sayur</h3>
            <p className="text-gray-600 mb-4">Berbagai pilihan lauk dan sayur untuk melengkapi menu catering Anda:</p>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li>• Rendang</li>
              <li>• Ayam Goreng</li>
              <li>• Ayam Bakar</li>
              <li>• Semur Daging</li>
              <li>• Sayur Nangka</li>
              <li>• Sayur Asem</li>
              <li>• Urap</li>
              <li>• Tumis Kangkung</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Pemesanan Party Besar</h3>
            <p className="text-gray-600 mb-4">Untuk pemesanan dalam jumlah besar (100+ porsi), silakan hubungi langsung untuk konsultasi dan penawaran harga.</p>
            <p className="text-gray-600">Kami siap membantu merencanakan menu yang sesuai dengan budget dan selera Anda.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-navy mb-6">Siap Memesan?</h3>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-navy font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all"
          >
            Hubungi Kami via WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}