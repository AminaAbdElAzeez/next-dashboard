"use server";
import axiosInstance from "@/app/_utils/axiosInstance";

export default async function LoginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  let errors = {};
  if (!name) {
    errors.name = "Please Enter your name.";
  }
  if (!email.includes("@")) {
    errors.email = "Please Enter a valid Email address.";
  }
  if (password.trim().length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    const res = await axiosInstance.post("/admin/login", {
      email,
      password,
    });

    const { token } = res.data;

    return {
      success: true,
      token,
      formData: { name },
    };
  } catch (error) {
    errors.server = error.response?.data?.message || "Login failed.";
    return { errors };
  }
}
