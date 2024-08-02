"use client";
import { config, metadata, projectId } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";
import { State, WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

createWeb3Modal({
  metadata: metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});

export default function CustomWagmiProvider({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
