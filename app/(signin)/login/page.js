"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import LoginAction from "../../_actions/auth-action";
import { useRouter } from "next/navigation";
import FormSubmit from "../../_components/form-submit";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export default function LoginPage() {
  const [state, formAction] = useFormState(LoginAction, {});
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  if (state.success) {
    const name = state.formData.name;
    const token = state.formData.token;
    document.cookie = `token=${token}; Path=/;`;
    document.cookie = `name=${name}; Path=/;`;
    router.push("/dashboard");
  }

  return (
    <form className="home-right-form" action={formAction}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" placeholder="Enter your name" />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter admin@proffer.com"
      />

      <label htmlFor="pass">Password:</label>
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="pass"
          placeholder="Enter 123456"
          className="passwordInput"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="eyeIcon"
        >
          {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </span>
      </div>

      {state.errors && (
        <ul className="error-list">
          {Object.keys(state.errors).map((error) => (
            <li key={error} className="error-item">
              {state.errors[error]}
            </li>
          ))}
        </ul>
      )}

      <FormSubmit />
    </form>
  );
}
