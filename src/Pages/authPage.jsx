import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);
  const navigate = useNavigate();
  const location = useLocation();

  // Get source page info (default to 'business')
  const source = location.state?.from || "business";

  const handleAuth = () => {
    if (source === "event") {
      navigate("/event_form");
    } else {
      navigate("/business_form");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/35 via-gray-200 to-orange-200 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back 👋" : "Join Amansie Community 🌍"}
        </h2>

        <form className="space-y-4">
          {/* ... all your form inputs ... */}

          <button
            type="button"
            onClick={handleAuth}
            className="w-full py-2 bg-orange-400 text-white rounded-lg font-semibold hover:bg-orange-500 transition duration-300"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-orange-400 hover:underline font-medium"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
