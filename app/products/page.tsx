import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Products data
const products = [
  {
    title: "Fifi",
    subtitle: "Personalized AI Marketing SaaS",
    description:
      "An AI-powered marketing platform that creates personalized campaigns, analyzes customer behavior, and optimizes marketing strategies in real-time.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "fifi",
  },
  {
    title: "Emedis",
    subtitle: "EMR System Using AI",
    description:
      "An intelligent Electronic Medical Record system that uses AI to improve patient care, streamline clinical workflows, and enhance healthcare decision-making.",
    image: "/placeholder.svg?height=400&width=600",
    slug: "emedis",
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Our Products</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Innovative AI-powered solutions designed to transform your business operations and drive growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {products.map((product, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden bg-secondary card-hover">
            <div className="relative h-64 w-full overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-1">{product.title}</h2>
              <p className="text-primary font-medium mb-4">{product.subtitle}</p>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              <Button asChild className="w-full rounded-full">
                <Link href={`/products/${product.slug}`}>Explore {product.title}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

