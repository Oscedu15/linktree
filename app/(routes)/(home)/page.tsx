import { TreePalm } from "lucide-react";
import { LinkProfile } from "./components";

export default function HomePage() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4">
        <div>
          <LinkProfile />
          {/* Profile Info */}
          <div>
            <p>Profile Info</p>
          </div>
          <div className="mt-20 flex flex-col items-center">
            <div className="py-10 font-semibold text-center justify-center flex flex-col items-center text-gray-400">
              <TreePalm className="h-20 w-20" strokeWidth={1} />
              <p>Show the world whe you are.</p>
              <p>Add a link to get started</p>
            </div>
          </div>
        </div>
        {/* Profile Preview */}
        <div>
          <p>Profile Preview</p>
        </div>
      </div>
    </div>
  );
}
