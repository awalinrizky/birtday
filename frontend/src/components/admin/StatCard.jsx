export default function StatCard({
  title,
  value,
  color = "bg-rose-100",
}) {
  return (
    <div className={`${color} rounded-2xl p-6 shadow-sm`}>

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>

    </div>
  );
}