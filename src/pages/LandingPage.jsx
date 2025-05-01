import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Images for backgrounds and cards
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpeg";
import BackgroundImg from "../assets/bgimg3.jpg";
import CTABg from "../assets/bgimg.jpg";

// ✅ Custom icons
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";

const features = [
  {
    icon: Icon1,
    title: "AI-Powered Reviews",
    description:
      "Receive intelligent suggestions based on best practices, performance, and maintainability.",
    image: Img1,
  },
  {
    icon: Icon2,
    title: "Instant Feedback",
    description:
      "No waiting. Get real-time responses and code analysis on the fly.",
    image: Img2,
  },
  {
    icon: Icon3,
    title: "Catch Bugs Early",
    description:
      "Identify hidden issues before they become problems in production.",
    image: Img3,
  },
  {
    icon: Icon4,
    title: "Learn As You Code",
    description:
      "Not just what to fix — but why. Educational explanations help you grow as a developer.",
    image: Img4,
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white font-inter"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10">
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold text-white">
            <span className="text-purple-400">AI</span>Reviewer
          </div>
        </header>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center text-center py-20 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
            AI-Powered Code Reviewer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Instantly analyze, improve, and optimize your code with feedback from a senior AI code reviewer — powered by Gemini Flash.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/review")}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.section>

        {/* Features */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Developers Love It
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-cover bg-center bg-no-repeat border border-white/10 shadow-lg hover:shadow-purple-500/20 hover:scale-[1.04] transition-all duration-300 ease-in-out cursor-pointer"
                style={{ backgroundImage: `url(${feature.image})` }}
              >
                <div className="absolute inset-0 bg-black/60 rounded-2xl z-0" />
                <div className="relative z-10 flex flex-col gap-3">
                  <img src={feature.icon} alt="icon" className="w-10 h-10" />
                  <h3 className="text-xl font-bold text-white drop-shadow-md">
                    {feature.title}
                  </h3>
                  <p className="text-white text-[15px] font-medium drop-shadow-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 text-center px-4 rounded-t-3xl shadow-inner backdrop-blur-md relative bg-cover bg-center"
          style={{ backgroundImage: `url(${CTABg})` }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-t-3xl z-0" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to write cleaner, better code?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Click below to get your first instant AI code review.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/review")}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 rounded-xl font-semibold transition shadow-lg"
            >
              Try the Reviewer
            </motion.button>
          </div>
        </motion.section>
        {/* Footer Credit */}
          <footer className="text-center py-4 bg-black/80 text-gray-400 text-sm">
            © {new Date().getFullYear()} Built by <span className="text-white font-medium">Kunal Yadav</span>
          </footer>

      </div>
    </div>
  );
};

export default LandingPage;
