import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Component/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md Somad Portfolio",
  description:
    "I am a self taught programmer. Currently a App Developer And Web Developer And as a career path.I've app development experience of over 2+ Years.And programming experience of 3 years, Address Website Designers in Dhantola near me in Islampur And Panjipara And Kishanganj And Siliguri, State West Bengal Name Md Somad And Amir Hamja",
  keywords:
    "Md Somad, Amir Hamja, Portfolio, Skills, Dart, Flutter, JsvaScript, next.js, react.js, react native, HTML, CSS, Node.js, Express.js, nest.js, figma, MongoDB, App Developer, Web Developer, Backend Developer, Website Designers,App Developer,✓Mobile Application Developers, Address, ✓Website Development Services, in Dhantola, near me in Islampur, Panjipara, Kishanganj, Siliguri, West Bengal",
  author: "Md Somad Amir Hamja",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          <div className="div">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
