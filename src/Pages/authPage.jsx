import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleForm = () => setIsLogin(!isLogin);
  const navigate = useNavigate();
  const location = useLocation();


  // Get dynamic redirect target from previous page (e.g. /marriageform, /business_form, etc.)
  const redirectTo = location.state?.from || "/";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = (e) => {
    e.preventDefault();

    // ✅ Redirect to the intended route instead of hardcoding it
    navigate(redirectTo);
=======
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


        <form className="space-y-4" onSubmit={handleAuth}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"

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
