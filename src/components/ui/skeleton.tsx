import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-codo bg-codo-blue/10 dark:bg-codo-aqua/10",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
