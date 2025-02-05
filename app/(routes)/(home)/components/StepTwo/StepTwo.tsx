import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import React from "react";
import { stepTwoData } from "./StepTwo.data";
import Image from "next/image";

export function StepTwo() {
  //Con useStepConfig traemos nuestro contexto de usuarios
  const { nextStep, infoUser, setInfoUser } = useStepConfig();
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Which platforms are you en?
      </h2>
      <p className="text-center">Pickup the ones you are on.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mt-4">
        {stepTwoData?.map((data, index) => (
          <div
            key={index}
            className={`flex flex-col gap-1 items-center rounded-lg
            py-3 hover:bg-violet-300 transition-all duration-300 cursor-pointer`}
          >
            <Image src={data.icon} alt="icon" width={40} height={40} />
            <p className="text-sm">{data.name}</p>
          </div>
        ))}
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
