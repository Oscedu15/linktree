import { ChevronLeft } from "lucide-react";
import { TabDeleteImageProps } from "./TabDeleteImage.types";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useUserInfo } from "@/hooks/useUser";

export function TabDeleteImage(props: TabDeleteImageProps) {
  const { setShowDialog, setShowTab } = props;

  const { reloadUser } = useUserInfo();

  const onRemoveImage = async () => {
    setShowDialog(false);

    await axios.patch("/api/update-user", {
      avatarUrl:
        "https://w7jnmo36iy.ufs.sh/f/FI9IIQaHJdItAfCNNsE0dvJNSyxUeZ4lKRjfiEzCm7TI6G1X",
    });
    setShowDialog(false);
    toast({
      title: "Profile Image Deleted",
    });

    reloadUser();
  };

  return (
    <div>
      <div
        className="flex gap-1 items-center cursor-pointer w-fit text-sm
      hover:bg-slate-100 p-1 rounded-lg"
        onClick={() => setShowTab(null)}
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <Button
          className="bg-violet-600 text-white rounded-full"
          onClick={onRemoveImage}
        >
          Yes, remove
        </Button>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => setShowTab(null)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
