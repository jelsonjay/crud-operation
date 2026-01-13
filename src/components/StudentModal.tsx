import { useEffect, useState } from "react";
import "./StudentModal.css";
import { Link, useParams } from "react-router-dom";
import FetchData from "../api/fetchData";

type Props = {
  onCloseBtn: () => void;
};

const StudentModal = ({ onCloseBtn }: Props) => {
  const { id } = useParams();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch(FetchData.students.url + id)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onCloseBtn}>
          &times;
        </span>
        <div>
          <h2>Details Student</h2>
          <h3>ID:</h3>
          <p>
            <strong>Name:</strong>
          </p>
          <p>
            <strong>City:</strong>
          </p>
          <p>
            <strong>Phone:</strong>
          </p>
        </div>
        <Link to="/" className="btn btn-back">
          Back
        </Link>
      </div>
    </section>
  );
};

export default StudentModal;
