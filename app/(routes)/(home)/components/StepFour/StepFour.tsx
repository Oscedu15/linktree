import Image from "next/image";
import { dataStepFourImages } from "./StepFour.data";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { Plus } from "lucide-react";
import { useStepConfig } from "@/hooks/useStepConfig";

export function StepFour() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [showUpLoadPhoto, setShowUpLoadPhoto] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState("");

  const { setInfoUser } = useStepConfig();

  const handleImageSelect = (src: string) => {
    setSelectedPhoto(src);
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      avatarUrl: src,
    }));
  };

  console.log(photoUrl);
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Add Profile Details
      </h2>
      <p className="text-center">Select your profile image or upload it...</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-4 items-center">
        {dataStepFourImages?.map(({ src }) => (
          <div
            key={src}
            className={`flex flex-col items-center gap-2 p-1 rounded-full text-white transition-all duration-300 cursor-pointer ${
              selectedPhoto === src ? "bg-violet-500" : "hover:bg-violet-300"
            }`}
            onClick={() => handleImageSelect(src)}
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
        {photoUrl && (
          <div
            className={`flex flex-col items-center gap-2 p-1 rounded-full text-white
                transition-all duration-300 cursor-pointer ${
                  selectedPhoto === photoUrl
                    ? "bg-violet-500"
                    : "hover:bg-violet-300"
                }`}
            onClick={() => handleImageSelect(photoUrl)}
          >
            <Image
              src={photoUrl}
              alt="profile"
              className="w-30 h-30 rounded-full object-cover aspect-square"
              width={300}
              height={300}
            />
          </div>
        )}
        {showUpLoadPhoto ? (
          <UploadButton
            className="rounded-md text-slate-800 bg-slate-200 h-full"
            endpoint="profileImage"
            onClientUploadComplete={(res) => {
              setPhotoUrl(res?.[0].url);
              setShowUpLoadPhoto(false);
            }}
            onUploadError={(error: Error) => {
              console.error(error);
            }}
          />
        ) : (
          <div
            className="flex flex-col items-center justify-center hover:bg-slate-100
            h-full rounded-full cursor-pointer border"
            onClick={() => setShowUpLoadPhoto(!showUpLoadPhoto)}
          >
            <Plus className="w-7 h-7" />
          </div>
        )}
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
