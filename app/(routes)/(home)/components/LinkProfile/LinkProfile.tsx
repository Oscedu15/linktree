"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useUserInfo } from "@/hooks/useUser";

export function LinkProfile() {
  const [isCopiedLink, setIsCopiedLink] = useState(false);

  const { user } = useUserInfo();

  const copyClick = () => {
    const url = `${window.location.origin}/${user?.username}`;

    //Para copiar nuestra nueva url
    navigator.clipboard.writeText(url);

    setIsCopiedLink(true);
  };

  return (
    <div className="bg-indigo-100 rounded-3xl">
      <div className="flex flex-col justify-center text-center py-4 px-4 items-center gap-2 md:flex-row md:justify-between md:text-left">
        <span className="text-sm">
          <span> Your TarreTreeClone is live:  </span>
          {window.location.origin}/{user?.username}
        </span>
        <Button
          onClick={copyClick}
          variant="outline"
          className="rounded-full px-4 bg-white font-semibold text-xs md:text-[16px]"
        >
          {isCopiedLink ? "Copied" : "Copy Your TarreTree URL"}
        </Button>
      </div>
    </div>
  );
}
