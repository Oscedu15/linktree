import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import React from "react";

export function StepTwo() {
  //Con useStepConfig traemos nuestro contexto de usuarios
  const { nextStep, infoUser, setInfoUser } = useStepConfig();
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Which platforms are you en?
      </h2>
      <p className="text-center">Pickup the ones you are on.</p>
      <div>
        <p>Van los iconos</p>
      </div>
      <div className="mt-6">
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 cursor-pointer"
          onClick={nextStep}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
