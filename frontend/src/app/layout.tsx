import { GridPattern } from "@/components/ui/grid-pattern";
import { inter, WagmiConfig } from "@/config";
import CustomWagmiProvider from "@/context/customWagmiProvider";
import { DynamicContext } from "@/context/dynamicProvider";
import { ThemeProvider } from "@/context/themeProvider";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import "./globals.css";

export const metadata: Metadata = {
  title: "Template Dapp",
  description: "A template for building decentralized applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(
    WagmiConfig,
    headers().get("cookie")
  );
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <DynamicContext>
          <CustomWagmiProvider initialState={initialState}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main className="h-screen bg-background relative flex size-full items-center justify-center overflow-hidden p-20 md:shadow-xl">
                <div className="relative z-10">{children}</div>
                <GridPattern
                  width={60}
                  height={60}
                  x={-1}
                  y={-1}
                  strokeDasharray="60 2"
                  className={cn(
                    "[mask-image:radial-gradient(1000px_circle_at_right,white,transparent)]",
                    "absolute z-0"
                  )}
                />
              </main>
            </ThemeProvider>
          </CustomWagmiProvider>
        </DynamicContext>
      </body>
    </html>
  );
}
