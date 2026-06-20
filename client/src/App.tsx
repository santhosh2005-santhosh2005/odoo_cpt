import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "/app/odoofinal/index.html";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Redirecting to Odoo Cafe...</p>
    </div>
  );
}

export default App;
