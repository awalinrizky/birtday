import { NavLink } from "react-router-dom";

const menus = [
  { name: "Dashboard", path: "/admin" },
  { name: "Timeline", path: "/admin/timeline" },
  { name: "Gallery", path: "/admin/gallery" },
  { name: "Letter", path: "/admin/letter" },
  { name: "Playlist", path: "/admin/playlist" },
  { name: "Future", path: "/admin/future" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">

      <div className="p-6 text-2xl font-bold">
        Our Little Place
      </div>

      <nav className="flex flex-col">

        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className="px-6 py-3 hover:bg-rose-50"
          >
            {menu.name}
          </NavLink>
        ))}

      </nav>
    </aside>
  );
}