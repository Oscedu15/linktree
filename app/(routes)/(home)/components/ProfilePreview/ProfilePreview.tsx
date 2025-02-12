import { Lock } from "lucide-react";
import { ButtonsHeader } from "./ButtonsHeader";
import { ButtonCopyProfile } from "./ButtonCopy";
import { PhonePreview } from "./PhonePreview";

export function ProfilePreview() {
  return (
    <div className="border-l-[#e0e2d9] border-[1px] border-transparent px-2">
      <ButtonsHeader />
      <ButtonCopyProfile />
      <PhonePreview />
      <div className="flex items-center justify-center mt-20">
        <p className="flex gap-1 items-center font-semibold">Hi Oscedu15 </p>
        <Lock className="w-4 h-4" />
      </div>
    </div>
  );
}
