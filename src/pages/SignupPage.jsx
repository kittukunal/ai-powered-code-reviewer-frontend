import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // 🚀 You can add real registration logic here later
    navigate("/review"); // simulate successful signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4">
      <form
        onSubmit={handleSignup}
        className="bg-[#1f2937] p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-300">Full Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-300">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-300">Password</label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 bg-[#111827] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-black py-2 rounded-md font-semibold transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <span
            className="text-indigo-400 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
