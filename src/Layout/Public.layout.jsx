import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};
