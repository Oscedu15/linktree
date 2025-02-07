import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { HandlerStepsProps } from "./HandlerSteps.types";
import { useState } from "react";
import { useStepConfig } from "@/hooks/useStepConfig";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import StepOne from "../StepOne/StepOne";
import { StepTwo } from "../StepTwo";
import { StepThree } from "../StepThree";


export default function HandlerSteps(props: HandlerStepsProps) {
  const { onReload } = props;
  const [openDialog, setOpenDialog] = useState(true);
  //Llamamos a la configuracion de nuestro contexto, para acceder a los datos alli establecidos
  const { totalSteps, step, prevStep, infoUser } = useStepConfig();

  //Nuestra barra de progreso
  const progressValue = (step / totalSteps) * 100;

  //Funcion que usaremos para enviar los datos y mientras cargan cerrar la opcion de dialog
  const onClosDialog = () => {
    onReload(true);
    setOpenDialog(false);
  };

  console.log({infoUser})

  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-3">
            {step > 1 && step < 5 && (
              <Button variant="outline" className="mr-2" onClick={prevStep}>
                Back <ArrowLeft />
              </Button>
            )}
            <div className="mb-2 text-center">
              Step {step} of {totalSteps}
            </div>
            <Progress value={progressValue} />
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="">
              {step === 1 && <StepOne/>}
              {step === 2 && <StepTwo/>}
              {step === 3 && <StepThree/>}
              {step === 4 && <p>Step Four</p>}
              {step === 5 && <p>Step Five</p>}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
