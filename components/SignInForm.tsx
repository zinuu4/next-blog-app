"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default SignInForm;
