import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

// Blog posts data
const blogPosts = [
  {
    title: "The Future of Generative AI in Business",
    excerpt:
      "Explore how generative AI is transforming business operations and creating new opportunities for growth and innovation.",
    date: "March 25, 2025",
    author: "Jane Smith",
    category: "AI Trends",
    image: "/placeholder.svg?height=300&width=500",
    slug: "future-of-generative-ai",
  },
  {
    title: "Implementing Virtual Assistants: Best Practices",
    excerpt:
      "Learn the key strategies for successfully implementing virtual assistants in your business to enhance customer experience.",
    date: "March 18, 2025",
    author: "John Doe",
    category: "Virtual Assistants",
    image: "/placeholder.svg?height=300&width=500",
    slug: "virtual-assistant-best-practices",
  },
  {
    title: "Data Analysis: Turning Information into Insights",
    excerpt:
      "Discover how advanced data analysis techniques can help you extract valuable insights from your business data.",
    date: "March 10, 2025",
    author: "Sarah Johnson",
    category: "Data Analysis",
    image: "/placeholder.svg?height=300&width=500",
    slug: "data-analysis-insights",
  },
  {
    title: "Personalized Marketing: The AI Advantage",
    excerpt:
      "Explore how AI-powered personalized marketing can significantly improve customer engagement and conversion rates.",
    date: "March 5, 2025",
    author: "Michael Brown",
    category: "Marketing",
    image: "/placeholder.svg?height=300&width=500",
    slug: "personalized-marketing-ai",
  },
  {
    title: "The Role of AI in Healthcare Innovation",
    excerpt: "An in-depth look at how AI is revolutionizing healthcare delivery, patient care, and medical research.",
    date: "February 28, 2025",
    author: "Dr. Emily Chen",
    category: "Healthcare",
    image: "/placeholder.svg?height=300&width=500",
    slug: "ai-healthcare-innovation",
  },
  {
    title: "Building Ethical AI Systems",
    excerpt:
      "Understanding the importance of ethics in AI development and implementation for sustainable business growth.",
    date: "February 20, 2025",
    author: "David Wilson",
    category: "AI Ethics",
    image: "/placeholder.svg?height=300&width=500",
    slug: "ethical-ai-systems",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Our Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Insights, trends, and expert perspectives on AI, business transformation, and technology innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={index} className="group">
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
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">By {post.author}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

