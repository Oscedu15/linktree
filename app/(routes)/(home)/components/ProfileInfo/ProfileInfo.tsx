import { ProfileImage } from "./ProfileImage";
import { ProfileInfoProps } from "./ProfileInfo.types";
import { BlockInfo } from "./BlockInfo/BlockInfo";
import { EditBackground } from "./EditBackground";
import { AddLinkForm } from "./AddLinkForm";

export function ProfileInfo(props: ProfileInfoProps) {
  const { onReload } = props;

  return (
    <div className="mt-10 max-w-2xl mx-auto">
      <div className="flex flex-row pb-lg space-x-sm items-center justify-between">
        <div className="flex">
          <ProfileImage />
          <BlockInfo />
        </div>
        <EditBackground onReload={onReload} />
      </div>
      <AddLinkForm onReload={onReload} />
    </div>
  );
}
