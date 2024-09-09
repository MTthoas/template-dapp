"use client";
import SendCard from "@/components/cards/send";
import { ModeToggle } from "@/components/modeToggle";
import { usePrivy } from "@privy-io/react-auth";
import { useAccount } from "wagmi";

export default function HomePage() {
  const { address } = useAccount();
  const { ready, authenticated, connectWallet, login } = usePrivy();

  return (
    <div className="h-screen">
      <div className="h-1/6"></div>
      <div className="h-full z-1 whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white flex flex-col lg:flex-row gap-2">
        {/* Première colonne */}
        <div className="h-full lg:w-1/2 w-full text-center flex flex-col gap-3">
          <div className="flex align-center justify-center">
            <span className="font-bold text-6xl">Basic Dapp Template</span>
          </div>
          <span className="font-medium text-3xl">
            Foundry / Next.JS / Express / Lens SDK / Privy
          </span>
          <div className="flex mt-4 gap-3 align-center justify-center">
            <ModeToggle />
            <button
              className="w-24 h-24 border-2 border-white"
              onClick={(event) => {
                console.log("Connect wallet");
                login();
              }}
            >
              Log in
            </button>
          </div>
        </div>

        {/* Deuxième colonne */}
        <div className="h-full lg:w-1/2 w-full text-center flex flex-col gap-3">
          <div className="flex align-center justify-center">
            <span className="font-bold text-6xl">WAGMI</span>
          </div>
          <span className="font-medium text-3xl">
            Web3 Interaction on Ethereum
          </span>
          <div className="mx-12 my-8">
            <SendCard addressSource={address} />
          </div>
        </div>
      </div>
    </div>
  );
}
