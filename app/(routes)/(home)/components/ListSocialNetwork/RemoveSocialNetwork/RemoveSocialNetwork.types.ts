import { Link } from "@prisma/client";

export type RemoveSocialNetworkProps = {
      linkId: Link;
      onReload: React.Dispatch<React.SetStateAction<boolean>>;
}