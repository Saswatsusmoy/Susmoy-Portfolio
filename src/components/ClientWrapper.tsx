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
        <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <main className="py-6 sm:py-8 min-h-[calc(100dvh-64px-56px)]">{children}</main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
