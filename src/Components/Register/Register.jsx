import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthConText } from "../../Context/AuthConText";
import {  updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [error, setError] = useState("");
  const [registerShowPassword, setRegisterShowPassword] = useState(false);

  const { createUser, setLoading } = use(AuthConText);

  //handle register
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photoUrl = event.target.photo.value;
    const password = event.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    //Password validation rules
    if (!passwordRegex.test(password)) {
      setError(
        "Password must have at least 1 uppercase, 1 lowercase, and be 6+ characters long",
      );
      return;
    }
    setError("");
    setRegisterSuccess(false);
    createUser(email, password)
    .then((result) => {
      console.log(result.user);
      //email verification
      // sendEmailVerification(result.user)
      // .then(() => {
      //   alert("Please verification your email");
      // })
      // .catch((error) => {
      //   setError(error.message);
      // })
      setRegisterSuccess(true);
      event.target.reset();
      //profile update
       const profile = {
          displayName: name,
          photoURL: photoUrl,
        };

        updateProfile( result.user, profile)
        .then(() => {})
        .catch(() => {
          console.log(error.message)
        })
        .finally(() => {
          setLoading(false)
        })

    })



    .catch((error) =>{
      setError(error.message)
    })
  };
  // handle register show password
  const handleShowRegisterPassword = (event) => {
    event.preventDefault();
    setRegisterShowPassword(!registerShowPassword);
  };

  return (
    <div className="mt-7 card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <h2 className="text-center">Register Now</h2>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="Photo URL"
            />
            <label className="label">Password</label>
           <div className="relative">
             <input
              type={registerShowPassword ? "text":"password"}
              name="password"
              className="input"
              placeholder="Password"
            />
            <button onClick={handleShowRegisterPassword} 
            className="absolute right-8 top-3" type="button">
                {registerShowPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
           </div>

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          {
            registerSuccess && ( <p className="text-green-500">Account Created Successfully. </p> )
          }
          {
            error && (<p className="text-red-500">{error}</p>)
          }
        </form>
        <p className="text-center">
          Already have an Account?
          <Link to="/login" className="text-blue-600 underline">
            Log Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
