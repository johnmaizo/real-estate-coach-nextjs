import type {Metadata} from "next";
import {Geist} from "next/font/google";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import {AppProvider} from "@/providers/AppProvider";
import LayoutContent from "@/components/utils/content/LayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real EstateCoach",
  description:
    "Get access to top-notch coaching, training, and resources to grow your real estate business. Expert coaches provide personalized guidance, support, and accountability to help you reach your goals.",
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
            <LayoutContent>{children}</LayoutContent>
          </AppProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
