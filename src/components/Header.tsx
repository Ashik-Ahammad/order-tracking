import { ArrowLeft, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b">
      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <h1 className="text-lg font-semibold tracking-tight">Track Order</h1>
      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
        <MoreVertical className="h-5 w-5" />
      </Button>
    </header>
  );
}
