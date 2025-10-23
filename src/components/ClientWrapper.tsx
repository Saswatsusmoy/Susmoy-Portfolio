"use client";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UbuntuStyledSidebar from "@/components/UbuntuStyledSidebar";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="relative">
        <UbuntuStyledSidebar />
        <Navbar />
        <div className="mx-auto w-full max-w-screen-lg px-3 sm:px-4 md:px-6 lg:px-8">
          <main className="py-4 sm:py-6 md:py-8">{children}</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
