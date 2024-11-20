import React, {forwardRef} from "react"

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className = "", ...props}, ref) => <div
  ref={ref}
  className={`rounded-lg border bg-zinc-100 dark:bg-zinc-800 text-neutral-800 dark:text-neutral-100 shadow-sm ${className}`}
  {...props}
/>)
Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className = "", ...props}, ref) => <div
  ref={ref}
  className={`flex flex-col space-y-1.5 p-6 ${className}`}
  {...props}
/>)
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({className = "", ...props}, ref) => <h3
  ref={ref}
  className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
  {...props}
/>)
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({className = "", ...props}, ref) => <p
  ref={ref}
  className={`text-sm text-neutral-500 dark:text-neutral-300 ${className}`}
  {...props}
/>)
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className = "", ...props}, ref) => <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />)
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className = "", ...props}, ref) => <div
  ref={ref}
  className={`flex items-center p-6 pt-0 ${className}`}
  {...props}
/>)
CardFooter.displayName = "CardFooter"

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}