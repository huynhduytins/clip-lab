import bgImage from "@/assets/login.avif";
import { InputField } from "@/components/common/InputField";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";


type FormErrors = {
  email?: string;
  password?: string;
};

function validateField(name: "email" | "password", value: string) {
  if (name === "email") {
    if (!value.trim()) {
      return "Email is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      return "Please enter a valid email";
    }
  }

  if (name === "password" && !value.trim()) {
    return "Password is required";
  }

  return "";
}

function SignInFields() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({
      email: validateField("email", email),
      password: validateField("password", password),
    });
  };

  return (
    <form
      className={`w-full max-w-xs space-y-3 rounded-xl transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="space-y-1 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Welcome back!</h2>
        <p className="text-sm text-slate-500">Sign in to your account to continue</p>
      </div>

      <Button
        className="mt-6 h-11 w-full cursor-pointer justify-center gap-2 rounded-md border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50"
        size="default"
        variant="outline"
        type="button"
      >
        <Globe className="h-4 w-4" />
        Continue with Google
      </Button>

      <div className="py-1 text-center text-xs text-slate-400">or</div>

      <InputField
        error={errors.email}
        label="Email Address"
        onBlur={() => setErrors((prev) => ({ ...prev, email: validateField("email", email) }))}
        onChange={setEmail}
        placeholder="your email address"
        type="email"
        value={email}
      />

      <InputField
        error={errors.password}
        label="Password"
        onBlur={() => setErrors((prev) => ({ ...prev, password: validateField("password", password) }))}
        onChange={setPassword}
        placeholder="your password"
        type="password"
        value={password}
      />

      <Button
        className="h-11 w-full cursor-pointer rounded-md bg-linear-to-r from-blue-600 to-blue-500 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.35)] hover:from-blue-500 hover:to-blue-500"
        size="default"
        type="submit"
      >
        Sign In
      </Button>

      <p className="pt-1 text-center text-xs text-slate-500">
        Don&apos;t have an account? <span className="font-semibold text-blue-600">Sign up</span>
      </p>
    </form>
  );
}

export function LoginForm() {
  return (
    <section className="grid h-screen w-full md:grid-cols-[34%_66%]">
      <div className="min-h-1">
        <img
          alt="Login background"
          className="h-full w-full object-cover object-center"
          src={bgImage}
        />
      </div>
      <div className="flex min-h-105 items-center justify-center bg-[#f7f7f8] p-6 md:min-h-170 md:p-12">
        <SignInFields />
      </div>
    </section>
  );
}
