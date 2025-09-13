import { useState } from "react";

export default function Login({ HandleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    HandleLogin(email, password);
    console.log("Login attempt:", { email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row items-center justify-center p-6 gap-10">
      {/* Info Panel */}
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Login Details</h2>

        {/* Admin Info */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Admin:</h3>
          <p>
            Email: <span className="font-medium">admin@me.com</span>
          </p>
          <p className="text-green-600">
            Password: <span className="font-medium">123</span>
          </p>
        </div>

        {/* Employee Info */}
        <div>
          <h3 className="font-semibold mb-2">Sample Employee Logins:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Email: <span className="font-medium">rahul@me.com</span>{" "}
            </li>
            <li>
              Email: <span className="font-medium">amit@me.com</span>{" "}
            </li>
            <li>
              Email: <span className="font-medium">kavita@me.com</span>{" "}
            </li>
            <li>
              Email: <span className="font-medium">sachin@me.com</span>{" "}
            </li>
            <li className="text-green-600">
              Password: <span className="font-medium ">123</span>{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Sign In
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
