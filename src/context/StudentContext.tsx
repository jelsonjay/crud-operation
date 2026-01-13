import { createContext } from "react";

type StudentContextType = {
  student: string;
  setStudent: React.Dispatch<React.SetStateAction<string | number>>;
};

export const StudentContext = createContext<StudentContextType | null>(null);
