"use client";
import { PrivyClientConfig } from "@privy-io/react-auth";
import { createConfig } from "@privy-io/wagmi";
import { http } from "viem";
import { mainnet, polygon, polygonAmoy, sepolia } from "viem/chains";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
if (!projectId) {
  throw new Error("NEXT_PUBLIC_PROJECT_ID is not set.");
}

export const config = createConfig({
  chains: [mainnet, sepolia, polygon, polygonAmoy],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [polygonAmoy.id]: http(),
  },
});

export const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
  },
  // loginMethods: ["wallet", "email", "sms"],
  appearance: {
    theme: "light",
    accentColor: "#676FFF",
  },
};
