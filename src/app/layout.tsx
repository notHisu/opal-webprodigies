import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opal",
  description: "Share AI powered videos with your friends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className} bg-[#171717]`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
