import { ReactNode, useState, createContext, type ReactElement } from "react";

export type StudentType = {
  id: string;
  city: string;
  name: string;
  phone: number;
};

const initState: StudentType[] = [];

type StudentProviderProps = {
  children: ReactNode | ReactElement | ReactElement[];
};

export type StudentContextType = {
  student: string;
  setStudent: React.Dispatch<React.SetStateAction<string | number>>;
};

const initContextState: StudentContextType = { students: [] };

export const StudentContext = createContext<StudentContextType | null>(
  initContextState
);

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
