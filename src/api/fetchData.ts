export const apiUrl = import.meta.env.VITE_BACKEND_URL;

const FetchData = {
  // ===USERS ENDPOINT===
  students: {
    url: `${apiUrl}/students`,
    method: "POST",
  },
  userDetails: {
    url: `${apiUrl}/students`,
    method: "GET",
  },
  updateStudent: {
    url: `${apiUrl}/students`,
    method: "PUT",
  },
  removeStudent: {
    url: `${apiUrl}/students`,
    method: "DELETE",
  },
};
export default FetchData;
