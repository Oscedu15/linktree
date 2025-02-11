"use client";
import { useState } from "react";
import { SelectorProfileImageProps } from "./SelectorProfileImage.types";
import { TabSelector } from "./TabSelector";
import { TabUploadImage } from "./TabUploadImage";

export function SelectorProfileImage(props: SelectorProfileImageProps) {
  const { setShowDialog } = props;
  const [showTab, setShowTab] = useState<"upload" | "delete" | null>(null);
  return (
    <div className="pt-6">
      {!showTab && <TabSelector setShowTab={setShowTab} />}
      {showTab === "upload" && (
        <TabUploadImage setShowDialog={setShowDialog} setShowTab={setShowTab} />
      )}
      {showTab === "delete" && <p>Tab delete image</p>}
    </div>
  );
}
