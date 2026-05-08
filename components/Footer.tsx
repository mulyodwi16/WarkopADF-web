import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-semibold text-xl mb-2">WarkopADF</p>
        <p className="text-gray-400 mb-4">Menerima Pesanan Aneka Masakan & Catering</p>
        <p className="text-gray-400 text-sm">
          Jl. Kaliasin Pompa No.77 | WhatsApp: 0815-1576-0009
        </p>
        <p className="text-gray-500 text-xs mt-4">© 2026 WarkopADF. All rights reserved.</p>
      </div>
    </footer>
  );
}