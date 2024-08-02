import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { Inter } from "next/font/google";
import { mainnet, polygon, polygonAmoy, sepolia } from "viem/chains";
import { cookieStorage, createStorage } from "wagmi";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
if (!projectId) {
  throw new Error("NEXT_PUBLIC_PROJECT_ID is not set.");
}

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  name: "template-dapp",
  description: "A template for building decentralized applications.",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia, polygon, polygonAmoy],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
