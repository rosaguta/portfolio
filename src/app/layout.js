import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RoseOs",
  description: ""
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="preload" as="image" href="Rosey-stars.png" />
      <link rel="preload" as="image" href="blahaj.png" />
      <link rel="preload" as="image" href="discord.png" />
      <link rel="preload" as="image" href="github_edit.png" />
      <link rel="preload" as="image" href="twitteer.png" />
      <link rel="preload" as="image" href="Rose.png" />
      <link rel="preload" as="image" href="Roseicon.png" />
      <link rel="preload" as="image" href="twitteer.png" />
      <link rel="preload" as="image" href="etherneticon_edit.png" />
      <link rel="preload" as="image" href="firefox.png" />
      <link rel="preload" as="image" href="Steam_icon_logo.svg.png" />
      <link rel="preload" as="image" href="speakericon.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
