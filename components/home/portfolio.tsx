import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "AI-Powered Customer Service for RetailCorp",
      category: "Virtual Assistant",
      image: "/placeholder.svg?height=300&width=500",
      link: "/portfolios/retailcorp",
    },
    {
      title: "Data Analysis Platform for FinTech Solutions",
      category: "Data Analyzer",
      image: "/placeholder.svg?height=300&width=500",
      link: "/portfolios/fintech-solutions",
    },
    {
      title: "Personalized Marketing Campaign for E-commerce Giant",
      category: "Personalized AI Marketing",
      image: "/placeholder.svg?height=300&width=500",
      link: "/portfolios/ecommerce-marketing",
    },
    {
      title: "Healthcare Data Management System",
      category: "Customized Software Solution",
      image: "/placeholder.svg?height=300&width=500",
      link: "/portfolios/healthcare-data",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform with AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Link href={item.link} key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md h-64">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-sm text-primary font-medium mb-2">{item.category}</span>
                  <h3 className="text-xl text-white font-semibold group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/portfolios">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

