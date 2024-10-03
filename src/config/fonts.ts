import { Noto_Sans_Thai, Roboto } from "next/font/google";

export const notoSansThai = Noto_Sans_Thai({
  display: "swap",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-thai",
});

export const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});
