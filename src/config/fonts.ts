import { IBM_Plex_Sans_Thai } from "next/font/google";

export const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  display: "swap",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
});
