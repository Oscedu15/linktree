import { useUserInfo } from "@/hooks/useUser";
import { RemoveSocialNetworkProps } from "./RemoveSocialNetwork.types";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";

export function RemoveSocialNetwork(props: RemoveSocialNetworkProps) {
  const { linkId, onReload } = props;
  const [showDialog, setShowDialog] = useState(false);

  const { reloadUser } = useUserInfo();

  const onDelete = async () => {
    await axios.delete(`/api/social-networks/${linkId}`);
    onReload(true);
    setShowDialog(false);
    reloadUser();
  };
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete social network</DialogTitle>
          <div className="flex flex-col gap-4 mt-4">
            <Button
              onClick={onDelete}
              className="w-full bg-violet-500 text-white rounded-full"
            >
              Delete
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
