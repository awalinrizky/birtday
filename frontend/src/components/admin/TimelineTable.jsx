export default function TimelineTable({
  timelines,
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4">No</th>

            <th>Date</th>

            <th>Title</th>

            <th>Image</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {timelines.map((item, index) => (

            <tr
              key={item.id}
              className="border-b"
            >

              <td className="p-4">
                {index + 1}
              </td>

              <td>
                {new Date(item.event_date)
                  .toLocaleDateString()}
              </td>

              <td>
                {item.title}
              </td>

              <td>

                <img

                  src={`http://localhost:5000/uploads/story/${item.image}`}

                  className="w-20 h-16 rounded object-cover"

                />

              </td>

              <td>

                <button>

                  ✏️

                </button>

                <button className="ml-3">

                  🗑️

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}