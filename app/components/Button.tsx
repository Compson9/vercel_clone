import { Button } from "@/components/ui/button"

interface Button1Props {
  title: string;
  className?: string;
}

export function Button1({ title, className }: Button1Props) {
  return <Button className={className}>{title}</Button>
}
