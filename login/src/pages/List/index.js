import React, { useState, useEffect } from "react";

import { api } from "../../services/api";

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      const { data } = await api.get("/");

      setItems(data);
    };

    getAllData();
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.total_consume} - {item.total_value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
