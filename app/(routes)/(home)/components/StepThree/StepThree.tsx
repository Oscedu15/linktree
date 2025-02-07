import { Button } from "@/components/ui/button";
import { useStepConfig } from "@/hooks/useStepConfig";
import Image from "next/image";

export function StepThree() {
  const { infoUser, nextStep, setInfoUser } = useStepConfig();

  //Funcion para obtener los valores cargados en los inputs y guardarlos
  //en nuestro contexto
  const handleContinue = () => {
    const updatedPlatforms = infoUser.platforms?.map(({ icon, name }) => {
      const input = document.getElementById(
        `${name}-input`
      ) as HTMLInputElement;

      return { name, icon, link: input?.value || "" };
    });

    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      platforms: updatedPlatforms,
    }));

    nextStep();
    //updatedPlatforms es la informacion ya actualizada
    console.log(updatedPlatforms)
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">Add Yours Links</h2>
      <p className="text-center">Complete the fields to add your links</p>
      {infoUser?.platforms?.map(({ icon, link, name }) => (
        <div key={name} className="flex items-center gap-2 mt-4">
          <div className="flex flex-col gap-2 items-center">
            <Image src={icon} width={40} height={40} alt="icon" />
          </div>
          <input
            type="text"
            id={`${name}-input`}
            placeholder={`${name} Username`}
            className="w-full rounded-lg border p-2 text-sm"
            defaultValue={link}
          />
        </div>
      ))}
      <div className="mt-6">
        <Button
          onClick={handleContinue}
          className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 cursor-pointer"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
