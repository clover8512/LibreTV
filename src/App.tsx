import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold">LibreTV — Frontend (React + TS)</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow p-6">
          <p className="text-sm text-gray-600">
            This is the new React + TypeScript frontend scaffold. The backend is untouched — API calls should be
            proxied to your existing backend endpoints.
          </p>
          <div className="mt-4 text-sm text-gray-700">
            <p>Next steps: wire up routes, migrate templates/assets, and implement components that call the API.</p>
          </div>
        </section>
      </main>
    </div>
  );
}