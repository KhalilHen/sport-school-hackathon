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
    <div className="Coaches">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="coachCardMap">
        {items.map((item) => (
          <div
            key={item.id}
            className="CoachImage"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataListPage;
