"use client";
import { config, privyConfig } from "@/config";
import { PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider } from "@privy-io/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
if (!projectId) {
  throw new Error("NEXT_PUBLIC_PROJECT_ID is not set.");
} else {
  console.log("Project ID: ", projectId);
}

const queryClient = new QueryClient();

export default function CustomWagmiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider appId={projectId} config={privyConfig}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
