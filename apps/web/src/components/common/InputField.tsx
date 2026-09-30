import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";



type InputFieldProps = {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
};

export function InputField({
  label,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}: InputFieldProps) {
  return (
    <label className="block space-y-1.5">
      <Label className="text-sm text-slate-700">{label}</Label>
      <Input
        className={cn(
          "h-11 rounded-md border bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-blue-500/30 dark:bg-white",
          error ? "border-rose-400 focus-visible:border-rose-400 focus-visible:ring-rose-400/30" : "border-slate-300",
        )}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error ? <p className="text-xs text-rose-500">{error}</p> : null}
    </label>
  );
}
