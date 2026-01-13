import "./StudentModal.css";
import { Link } from "react-router-dom";

type Props = {
  onCloseBtn: () => void;
};

const StudentModal = ({ onCloseBtn }: Props) => {
  //   const { id } = useParams();
  //   const [student, setStudent] = useState([]);

  //   useEffect(() => {
  //     fetch(FetchData.students.url + id)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setStudent(data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }, []);

  return (
    <section className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onCloseBtn}>
          &times;
        </span>
        <div>
          <h2>Are you sure you want to delete?</h2>
        </div>
        <Link to="/" className="btn btn-back">
          Back
        </Link>
      </div>
    </section>
  );
};

export default StudentModal;
