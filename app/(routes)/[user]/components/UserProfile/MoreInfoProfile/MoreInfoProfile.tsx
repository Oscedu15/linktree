import { Ellipsis, TreePalm } from "lucide-react";
import { MoreInfoProfileProps } from "./MoreInfoProfile.types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function MoreInfoProfile(props: MoreInfoProfileProps) {
  const { user } = props;
  return (
    <div className="max-w-lg w-full mx-auto flex items-end justify-end">
      <Dialog>
        <DialogTrigger asChild>
          <div
            className=" bg-slate-400 p-2 rounded-full opacity-90
            hover:opacity-70 cursor-pointer transition-all duration-300"
          >
            <Ellipsis
              strokeWidth={1}
              className="text-white hover:text-red-600"
            />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              Share TarreTree Clone
            </DialogTitle>
            <DialogDescription>
              <div className="gap-4 py-4">
                <div className="p-4 rounded-lg bg-teal-800 text-white flex flex-col items-center justify-center">
                  <Image
                    src={user.avatarUrl || "/avatar-default.png"}
                    alt="Avatar"
                    width={96}
                    height={96}
                    className="rounded-full aspect-square object-cover"
                  />
                  <p className="font-semibold text-2xl">@{user.username}</p>
                  <div className="flex gap-1 font-semibold">
                    <TreePalm className="w-5 h-5" />
                    {user.username}
                  </div>
                </div>
                <SocialLinks userName={user.username} />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
