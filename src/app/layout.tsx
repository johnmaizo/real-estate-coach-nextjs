import type {Metadata} from "next";
import {Geist} from "next/font/google";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import {AppProvider} from "@/providers/AppProvider";
import NavBar from "@/components/layouts/NavBar";
import {Box} from "@mui/system";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real EstateCoach",
  description:
    "Real EstateCoach is a coaching platform for real estate agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className={`${geistSans.variable}`}>
          <AppProvider>
            <NavBar />
            <Box component={"main"}>{children}</Box>
            <Footer />
          </AppProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
