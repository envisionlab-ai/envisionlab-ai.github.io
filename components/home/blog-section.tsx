import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of Generative AI in Business",
      excerpt:
        "Explore how generative AI is transforming business operations and creating new opportunities for growth.",
      date: "March 25, 2025",
      category: "AI Trends",
      image: "/placeholder.svg?height=300&width=500",
      link: "/blog/future-of-generative-ai",
    },
    {
      title: "Implementing Virtual Assistants: Best Practices",
      excerpt: "Learn the key strategies for successfully implementing virtual assistants in your business.",
      date: "March 18, 2025",
      category: "Virtual Assistants",
      image: "/placeholder.svg?height=300&width=500",
      link: "/blog/virtual-assistant-best-practices",
    },
    {
      title: "Data Analysis: Turning Information into Insights",
      excerpt:
        "Discover how advanced data analysis techniques can help you extract valuable insights from your business data.",
      date: "March 10, 2025",
      category: "Data Analysis",
      image: "/placeholder.svg?height=300&width=500",
      link: "/blog/data-analysis-insights",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in AI and business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

