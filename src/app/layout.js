import "./globals.css";
import { Inter, Luckiest_Guy, Koulen } from "next/font/google";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-luckiest",
});

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-koulen",
});

export const metadata = {
  title: "Filmskolen Blank",
  icons: {
    icon: "logo/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${inter.className} ${luckiestGuy.variable} ${koulen.variable}`}>
      <body>
        <header>
        <Header/>
        </header>
        {children}
          <footer>
          <Footer/>
        </footer>
        </body>
    </html>
  );
}
