import React, { use, useState } from "react";
import { AuthConText } from "../Context/AuthConText";
import { Link, useLocation, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  
  const { signInUser, signInWithGoogle, setUser, setLoading } =
    use(AuthConText);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    //sign in user

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        setUser(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
// show login password
  const handleShowLoginPassword = (event) => {
    event.preventDefault();
    setShowLoginPassword(!showLoginPassword);
  };
//login google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result) => {
      console.log(result.user)
      setUser(result.user);
      navigate(location.state || "/");
    })
    .catch((error) =>{
      console.log(error.message)
    })
    
  }

  return (
    <div className="mt-10 card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showLoginPassword ? "text" : "password"}
                className="input"
                name="password"
                placeholder="Password"
              />
              <button
                onClick={handleShowLoginPassword}
                className="absolute right-8 top-4"
              >
                {showLoginPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>

        {/* Google */}
        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
