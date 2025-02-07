import Image from "next/image";
import { dataStepFourImages } from "./StepFour.data";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function StepFour() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Add Profile Details
      </h2>
      <p className="text-center">Select your profile image or upload it...</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4 items-center">
        {dataStepFourImages?.map(({ src }) => (
          <div
            key={src}
            className={`flex flex-col items-center gap-2 p-1  text-white transition-all duration-300 cursor-pointer`}
          >
            <Image
              src={src}
              alt="profile"
              className="h-30 w-30 rounded-full"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h3 className="text-lg my-3 text-center">Add Your UserName</h3>
        <div className="grid gap-4">
          <Input
            placeholder="Name"
            className="w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="User Name"
            className="w-full"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mt-6 md:mt-16">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 cursor-pointer">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
