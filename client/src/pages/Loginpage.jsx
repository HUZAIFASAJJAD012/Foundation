import React, { useState } from "react";

const Loginpage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const [signupErrors, setSignupErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = () => {
    let valid = true;
    let errors = { ...loginErrors };

    if (!loginEmail) {
      errors.email = "Email is required.";
      valid = false;
    } else {
      errors.email = "";
    }

    if (!loginPassword) {
      errors.password = "Password is required.";
      valid = false;
    } else {
      errors.password = "";
    }

    setLoginErrors(errors);

    if (valid) {
      alert("Login successful (simulated)");
    }
  };

  const handleSignUp = () => {
    let valid = true;
    let errors = { ...signupErrors };

    if (!signupName) {
      errors.name = "Name is required.";
      valid = false;
    } else {
      errors.name = "";
    }

    if (!signupEmail) {
      errors.email = "Email is required.";
      valid = false;
    } else {
      errors.email = "";
    }

    if (!signupPassword) {
      errors.password = "Password is required.";
      valid = false;
    } else {
      errors.password = "";
    }

    if (signupPassword !== signupConfirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      valid = false;
    } else {
      errors.confirmPassword = "";
    }

    setSignupErrors(errors);

    if (valid) {
      alert("Sign Up successful (simulated)");
    }
  };

  const handleForgotPassword = () => {
    const email = prompt("Enter your email address for password recovery:");
    if (email) {
      alert(`Password recovery email sent to ${email} (simulated)`);
    }
  };

  return (
    <div className="min-h-screen  bg-cover bg-center bg-[#001f3f] text-white flex justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black  opacity-50"><img src="src\assets\images\pexels.jpg" className="h-[100%] w-[100%] " alt="Firnas Logo" /></div>

      {!isSignUp ? (
        <div className="bg-[#04113a] p-8 rounded-lg shadow-lg w-full max-w-sm z-1">
          <h2 className="text-center text-2xl mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="loginEmail" className="block mb-2">Email:</label>
            <input
              type="email"
              id="loginEmail"
              className="w-full p-3  bg-white text-black text-lg rounded-lg focus:outline-none focus:border-2 focus:border-[#20641d]"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {loginErrors.email && <p className="text-red-500 text-sm mt-2">{loginErrors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="loginPassword" className="block mb-2">Password:</label>
            <input
              type="password"
              id="loginPassword"
              className="w-full p-3 bg-white text-black   text-lg rounded-lg focus:outline-none focus:border-2 focus:border-[#20641d]"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {loginErrors.password && <p className="text-red-500 text-sm mt-2">{loginErrors.password}</p>}
          </div>
          <button
            className="w-full bg-[#20641d] text-white py-2 rounded-lg text-lg hover:bg-[#1e5b16] transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="text-center mt-6">
            <p>
              Don't have an account?{" "}
              <button
                className="text-[#20641d] hover:text-white"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </p>
            <p>
              <button
                className="text-[#20641d] hover:text-white"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#04113a] p-8 rounded-lg shadow-lg w-full max-w-sm z-10">
          <h2 className="text-center text-2xl mb-4">Sign Up</h2>
          <div className="mb-4">
            <label htmlFor="signupName" className="block mb-2">Name:</label>
            <input
              type="text"
              id="signupName"
              className="w-full p-3 text-lg rounded-lg focus:outline-none focus:border-2 focus:border-[#20641d]"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              placeholder="Enter your name"
            />
            {signupErrors.name && <p className="text-red-500 text-sm mt-2">{signupErrors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="signupEmail" className="block mb-2">Email:</label>
            <input
              type="email"
              id="signupEmail"
              className="w-full p-3 text-lg rounded-lg focus:outline-none focus:border-2 focus:border-[#20641d]"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {signupErrors.email && <p className="text-red-500 text-sm mt-2">{signupErrors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="signupPassword" className="block mb-2">Password:</label>
            <input
              type="password"
              id="signupPassword"
              className="w-full p-3 text-lg rounded-lg focus:outline-none focus:border-2 focus:border-[#20641d]"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              placeholder="Enter a password"
            />
            {signupErrors.password && <p className="text-red-500 text-sm mt-2">{signupErrors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="signupConfirmPassword" className="block mb-2">Confirm Password:</label>
            <input
              type="password"
              id="signupConfirmPassword"
              className="w-full p-3 text-lg rounded-lg focus:outline-none focus:border-2 focus:border-[#20641d]"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />
            {signupErrors.confirmPassword && <p className="text-red-500 text-sm mt-2">{signupErrors.confirmPassword}</p>}
          </div>
          <button
            className="w-full bg-[#20641d] text-white py-2 rounded-lg text-lg hover:bg-[#1e5b16] transition duration-300"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <div className="text-center mt-6">
            <p>
              Already have an account?{" "}
              <button
                className="text-[#20641d] hover:text-white"
                onClick={() => setIsSignUp(false)}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
