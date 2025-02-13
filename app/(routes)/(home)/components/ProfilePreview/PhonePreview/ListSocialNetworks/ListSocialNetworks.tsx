import { useUserInfo } from "@/hooks/useUser";
import Image from "next/image";

export function ListSocialNetworks() {
  const { links } = useUserInfo();

  if (!links) return null;
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
      {links?.map((link, index) => (
        <li key={index}>
          <a href={link.link || null} target="_blank" rel="noopener">
            <Image src={link.icon || ""} alt="Icon" width={40} height={40} />
          </a>
        </li>
      ))}
    </ul>
  );
}
