import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/register", data);
      if (response.status === 201) {
        toast.success("Registered successfully!");
        reset();
        navigate("/");
      }
    } catch (error) {
      console.error("❌ Registration error:", error);
      toast.error("Registration failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            {...register("name", { required: true })}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
