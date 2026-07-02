import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">
            Welcome to Ideathon Portal
          </h1>

          <p className="mt-4 text-gray-600">
            Here users can submit innovative ideas, vote, comment, and track idea evolution.
          </p>
        </main>

      </div>

    </div>
  );
}

export default App;