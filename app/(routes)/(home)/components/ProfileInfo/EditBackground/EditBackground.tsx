"use client";
import { useState } from "react";
import { EditBackgroundProps } from "./EditBackground.types";
import { useUserInfo } from "@/hooks/useUser";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ellipsis, ImagePlus } from "lucide-react";
import Image from "next/image";
import { UploadButton } from "@/lib/uploadthing";
import { Button } from "@/components/ui/button";
import axios from "axios";

export function EditBackground(props: EditBackgroundProps) {
  const { onReload } = props;

  const [showDialog, setShowDialog] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const { reloadUser } = useUserInfo();

  const onChangeBackground = async () => {
    console.log("On CHange Background");
    await axios.patch("/api/update-user", {
      backgroundImage: photoUrl,
    });
    reloadUser();
    setShowDialog(false);
    onReload(true);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="p-2 bg-[#e0e2d9] rounded-full cursor-pointer">
            <Ellipsis fill="black" strokeWidth={1} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <DialogTrigger>
              <div className="flex gap-1 items-center">
                <ImagePlus className="w-4 h-4" />
                Edit or add background
              </div>
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center font-semibold">
            Change background
          </DialogTitle>
          <div className="my-4">
            {photoUrl ? (
              <div className="flex justify-center items-center">
                <Image src={photoUrl} alt="Profile" width={300} height={300} />
              </div>
            ) : (
              <UploadButton
                className="rounded-md text-slate-800
                 bg-slate-200 h-full py-10"
                endpoint="profileImage"
                onClientUploadComplete={(res) => {
                  setPhotoUrl(res?.[0].url);
                }}
                onUploadError={(error: Error) => {
                  console.log(error);
                }}
              />
            )}
          </div>
          <Button
            disabled={!photoUrl}
            onClick={onChangeBackground}
            className="w-full rounded-full bg-violet-500"
          >
            Change
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
