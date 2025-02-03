'use client'
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function Home() {
  const { toast } = useToast()
  return (
    <div className="p-2 flex items-center justify-around">
      <Button>
        <Link href="/admin">Cacha</Link>
      </Button>
      <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
    </div>
  );
}
