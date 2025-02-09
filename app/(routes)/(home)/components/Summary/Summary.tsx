import { useStepConfig } from "@/hooks/useStepConfig";
import { SummaryProps } from "./Summary.types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Confetis from "@/components/Shared/Confetis/Confetis";

export function Summary(props: SummaryProps) {
  const { onReload } = props;
  const { infoUser } = useStepConfig();
  const { avatarUrl, name, typeUser, platforms, username } = infoUser;
  console.log(username);

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Yoyr TarreTree is ready
      </h2>
      <p className="text-center">Its time to share to the world</p>
      <div className="relative">
        <div className="flex justify-center mt-4">
          <Image
            src={avatarUrl}
            alt={name}
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-xl aspect-square
            object-cover"
          />
        </div>
        <div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">@{username}</p>
            <div className="text-sm text-gray-400">Type: {typeUser}</div>
          </div>
          <div className="space-y-3 mt-4">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex items-center gap-2">
                <Image src={platform.icon} alt="icon" width={45} height={45} />
                <p className="text-sm font-medium text-gray-700">
                  {platform.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Confetis />
        <div>
          <Button
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 cursor-pointer"
            onClick={onReload}
          >
            Continue to the profile
          </Button>
        </div>
      </div>
    </div>
  );
}
