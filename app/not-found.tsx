import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found | Envision Lab",
  description: "The page you are looking for does not exist. Return to the homepage to explore our AI solutions.",
}

export default function NotFound() {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-6xl font-bold mb-6 gradient-text">404</h1>
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg" className="rounded-full">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}

