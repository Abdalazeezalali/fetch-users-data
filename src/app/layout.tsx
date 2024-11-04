import "./globals.css";
import { ThemeProvider } from "@/components-shadcn/theme-provider"
import Navbar from "@/components/Navbar";
import { geistMono, geistSans } from "@/constants/fonts-import";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Title",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
