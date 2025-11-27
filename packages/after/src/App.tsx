import React from "react";
import { ManagementPage } from "./pages/ManagementPage";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ManagementPage />
      </main>
    </div>
  );
};
