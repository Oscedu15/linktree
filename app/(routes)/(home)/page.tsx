"use client";
import { TreePalm } from "lucide-react";
import { LinkProfile, ProfilePreview } from "./components";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Link, User } from "@prisma/client";
import { LoaderProfile } from "@/components/Shared";
import { StepConfigUserProvider, UserProvider } from "@/contexts";
import HandlerSteps from "./components/HandlerSteps/HandlerSteps";
import { ProfileInfo } from "./components/ProfileInfo";

export default function HomePage() {
  const { user } = useUser();
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [reload, setReload] = useState(false);
  const [infoUser, setInfoUser] = useState<(User & { links: Link[] }) | null>(
    null
  );

  useEffect(() => {
    //Funcion para chequear los datosd del usuario si esta registrado
    const chekFirstLogin = async () => {
      //Hacemos el llamado a nuestra api
      const response = await fetch("/api/info-user");
      //si la respuesta es correcta, guardamos los datos en la constante data
      const data = await response.json();
      //Lo guardamos en el estado de la informacion del usuario
      setInfoUser(data);
      //Guardamos en nuestro estado si es o no es la primera vez que el usuario se conecta a nuestra aplicacion
      setIsFirstVisit(data.firstLogin);
      console.log({ data });
    };

    //Si esta cargando, volvemos a invocar la funcion de pedir los datos del usuario a nuestro backends
    if (reload) {
      chekFirstLogin();
      setReload(false);
    }

    chekFirstLogin();
  }, [user?.id, reload, user]);
  //Se va amontar el useeffect cada vez que cambie el usuario, este carganfo o exista un usuario

  //Si aun no carga el usuario o su informacion, muestra un loading
  if (!user || !infoUser) {
    return <LoaderProfile />;
  }

  if (isFirstVisit) {
    return (
      // Nuestro contexto para acceder, modificar y enviar datos de los usuarios cuando se conectan por primera vez
      <StepConfigUserProvider>
        <HandlerSteps onReload={setReload} />
      </StepConfigUserProvider>
    );
  }

  //Esto solo lo mostrara cuando ya sea la segunda vez o mas que visite la aplicacion
  return (
    <UserProvider>
      <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4">
        <div>
          <LinkProfile />
          {/* Profile Info */}
          <div>
            <ProfileInfo onReload={setReload} />
          </div>
          <div className="mt-20 flex flex-col items-center">
            <div className="py-10 font-semibold text-center justify-center flex flex-col items-center text-gray-400">
              <TreePalm className="h-20 w-20" strokeWidth={1} />
              <p>Show the world whe you are.</p>
              <p>Add a link to get started</p>
            </div>
          </div>
        </div>
        {/* Profile Preview */}
        <div>
          <ProfilePreview/>
        </div>
      </div>
    </UserProvider>
  );
}
