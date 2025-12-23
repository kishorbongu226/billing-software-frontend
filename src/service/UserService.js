import axios from "axios";

// Add User
export const addUser = async (user) => {
  return await axios.post(
    "http://localhost:8080/api/v1.0/admin/register",
    user,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

// Delete User
export const deleteUser = async (id) => {
  return await axios.delete(
    `http://localhost:8080/api/v1.0/admin/users/${id}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

// Fetch Users
export const fetchUsers = async () => {
  return await axios.get("http://localhost:8080/api/v1.0/admin/users", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
