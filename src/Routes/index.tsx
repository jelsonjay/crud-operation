import { Route, Routes } from "react-router-dom";
import Student from "../pages/Student";
import CreateStudent from "../components/CreateStudent";
import EditStudent from "../components/EditStudent";
import ViewDetails from "../components/ViewDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Student />} />
      <Route path="/create" element={<CreateStudent />} />
      <Route path="/view/:id" element={<ViewDetails />} />
      <Route path="/edit/:studentid" element={<EditStudent />} />
    </Routes>
  );
};

export default AppRouter;
