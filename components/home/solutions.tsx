import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MessageSquare, BarChart3, Target } from "lucide-react"

export default function Solutions() {
  const solutions = [
    {
      title: "Personalized AI Marketing",
      description:
        "Leverage AI to create targeted marketing campaigns that resonate with your audience and drive conversions.",
      icon: <Target className="h-8 w-8 text-primary" />,
      link: "/solutions/personalized-marketing",
    },
    {
      title: "Virtual Assistant",
      description:
        "Implement intelligent virtual assistants to enhance customer service and streamline internal operations.",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      link: "/solutions/virtual-assistant",
    },
    {
      title: "Data Analyzer",
      description: "Transform raw data into actionable insights with our advanced AI-powered data analysis tools.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      link: "/solutions/data-analyzer",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative h-[400px] w-full">
              <Image src="/placeholder.svg?height=600&width=600" alt="AI Solutions" fill className="object-contain" />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solutions & Expertise</h2>
            <p className="text-xl text-gray-600 mb-8">
              We offer a comprehensive suite of AI-powered solutions designed to address your specific business
              challenges and drive growth.
            </p>
            <Button asChild>
              <Link href="/solutions">Explore All Solutions</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <Link href={solution.link} className="text-primary hover:underline font-medium flex items-center">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

