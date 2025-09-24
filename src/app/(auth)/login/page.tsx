"use client";

import AuthLogo from "@/components/ui/AuthLogo";
import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      redirect("/boards");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="h-10 w-36 mb-3">
          <AuthLogo />
        </div>
        <div className="text-tblue-600 font-bold text-sm mb-3">
          Log in to continue
        </div>
      </div>
      <main>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div>
            <label className="font-semibold" htmlFor="mail">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full mt-2 mb-4 px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="font-semibold" htmlFor="">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full mt-2 mb-4 px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          {errorMsg && (
            <div className="text-red-500 text-sm mb-2">{errorMsg}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="px-auto w-full py-3 bg-tblue-500 hover:bg-tblue-700 font-bold text-white rounded"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </main>
    </>
  );
}
