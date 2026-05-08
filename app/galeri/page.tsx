export default function GaleriPage() {
  const galleryItems = [
    { id: 1, title: "Ayam Goreng Spesial", category: "Menu" },
    { id: 2, title: "Rendang Daging", category: "Menu" },
    { id: 3, title: "Paket Nasi Box", category: "Packaging" },
    { id: 4, title: "Catering Pernikahan", category: "Event" },
    { id: 5, title: "Ayam Bakar", category: "Menu" },
    { id: 6, title: "Sayur Nangka", category: "Menu" },
    { id: 7, title: "Setup Catering", category: "Event" },
    { id: 8, title: "Udang Goreng", category: "Menu" },
    { id: 9, title: "Paket Nasi Box Premium", category: "Packaging" },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-navy mb-4">Galeri</h1>
        <p className="text-center text-gray-600 mb-12">Dokumentasi makanan dan acara dari WarkopADF</p>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:bg-gray-300 transition-colors"
            >
              <span className="text-4xl mb-2">🍽️</span>
              <span className="text-sm font-medium">{item.title}</span>
              <span className="text-xs text-gray-500">{item.category}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          * Foto akan ditambahkan setelah sesi foto produk selesai
        </p>
      </div>
    </div>
  );
}