import type {Metadata} from "next";
import {AppProvider} from "@/providers/AppProvider";
import {Box} from "@mui/system";

export const metadata: Metadata = {
  title: "Real EstateCoach",
  description:
    "Real EstateCoach is a coaching platform for real estate agents.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <Box component={"main"}>{children}</Box>
    </AppProvider>
  );
}
