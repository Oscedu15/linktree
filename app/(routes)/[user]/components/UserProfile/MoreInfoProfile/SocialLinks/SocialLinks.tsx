import Image from "next/image";
import { SocialLinksProps } from "./SocialLinks.types";
import { dataLinks } from "./SocialLinks.data";

export function SocialLinks(props: SocialLinksProps) {
  const { username } = props;
  console.log(username);
  const copyToClipboard = () => {
    const url = `${window.location.origin}/${username}`;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy URL:", error);
      });
  };

  return (
    <div className="overflow-auto">
      <div className="flex gap-4 py-4">
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={copyToClipboard}
        >
          <Image
            src="/social-networks/x.avif"
            alt="icon"
            width={40}
            height={40}
            className="hover:scale-110 transition-all duration-200"
          />
          <span className="text-xs font-semibold">Copy</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          {dataLinks?.map((link) => (
            <a
              key={link.id}
              href={`${link.link}/${username}`}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <Image
                src={link.icon}
                alt="Icon"
                width={40}
                height={40}
                className="hover:scale-110 transition-all duration-200"
              />
              <span className="text-xs font-semibold">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
