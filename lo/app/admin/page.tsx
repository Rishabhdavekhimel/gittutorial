"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import the App component with SSR disabled
const App = dynamic(() => import("./app"), { ssr: false });

// Client Component for Admin Page
const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      // Call the server-side admin check through an API
      const response = await fetch("/api/admin-check");
      const isAdmin = await response.json();

      if (!isAdmin) {
        router.push("/"); // Redirect to home if not admin
      }
    };

    checkAdmin();
  }, [router]);

  return (
    <div>
      <App />
    </div>
  );
};

export default AdminPage;
