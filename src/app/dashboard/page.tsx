import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="grid gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to your Dashboard
            </h2>
            <p className="text-gray-600">
              This is a simple dashboard page. Add your content here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
