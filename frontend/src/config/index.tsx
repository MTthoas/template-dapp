import { Inter } from "next/font/google";
import { mainnet, polygon, polygonAmoy, sepolia } from "viem/chains";
import { createConfig, http } from "wagmi";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
if (!projectId) {
  throw new Error("NEXT_PUBLIC_PROJECT_ID is not set.");
}

export const WagmiConfig = createConfig({
  chains: [mainnet, sepolia, polygon, polygonAmoy],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [polygonAmoy.id]: http(),
  },
});
