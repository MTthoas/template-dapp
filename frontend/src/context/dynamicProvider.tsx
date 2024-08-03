import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

export const dynamicId = process.env.NEXT_PUBLIC_DYNAMIC_PROJECT_ID as string;
if (!dynamicId) {
  throw new Error("NEXT_PUBLIC_DYNAMIC_PROJECT_ID is not set.");
}

export const DynamicContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <DynamicContextProvider
      theme="dark"
      settings={{
        initialAuthenticationMode: "connect-only",
        environmentId: "4bdc3e40-ba79-45c2-a93c-03c333a8e1f0",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
};
