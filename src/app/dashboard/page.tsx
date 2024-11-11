import { Metadata } from "next";

import DashboardPage from "@/components/DashboardPage";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <DashboardPage />
      </div>
    </main>
  );
}
