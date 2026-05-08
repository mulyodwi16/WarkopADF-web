export default function MenuCard({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-shadow border border-gray-100">
      <p className="text-navy font-medium">{name}</p>
    </div>
  );
}