import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--semantic-focus-brand-bold)] aria-invalid:ring-[var(--semantic-bg-danger-warning-bold-default)]/20 dark:aria-invalid:ring-[var(--semantic-bg-danger-warning-bold-default)]/40 aria-invalid:border-[var(--semantic-bg-danger-warning-bold-default)]",
  {
    variants: {
      variant: {
        default: "bg-[var(--semantic-bg-brand-bold-default)] text-[var(--semantic-text-neutral-bold-default)] hover:bg-[var(--semantic-bg-brand-bold-hovered)] active:bg-[var(--semantic-bg-brand-bold-pressed)] disabled:bg-[var(--semantic-bg-brand-bold-disabled)] disabled:text-[var(--semantic-text-disabled)]",
        destructive:
          "bg-[var(--semantic-bg-danger-warning-bold-default)] text-white hover:bg-[var(--semantic-bg-danger-warning-bold-hover)] active:bg-[var(--semantic-bg-danger-warning-bold-pressed)] disabled:bg-[var(--semantic-text-danger-bold-disabled)] disabled:text-white focus-visible:ring-[var(--semantic-bg-danger-warning-bold-default)]/20 dark:focus-visible:ring-[var(--semantic-bg-danger-warning-bold-default)]/40",
        outline:
          "border border-[var(--semantic-border-neutral-subtle-default)] bg-[var(--semantic-bg-neutral-screen)] hover:bg-[var(--semantic-bg-neutral-subtle-default)] hover:border-[var(--semantic-border-neutral-subtle-hovered)] active:bg-[var(--semantic-bg-neutral-subtle-pressed)] disabled:border-[var(--semantic-border-neutral-subtle-disabled)] disabled:text-[var(--semantic-text-disabled)]",
        secondary:
          "bg-[var(--semantic-bg-neutral-bold-default)] text-[var(--semantic-text-neutral-bold-default)] hover:bg-[var(--semantic-bg-neutral-bold-hovered)] active:bg-[var(--semantic-bg-neutral-bold-pressed)] disabled:bg-[var(--semantic-bg-neutral-bold-disabled)] disabled:text-[var(--semantic-text-disabled)]",
        ghost:
          "hover:bg-[var(--semantic-bg-neutral-subtle-default)] hover:text-[var(--semantic-text-neutral-bold-default)] dark:hover:bg-[var(--semantic-bg-neutral-subtle-default)]/50",
        link: "text-[var(--semantic-link-brand-bold-default)] underline-offset-4 hover:text-[var(--semantic-link-brand-bold-hovered)] visited:text-[var(--semantic-link-brand-bold-visited)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
