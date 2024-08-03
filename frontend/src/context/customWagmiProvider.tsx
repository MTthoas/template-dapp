"use client";
import { WagmiConfig } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { State, WagmiProvider } from "wagmi";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
if (!projectId) {
  throw new Error("NEXT_PUBLIC_PROJECT_ID is not set.");
}

const queryClient = new QueryClient();

export default function CustomWagmiProvider({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={WagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
