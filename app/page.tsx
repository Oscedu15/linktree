import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2">
      <Button>
        <Link href="/admin">Cacha</Link>
      </Button>
    </div>
  );
}
