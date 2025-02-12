import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUserInfo } from "@/hooks/useUser";
import { useState } from "react";
import { FormNameAndUserName } from "./FormNameAndUserName";

export function BlockInfo() {
  const { user } = useUserInfo();

  const [openDialog, setOpenDialog] = useState(false);

  if (!user) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-1 px-2">
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger>
            <span className="hover:underline cursor-pointer">
                @{user.username}
            </span>
            <span className="block text-sm text-gray-400 hover:underline">
                {user?.bio ? "Edit Bio" : "Add Bio"}
            </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Display name, username and bio</DialogTitle>
            <DialogDescription asChild>
            <FormNameAndUserName setOpenDialog={setOpenDialog} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
