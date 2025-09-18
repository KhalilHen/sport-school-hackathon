import { useEffect, useState } from "react";

function DataListPage({ title, fetchUrl, renderItem }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(fetchUrl, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [fetchUrl]);


  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="grid gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border shadow-md p-4 hover:shadow-lg transition"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataListPage;
