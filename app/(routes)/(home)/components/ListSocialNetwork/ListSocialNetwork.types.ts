import { Link } from "@prisma/client";

export type ListSocialNetworkProps = {
  links: Link[];
  onReload: React.Dispatch<React.SetStateAction<boolean>>;
};
