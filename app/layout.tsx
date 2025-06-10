import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { NavigationWrapper } from "@/components/layout/navigation-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NomNom - The Most Reliable Restaurant POS System",
  description: "An end-to-end, web-based POS that has everything you need to manage your restaurant— online & in-store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
