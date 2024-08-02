"use client";
import { ModeToggle } from "@/components/modeToggle";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="w-screen z-1 whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white flex gap-2">
        <div className="flex-none w-1/2 text-center flex flex-col gap-3">
          <div className="flex align-center justify-center">
            <span className="font-bold text-6xl">Basic Dapp Template</span>
          </div>
          <span className="font-medium text-3xl">
            Foundry / NextJS / Express{" "}
          </span>
          <div className="flex justify-center mt-4">
            <ModeToggle />
          </div>
        </div>
        <div className="flex-none w-1/2 text-center">
          <div className="flex align-center justify-center">
            <span className="font-bold text-6xl">WAGMI</span>
          </div>
          <span className="font-medium text-3xl">Web3 / Ethers / Hardhat</span>
        </div>
      </div>
      <div className="flex justify-center mt-8"></div>
    </div>
  );
}
