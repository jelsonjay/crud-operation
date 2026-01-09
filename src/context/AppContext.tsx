import { ReactNode, useState } from "react";
import { StudentContext } from "./StudentContext";

type StudentProviderProps = {
  children: ReactNode;
};

const StudentProvider = ({ children }: StudentProviderProps) => {
  const [student, setStudent] = useState();

  const contextValue = {
    student,
    setStudent,
  };
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
