import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

// React Hook
import { useForm } from "react-hook-form";

function Login() {
  const [message, setMessage] = React.useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleGoogleSignIn = () => {
    // Handle Google Sign In
  };
  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-semibold mb-4">Login Page</h1>

        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div className="">
            <button className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-8 rounded focus:outline-none">
              Login
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Haven't an account ? Please Register
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </p>

        {/* google sign in button can be added here */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-warp items-center justify-center bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none "
          >
            <FaGoogle className="mr-2" />
            Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray text-sm">
          {" "}
          copyright 2025 Book Store. All right
        </p>
      </div>
    </div>
  );
}

export default Login;
