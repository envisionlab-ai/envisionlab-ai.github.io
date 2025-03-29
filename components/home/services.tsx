import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, LineChart, Code } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Generative AI Implementation",
      description:
        "Integrate cutting-edge AI technologies into your business processes to automate tasks, enhance decision-making, and drive innovation.",
      icon: <Brain className="h-12 w-12 text-primary" />,
    },
    {
      title: "IT & Business Consulting",
      description:
        "Strategic guidance on digital transformation, technology adoption, and business process optimization to maximize your competitive advantage.",
      icon: <LineChart className="h-12 w-12 text-primary" />,
    },
    {
      title: "Customized Software Solutions",
      description:
        "Bespoke software development tailored to your specific business needs, ensuring seamless integration with your existing systems.",
      icon: <Code className="h-12 w-12 text-primary" />,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Provide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions and services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

