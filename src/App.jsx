import { useState } from "react";
import axios from "axios";
import { Bot, SendHorizonal } from "lucide-react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:3000/get-review", { code: input });
      setResponse(res.data.response);
    } catch (err) {
      console.log("❌ Error:", err);

      if (err.response && err.response.status === 429) {
        setResponse("⚠️ Request limit reached. Retrying in 3 seconds...");
        setTimeout(() => {
          handleReview(); // Retry
        }, 3000);
      } else {
        setResponse("❌ Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-mono p-6">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-white text-center">
        <Bot className="inline mr-2 text-purple-400" size={32} />
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          AI-Powered
        </span>{" "}
        <span className="text-white">Code Reviewer</span>
      </h1>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start justify-center">
        {/* Input Box */}
        <div className="bg-black/60 rounded-xl p-6 w-full md:w-1/2 shadow-md h-[32rem] flex flex-col">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your code here or ask something..."
            className="w-full h-[85%] p-4 rounded-lg bg-zinc-900 text-white border border-blue-600 focus:outline-none resize-none placeholder:text-gray-400"
          ></textarea>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleReview}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition-all shadow-md"
              disabled={loading}
            >
              <SendHorizonal size={18} />
              {loading ? "Reviewing..." : "Review"}
            </button>
          </div>
        </div>

        {/* Output Box */}
        <div className="bg-black/60 rounded-xl p-6 w-full md:w-1/2 shadow-md h-[32rem] overflow-y-auto">
          <pre className="whitespace-pre-wrap text-sm md:text-base text-white">
            {loading && !response ? "🔄 Reviewing your code..." : response || "The AI review will appear here..."}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
