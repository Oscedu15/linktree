import React, { ReactNode } from "react";
//Documento donde declaramos el tipado de nuestro contexto
export type StepConfigUserContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  infoUser: InfoUserType;
  setInfoUser: React.Dispatch<React.SetStateAction<InfoUserType>>;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
};

//Utilizaremos este tipado en el formulario a la hora de enviar la informacion a la base de datos
type InfoUserType = {
  typeUser: string;
  name: string;
  platforms: {
    icon: string;
    link: string;
    name: string;
  }[];
  avatarUrl: string;
  username: string;
};

export type StepConfigUserProviderProps = {
  children: ReactNode;
};
