import { useUserInfo } from "@/hooks/useUser";
import { ProfileImage } from "./ProfileImage";
import { ProfileInfoProps } from "./ProfileInfo.types";

export function ProfileInfo(props: ProfileInfoProps) {
  const {onReload} = props;

  const {user} = useUserInfo()
  return (
    <div className="mt-10 max-w-2xl mx-auto">
      <div className="flex flex-row pb- space-x-sm items-center justify-between">
        <ProfileImage/>
        <p>{user?.username}</p>
      </div>
    </div>
  );
}
