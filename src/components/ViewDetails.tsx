import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FetchData from "../api/fetchData";

type ViewDetailsType = {
  id: string;
  name: string;
  city: string;
  phone: number;
};

const ViewDetails = () => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  return (
    <>
      <section className="container details">
        <h2>Details Student</h2>
        {studentData && (
          <div className="student-content">
            <h3>ID: {studentData.id}</h3>
            <p>
              <strong>Name: {studentData.name}</strong>
            </p>
            <p>
              <strong>City: {studentData.city}</strong>
            </p>
            <p>
              <strong>Phone: {studentData.phone}</strong>
            </p>
          </div>
        )}
        <Link to="/" className="btn btn-back">
          Back
        </Link>
      </section>
    </>
  );
};

export default ViewDetails;
