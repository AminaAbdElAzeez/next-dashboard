"use client";
import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const status = useFormStatus();
  if (status.pending) {
    return (
      <button type="submit" className="login-btn">
        Submitting...
      </button>
    );
  }
  return (
    <button type="submit" className="login-btn">
      Login
    </button>
  );
}
