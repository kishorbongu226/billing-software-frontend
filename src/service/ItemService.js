import axios from "axios";

// Add Item
export const addItem = async (item) => {
  return await axios.post(`https://billing-software-backend-5ien.onrender.com/api/v1.0/admin/items`, item, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

// Delete Item
export const deleteItem = async (itemId) => {
  return await axios.delete(
    `https://billing-software-backend-5ien.onrender.com/api/v1.0/admin/items/${itemId}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

// Fetch Items
export const fetchItems = async () => {
  return await axios.get("https://billing-software-backend-5ien.onrender.com/api/v1.0/items", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
