import { TreePalm } from "lucide-react";
import Link from "next/link";

export function NotFoundUser() {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="mt-4 text-center items-center flex flex-col gap-5">
        <TreePalm className="w-20 h-20 text-green-400" />
        <p className="text-2xl">The Page Youre Looking for doesnt exist.</p>
        <p>
          Want this to be your username?{""}
          <Link className="underline" href="/">
             Create your Profile Now
          </Link>
        </p>
      </div>
      <div
        className="font-semibold pb-5 flex gap-2 items-center 
      justify-center"
      >
        TarreTreeClone <TreePalm className="h-5 w-5" />
      </div>
    </div>
  );
}
