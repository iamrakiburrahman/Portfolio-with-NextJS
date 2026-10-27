import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex justify-center items-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-all duration-300 ",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25",
        primary: "bg-primary text-white",
        outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
        ghost: "hover:bg-accent/10 hover:text-accent text-white",
      },
      size: {
        sm: "h-[42px] px-5 text-sm",
        default: "h-[48px] px-6 text-sm sm:text-base",
        md: "h-[50px] px-7 text-sm sm:text-base",
        lg: "h-[54px] px-8 text-base font-semibold",
        xl: "h-[58px] px-9 text-base font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
