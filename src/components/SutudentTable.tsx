import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FetchData from "../api/fetchData";
//import DeleteModal from "../components/DeleteModal";
// import StudentModal from "../components/StudentModal";

type SutudentTableType = {
  id: number;
  name: string;
  city: string;
  phone: string;
};

const SutudentTable = () => {
  const [student, setStudent] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(FetchData.students.url)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const displayDetails = (id: number) => {
    navigate(`/view/${id}`);
  };

  const editDetails = (id: number) => {
    console.log(id);
    navigate(`/edit/${id}`);
  };

  // const onCloseBtn = () => {
  //   setShowModal(false);
  // };

  // {showModal && <DeleteModal onCloseBtn={onCloseBtn} />}

  const removeDetails = (id: number) => {
    if (window.confirm("Are you sure you wnat to delete!"))
      fetch(`http://localhost:8000/students/${id}`, {
        method: FetchData.removeStudent.method,
      })
        .then(() => {
          alert("Remove student data successfull!");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="container">
        <h1>Sutudent Info</h1>
        <div className="table-container">
          <Link to="/create" className="btn btn-add">
            Add New Student
          </Link>
          <table>
            <thead>
              <tr>
                <th>ID:</th>
                <th>Name</th>
                <th>City</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {student &&
                student?.map((item: SutudentTableType) => (
                  <tr key={item?.id}>
                    <td>{item?.id}</td>
                    <td>{item?.name}</td>
                    <td>{item?.city}</td>
                    <td>{item?.phone}</td>
                    <td>
                      <button
                        onClick={() => displayDetails(item?.id)}
                        className="btn btn-info"
                      >
                        View
                      </button>
                      <button
                        onClick={() => editDetails(item?.id)}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeDetails(item?.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* {showModal && <DeleteModal onCloseBtn={onCloseBtn} />} */}
    </>
  );
};

export default SutudentTable;
