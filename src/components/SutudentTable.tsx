import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type SutudentTableType = {
  id: number;
  name: string;
  city: string;
  phone: string;
};

const SutudentTable = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
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
                    <a href="" className="btn btn-info">
                      View
                    </a>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SutudentTable;
