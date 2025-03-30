import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "PLAI",
  description: "PLAI WEB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts 링크 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`bg-[#0D1116] flex flex-col  justify-start items-center min-h-screen font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
