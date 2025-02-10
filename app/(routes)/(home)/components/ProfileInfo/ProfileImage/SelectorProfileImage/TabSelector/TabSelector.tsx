import { ChevronRight, ImageUp, Trash2 } from "lucide-react";
import { TableSelectorProps } from "./TableSelector.types";

export function TabSelector(props: TableSelectorProps) {
  const { setShowTab } = props;
  return (
    <>
      <div
        className="flex gap-2 justify-between items-center hover:bg-slate-100 p-2 rounded-lg cursor-pointer"
        onClick={() => setShowTab("upload")}
      >
        <div className="flex gap-2">
          <div className="bg-purple-100 hover:bg-purple-300 transition-all duration-300 rounded-lg p-2 h-fit">
            <ImageUp
              className="text-purple-800 hover:text-purple-950 transition-all duration-300 "
              strokeWidth={1}
            />
          </div>
          <div>
            <span className="block font-semibold">Upload your own</span>
            <span className="text-sm text-gray-600">
              Cheese an Image from your devide
            </span>
          </div>
        </div>
        <ChevronRight className="h-4 w-4" />
      </div>
      <div
        className="flex gap-2 justify-between items-center hover:bg-slate-100 p-2 rounded-lg cursor-pointer"
        onClick={() => setShowTab("delete")}
      >
        <div className="flex gap-2">
          <div className="bg-red-100 hover:bg-red-300 transition-all duration-300 rounded-lg p-2 h-fit">
            <Trash2
              className="text-red-800 hover:text-red-950 transition-all duration-300 "
              strokeWidth={1}
            />
          </div>
          <div>
            <span className="block font-semibold">Delete</span>
            <span className="text-sm text-gray-600">Delete current image</span>
          </div>
        </div>
        <ChevronRight className="h-4 w-4" />
      </div>
    </>
  );
}
