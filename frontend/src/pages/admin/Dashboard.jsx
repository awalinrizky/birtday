import AdminLayout from "../../layouts/AdminLayout";
import StatCard from "../../components/admin/StatCard";

export default function Dashboard() {

  const stats = [
    {
      title: "Timeline",
      value: 2,
      color: "bg-rose-100",
    },
    {
      title: "Gallery",
      value: 6,
      color: "bg-amber-100",
    },
    {
      title: "Letters",
      value: 1,
      color: "bg-sky-100",
    },
    {
      title: "Playlist",
      value: 1,
      color: "bg-emerald-100",
    },
  ];

  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold mb-8">
        Welcome Back 👋
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            color={item.color}
          />
        ))}

      </div>

    </AdminLayout>
  );
}