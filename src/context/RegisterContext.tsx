import { createContext, useState } from "react";

interface RegisterContextProviderProps {
  children: React.ReactNode;
}

type RegisterContextData = {
  person: any[];
  registerPerson: (person: PersonPF | PersonPJ) => void;
};
export const RegisterContext = createContext({} as RegisterContextData);

type PersonPF = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  rg: string;
  genre: string;
  endereco: string;
  number: string;
};

type PersonPJ = {
  socialRa: string;
  cnpj: string;
  nameFantasy: string;
  email: string;
  legalRepresent: string;
};

export default function RegisterContextProvider({
  children,
}: RegisterContextProviderProps) {
  const [person, setPerson] = useState<any[]>([]);

  function registerPerson(person: PersonPF | PersonPJ) {
    setPerson((prev) => [...prev, person]);
  }

  return (
    <RegisterContext.Provider value={{ person, registerPerson }}>
      {children}
    </RegisterContext.Provider>
  );
}
