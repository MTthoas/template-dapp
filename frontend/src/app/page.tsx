import { GridPattern } from "@/components/ui/grid-pattern";
import HomePage from "@/containers/home-page";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="h-screen bg-background relative flex size-full items-center justify-center overflow-hidden p-20 md:shadow-xl">
      <HomePage />
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </main>
  );
}
