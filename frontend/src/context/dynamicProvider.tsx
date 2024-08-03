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
        environmentId: dynamicId,
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
};
