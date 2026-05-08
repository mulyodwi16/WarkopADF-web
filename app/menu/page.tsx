import { menuCategories } from "@/data/menu";
import MenuCard from "@/components/MenuCard";

export default function MenuPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-navy mb-4">Menu Kami</h1>
        <p className="text-center text-gray-600 mb-12">Pilihan masakan untuk berbagai acara dan kebutuhan Anda</p>

        {/* Price Notice */}
        <div className="bg-primary bg-opacity-10 border border-primary rounded-xl p-6 mb-12 text-center">
          <p className="text-primary font-medium">
            Harga menyesuaikan isi pesanan dan jumlah porsi.
          </p>
          <p className="text-gray-600 mt-2">
            Silakan hubungi WhatsApp untuk informasi lebih lanjut.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {menuCategories.map((category) => (
            <div key={category.id}>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-3 h-3 bg-secondary rounded-full mr-3"></span>
                {category.name}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <MenuCard key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={`https://wa.me/6281515760009?text=${encodeURIComponent("Halo WarkopADF, saya ingin bertanya tentang menu.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-navy font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all"
          >
            Tanya Harga
          </a>
        </div>
      </div>
    </div>
  );
}