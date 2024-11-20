import React from "react"
import {clsx} from "clsx";
import {VariantProps} from "class-variance-authority";
import {buttonVariants} from "@/components/ui/button/buttonVariants.ts";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => <button
  className={clsx([
    buttonVariants({
      variant,
      size
    }),
    className
  ])}
  ref={ref}
  {...props}
/>)

Button.displayName = "Button"

export { Button }