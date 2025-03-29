import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata, ResolvingMetadata } from "next"

// Mock data for solutions
const solutionData = {
  "personalized-marketing": {
    title: "Personalized AI Marketing",
    description:
      "Leverage the power of AI to create highly targeted marketing campaigns that resonate with your audience",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Transform Your Marketing Strategy</h2>
      <p>
        In today's competitive landscape, generic marketing messages no longer cut through the noise. Envision Lab's Personalized AI Marketing solution uses advanced machine learning algorithms to analyze customer data and create highly targeted campaigns that speak directly to individual preferences and behaviors.
      </p>

      <h2>How It Works</h2>
      <p>
        Our AI-powered platform collects and analyzes data from multiple touchpoints to build comprehensive customer profiles. These profiles enable us to predict customer preferences, anticipate needs, and deliver personalized content at the right time through the right channels.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>
          <strong>Customer Segmentation:</strong> Automatically group customers based on behavior, preferences, and purchase history
        </li>
        <li>
          <strong>Content Personalization:</strong> Generate tailored content that resonates with specific audience segments
        </li>
        <li>
          <strong>Predictive Analytics:</strong> Anticipate customer needs and behaviors to deliver proactive marketing
        </li>
        <li>
          <strong>Omnichannel Delivery:</strong> Ensure consistent personalized experiences across all customer touchpoints
        </li>
        <li>
          <strong>Performance Tracking:</strong> Measure and optimize campaign performance in real-time
        </li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Increase conversion rates by up to 30%</li>
        <li>Improve customer engagement and loyalty</li>
        <li>Reduce marketing waste by focusing resources on high-potential customers</li>
        <li>Gain deeper insights into customer preferences and behaviors</li>
        <li>Stay ahead of competitors with cutting-edge AI technology</li>
      </ul>
    `,
    testimonial: {
      quote:
        "Implementing Envision Lab's Personalized AI Marketing solution increased our conversion rates by 35% and customer retention by 42%. The insights we gained have transformed how we approach our marketing strategy.",
      author: "Marketing Director, E-commerce Giant",
    },
  },
  "it-consulting": {
    title: "IT & Business Consulting",
    description: "Strategic guidance on digital transformation and AI integration to optimize your business processes",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Navigate Your Digital Transformation Journey</h2>
      <p>
        Digital transformation is no longer optional—it's essential for business survival and growth. Envision Lab's IT & Business Consulting services provide expert guidance to help you navigate the complexities of technological change and AI integration, ensuring your organization stays competitive in the digital age.
      </p>

      <h2>Our Consulting Approach</h2>
      <p>
        We take a holistic approach to consulting, considering your business objectives, current technological landscape, organizational culture, and industry challenges. Our team of experienced consultants works closely with your stakeholders to develop tailored strategies that drive meaningful results.
      </p>

      <h3>Services We Offer</h3>
      <ul>
        <li>
          <strong>Digital Strategy Development:</strong> Create a comprehensive roadmap for your digital transformation journey
        </li>
        <li>
          <strong>AI Readiness Assessment:</strong> Evaluate your organization's preparedness for AI adoption
        </li>
        <li>
          <strong>Technology Stack Optimization:</strong> Identify the right technologies to support your business goals
        </li>
        <li>
          <strong>Process Reengineering:</strong> Redesign workflows to maximize efficiency and effectiveness
        </li>
        <li>
          <strong>Change Management:</strong> Facilitate smooth transitions during technological implementations
        </li>
        <li>
          <strong>Data Strategy:</strong> Develop frameworks for effective data collection, management, and utilization
        </li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Accelerate your digital transformation initiatives</li>
        <li>Reduce risks associated with technology investments</li>
        <li>Improve operational efficiency and reduce costs</li>
        <li>Enhance decision-making through data-driven insights</li>
        <li>Build internal capabilities for ongoing innovation</li>
        <li>Gain competitive advantage through strategic technology adoption</li>
      </ul>
    `,
    testimonial: {
      quote:
        "Envision Lab's consulting team helped us identify the right AI technologies to implement and created a clear roadmap for our digital transformation. Their expertise was invaluable in navigating complex decisions and ensuring our investments delivered tangible business value.",
      author: "CIO, Financial Services Company",
    },
  },
  "data-analyzer": {
    title: "Data Analyzer",
    description: "Transform raw data into actionable insights with our advanced AI-powered data analysis tools",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Unlock the Power of Your Data</h2>
      <p>
        In today's data-driven world, organizations collect vast amounts of information, but many struggle to extract meaningful insights. Envision Lab's Data Analyzer solution employs cutting-edge AI and machine learning techniques to help you discover patterns, trends, and correlations that drive better business decisions.
      </p>

      <h2>Comprehensive Data Analysis</h2>
      <p>
        Our platform integrates with your existing data sources to provide a unified analysis environment. Whether you're dealing with structured databases, unstructured text, images, or real-time streams, our Data Analyzer can process and interpret diverse data types to deliver comprehensive insights.
      </p>

      <h3>Key Capabilities</h3>
      <ul>
        <li>
          <strong>Predictive Analytics:</strong> Forecast future trends and outcomes based on historical data
        </li>
        <li>
          <strong>Anomaly Detection:</strong> Identify unusual patterns that may indicate opportunities or risks
        </li>
        <li>
          <strong>Natural Language Processing:</strong> Extract insights from text data including customer feedback, social media, and documents
        </li>
        <li>
          <strong>Data Visualization:</strong> Transform complex data into intuitive visual representations
        </li>
        <li>
          <strong>Automated Reporting:</strong> Generate regular insights reports tailored to different stakeholders
        </li>
        <li>
          <strong>Real-time Analysis:</strong> Process and analyze data as it's generated for immediate insights
        </li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Make data-driven decisions with confidence</li>
        <li>Identify new business opportunities and market trends</li>
        <li>Optimize operations and reduce costs</li>
        <li>Enhance customer understanding and improve experiences</li>
        <li>Mitigate risks through early detection of potential issues</li>
        <li>Democratize data insights across your organization</li>
      </ul>
    `,
    testimonial: {
      quote:
        "Envision Lab's Data Analyzer platform helped us identify market trends that we had completely missed. The insights generated led to a product pivot that increased our revenue by 28% in just six months. The ROI has been exceptional.",
      author: "Chief Data Officer, FinTech Solutions",
    },
  },
  "virtual-assistant": {
    title: "Virtual Assistant",
    description:
      "Enhance customer service and streamline operations with our intelligent AI-powered virtual assistants",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Revolutionize Customer Interactions</h2>
      <p>
        In today's fast-paced business environment, customers expect immediate, personalized service around the clock. Envision Lab's Virtual Assistant solution uses advanced natural language processing and machine learning to provide intelligent, conversational interactions that enhance customer experience while reducing operational costs.
      </p>

      <h2>Intelligent Conversation Design</h2>
      <p>
        Our virtual assistants go beyond simple chatbots. They understand context, remember conversation history, and continuously learn from interactions to provide increasingly relevant and helpful responses. We design each virtual assistant to align with your brand voice and business objectives.
      </p>

      <h3>Key Capabilities</h3>
      <ul>
        <li>
          <strong>Natural Language Understanding:</strong> Comprehend complex queries and conversational nuances
        </li>
        <li>
          <strong>Omnichannel Deployment:</strong> Provide consistent experiences across web, mobile, social media, and messaging platforms
        </li>
        <li>
          <strong>Knowledge Integration:</strong> Connect to your existing knowledge bases, FAQs, and business systems
        </li>
        <li>
          <strong>Personalization:</strong> Tailor responses based on customer history and preferences
        </li>
        <li>
          <strong>Human Handoff:</strong> Seamlessly transfer complex issues to human agents with full context
        </li>
        <li>
          <strong>Analytics Dashboard:</strong> Gain insights into customer inquiries, satisfaction, and assistant performance
        </li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Provide 24/7 customer support without increasing staffing costs</li>
        <li>Reduce response time from minutes to seconds</li>
        <li>Increase first-contact resolution rates</li>
        <li>Free human agents to focus on complex, high-value interactions</li>
        <li>Gather valuable insights from customer conversations</li>
        <li>Scale customer service capacity instantly during peak periods</li>
      </ul>
    `,
    testimonial: {
      quote:
        "Since implementing Envision Lab's Virtual Assistant, we've seen a 65% reduction in routine support tickets and a 40% increase in customer satisfaction scores. Our support team now focuses on complex issues that truly require human expertise, while the virtual assistant handles the rest with impressive accuracy.",
      author: "Customer Experience Director, SaaS Company",
    },
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug
  const solution = solutionData[slug]

  if (!solution) {
    return {
      title: "Solution Not Found",
    }
  }

  return {
    title: `${solution.title} | Envision Lab`,
    description: solution.description,
    alternates: {
      canonical: `https://envisionlab.com/solutions/${slug}`,
    },
    openGraph: {
      title: `${solution.title} | Envision Lab`,
      description: solution.description,
      url: `https://envisionlab.com/solutions/${slug}`,
      images: [
        {
          url: solution.image,
          width: 800,
          height: 400,
          alt: solution.title,
        },
      ],
    },
  }
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutionData[params.slug]

  if (!solution) {
    notFound()
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/solutions" className="text-primary hover:underline flex items-center gap-2">
            ← Back to Solutions
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">{solution.title}</h1>
          <p className="text-xl text-muted-foreground">{solution.description}</p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src={solution.image || "/placeholder.svg"}
            alt={solution.title}
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: solution.content }}
        />

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Success Story</h2>
          <blockquote className="italic border-l-4 border-primary pl-4 mb-4 text-muted-foreground">
            "{solution.testimonial.quote}"
          </blockquote>
          <p className="font-semibold">- {solution.testimonial.author}</p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Get Started with {solution.title}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

