import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data for products
const productData = {
  fifi: {
    title: "Fifi",
    subtitle: "Personalized AI Marketing SaaS Platform",
    description:
      "Fifi is our flagship SaaS platform that puts the power of AI-driven marketing in your hands. Designed for marketing teams of all sizes, Fifi automates personalization at scale, helping you create, deploy, and optimize marketing campaigns that truly resonate with your audience.",
    image: "/placeholder.svg?height=400&width=800&text=Fifi+AI+Marketing+Platform",
    features: [
      {
        title: "Audience Intelligence",
        description:
          "Fifi analyzes customer data from multiple sources to build comprehensive profiles and segments. The platform continuously learns from customer interactions to refine these profiles, ensuring your targeting remains accurate over time.",
        capabilities: [
          "Automated customer segmentation",
          "Behavioral analysis and prediction",
          "Interest and preference mapping",
          "Customer journey tracking",
        ],
      },
      {
        title: "Content Generation",
        description:
          "Create personalized marketing content at scale with Fifi's AI-powered content generation tools. From email subject lines to social media posts, Fifi helps you craft messages that speak directly to each segment of your audience.",
        capabilities: [
          "AI-generated copy suggestions",
          "Personalized email templates",
          "Dynamic content blocks",
          "A/B testing recommendations",
        ],
      },
      {
        title: "Campaign Automation",
        description:
          "Set up sophisticated marketing campaigns that automatically adapt based on customer behavior and engagement. Fifi handles the complexity, allowing you to deliver the right message at the right time through the right channel.",
        capabilities: [
          "Multi-channel campaign orchestration",
          "Trigger-based messaging",
          "Personalized customer journeys",
          "Real-time optimization",
        ],
      },
      {
        title: "Analytics & Insights",
        description:
          "Gain deep insights into campaign performance and customer engagement with Fifi's comprehensive analytics dashboard. Understand what's working, what's not, and how to improve your marketing efforts.",
        capabilities: [
          "Real-time performance metrics",
          "Conversion attribution",
          "ROI calculation",
          "Predictive performance modeling",
        ],
      },
    ],
    pricing: [
      {
        tier: "Starter",
        price: "$499/month",
        description: "For small businesses just beginning with AI marketing",
      },
      {
        tier: "Professional",
        price: "$999/month",
        description: "For growing businesses with established marketing operations",
      },
      {
        tier: "Enterprise",
        price: "Custom pricing",
        description: "For large organizations with complex marketing needs",
      },
    ],
    testimonial: {
      quote:
        "Fifi has transformed our marketing approach. We've seen a 40% increase in email open rates and a 25% boost in conversion since implementing the platform. The AI-generated content suggestions have been particularly valuable for our small team.",
      author: "Marketing Manager, E-commerce Brand",
    },
    links: [
      {
        text: "View Pricing Details",
        url: "/products/fifi/pricing",
      },
    ],
  },
  emedis: {
    title: "Emedis",
    subtitle: "AI-Powered Electronic Medical Record System",
    description:
      "Emedis is an innovative Electronic Medical Record (EMR) system that leverages artificial intelligence to improve patient care, streamline clinical workflows, and enhance healthcare decision-making. Designed by healthcare professionals for healthcare professionals, Emedis addresses the real challenges faced in modern medical practices.",
    image: "/placeholder.svg?height=400&width=800&text=Emedis+EMR+System",
    features: [
      {
        title: "Intelligent Documentation",
        description:
          "Emedis uses advanced natural language processing to automate and enhance medical documentation, allowing healthcare providers to focus more on patient care and less on paperwork.",
        capabilities: [
          "Voice-to-text transcription with medical terminology recognition",
          "Automated coding suggestions for billing accuracy",
          "Smart templates that adapt to different specialties",
          "Contextual documentation assistance",
        ],
      },
      {
        title: "Clinical Decision Support",
        description:
          "Access evidence-based recommendations and insights at the point of care to support better clinical decision-making and improve patient outcomes.",
        capabilities: [
          "Drug interaction alerts and medication management",
          "Diagnosis suggestion based on symptoms and patient history",
          "Treatment protocol recommendations",
          "Risk stratification for preventive care",
        ],
      },
      {
        title: "Patient Engagement",
        description:
          "Enhance the patient experience with tools that facilitate communication, education, and active participation in their healthcare journey.",
        capabilities: [
          "Secure patient portal with messaging capabilities",
          "Personalized health education materials",
          "Appointment scheduling and reminders",
          "Remote monitoring integration",
        ],
      },
      {
        title: "Analytics & Insights",
        description:
          "Gain valuable insights into practice performance, patient populations, and clinical outcomes to drive continuous improvement.",
        capabilities: [
          "Population health management dashboards",
          "Clinical quality metrics tracking",
          "Operational efficiency analytics",
          "Predictive analytics for patient care needs",
        ],
      },
    ],
    implementation: [
      "Customized implementation plan tailored to your practice",
      "Data migration from existing systems",
      "Staff training and certification",
      "24/7 technical support",
      "Regular updates and enhancements",
    ],
    pricing: [
      {
        tier: "Per Provider",
        price: "Starting at $499/month per provider",
        description: "",
      },
      {
        tier: "Enterprise",
        price: "Custom pricing",
        description: "For hospitals and large healthcare networks",
      },
    ],
    testimonial: {
      quote:
        "Emedis has transformed our practice. The AI-assisted documentation has saved our physicians an average of 2 hours per day, and the clinical decision support has helped us improve our quality metrics significantly. The implementation was smooth, and the ongoing support has been exceptional.",
      author: "Medical Director, Primary Care Practice",
    },
    links: [
      {
        text: "View Case Studies",
        url: "/products/emedis/case-studies",
      },
    ],
  },
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug]

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/products" className="text-primary hover:underline flex items-center gap-2">
            ← Back to Products
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">{product.title}</h1>
          <p className="text-xl text-muted-foreground">{product.subtitle}</p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={`${product.title} ${product.subtitle}`}
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>Meet {product.title}: Your AI Solution</h2>
          <p>{product.description}</p>

          <h2>Key Features</h2>

          {product.features.map((feature, index) => (
            <div key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.capabilities.map((capability, i) => (
                  <li key={i}>{capability}</li>
                ))}
              </ul>
            </div>
          ))}

          {product.implementation && (
            <>
              <h2>Implementation & Support</h2>
              <p>
                We understand that implementing a new system is a significant undertaking. That's why {product.title}{" "}
                comes with comprehensive implementation services and ongoing support:
              </p>
              <ul>
                {product.implementation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <h2>Pricing</h2>
          <p>{product.title} offers flexible pricing models to accommodate organizations of all sizes:</p>
          <ul>
            {product.pricing.map((tier, index) => (
              <li key={index}>
                <strong>{tier.tier}:</strong> {tier.price} {tier.description && `- ${tier.description}`}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Customer Success</h2>
          <blockquote className="italic border-l-4 border-primary pl-4 mb-4 text-muted-foreground">
            "{product.testimonial.quote}"
          </blockquote>
          <p className="font-semibold">- {product.testimonial.author}</p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full mr-4">
            <Link href="/contact">Request a Demo</Link>
          </Button>
          {product.links &&
            product.links.map((link, index) => (
              <Button key={index} asChild size="lg" variant="outline" className="rounded-full">
                <Link href={link.url}>{link.text}</Link>
              </Button>
            ))}
        </div>
      </div>
    </div>
  )
}

