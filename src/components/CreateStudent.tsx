const CreateStudent = () => {
  return (
    <section className="container">
      <h2>Add New Student</h2>
      <form className="">
        <div>
          <label htmlFor="studentid">ID*</label>
          <input type="text" id="studentid" name="studentid" />
        </div>
        <div>
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="city">City*</label>
          <input type="text" id="city" name="city" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" />
        </div>
      </form>
    </section>
  );
};

export default CreateStudent;
