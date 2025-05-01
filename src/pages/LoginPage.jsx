import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 🚀 You can add real auth here later
    navigate("/review"); // simulate successful login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#1f2937] p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Continue</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-300">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-300">Password</label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded-md font-semibold transition"
        >
          Log In
        </button>

        <p className="text-sm text-center text-gray-400 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-green-400 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
