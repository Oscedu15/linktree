import { Button } from "@/components/ui/button";
import { dataCreator } from "./StepOne.data";
import { useStepConfig } from "@/hooks/useStepConfig";

export default function StepOne() {
  const { setInfoUser, nextStep, infoUser } = useStepConfig();

  //Funcion para pasar la informacion ingresada por el usuario
  const handleClick = (value: string) => {
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      typeUser: value,
    }));
  };

  console.log(infoUser);

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Tell Us About YourSelf
      </h2>
      <p className="text-center">This help us personalize your experience</p>
      <div className="grid grid-cols-1 gap-2 mt-4">
        {dataCreator?.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-full border py-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
            onClick={() => handleClick(data.value)}
          >
            {data.title}
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
