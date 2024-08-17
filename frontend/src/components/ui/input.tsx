import { cn } from "@/lib/utils";
import * as React from "react";
import { Button } from "../ui/button"; // Assurez-vous d'importer le composant Button

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isParse?: boolean;
  onParse?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isParse = false, onParse, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {isParse && props.value === "" && (
          <Button
            variant="secondary"
            size="s"
            className="absolute py-3 right-1 top-1/2 transform -translate-y-1/2 mx-1"
            onClick={onParse}
          >
            Parse clipboard
          </Button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
