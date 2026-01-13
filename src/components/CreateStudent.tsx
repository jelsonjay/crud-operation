import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FetchData from "../api/fetchData";

const CreateStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setValidation] = useState(false);

  const navigate = useNavigate();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentData = { id, name, city, phone };
    console.log(studentData);
    fetch(FetchData.students.url, {
      method: FetchData.students.method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then(() => {
        alert("Student data saved successfull");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className="container">
      <h2>Add New Student</h2>
      <div className="sub-container">
        <form onSubmit={handleOnSubmit}>
          <div className="input-control">
            <label htmlFor="studentid">ID*</label>
            <input
              type="text"
              id="studentid"
              name="studentid"
              onChange={(e) => setId(e.target.value)}
              onMouseDown={() => setValidation(true)}
              value={id}
              required
            />
            {id.length === 0 && validation && (
              <span className="error-msg">Please enter your id</span>
            )}
          </div>
          <div className="input-control">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              onMouseDown={() => setValidation(true)}
              value={name}
              required
            />
            {name.length === 0 && validation && (
              <span className="error-msg">Please enter your name</span>
            )}
          </div>
          <div className="input-control">
            <label htmlFor="city">City*</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={(e) => setCity(e.target.value)}
              onMouseDown={() => setValidation(true)}
              value={city}
              required
            />
            {city.length === 0 && validation && (
              <span className="error-msg">Please enter your city</span>
            )}
          </div>
          <div className="input-control">
            <label htmlFor="phone">Phone*</label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              onMouseDown={() => setValidation(true)}
              value={phone}
              required
            />
            {phone.length === 0 && validation && (
              <span className="error-msg">Please enter your phone number</span>
            )}
          </div>

          <div className="btns">
            <button className="btn btn-save">Save</button>
            <Link to="/" className="btn btn-back">
              Back
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateStudent;
