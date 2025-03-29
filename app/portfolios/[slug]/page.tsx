import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data for portfolios
const portfolioData = {
  retailcorp: {
    title: "AI-Powered Customer Service for RetailCorp",
    category: "Virtual Assistant",
    description: "How we transformed customer service operations for a leading retail chain",
    image: "/placeholder.svg?height=500&width=1000&text=RetailCorp+Case+Study",
    industry: "Retail / E-commerce",
    timeline: "6 months",
    solution: "Virtual Assistant Implementation",
    challenge: `
      RetailCorp, a leading retail chain with over 500 stores nationwide and a robust online presence, was struggling with customer service scalability. With a growing customer base and increasing query volume, their traditional customer service model was becoming:
      
      - Costly to maintain and scale
      - Unable to provide 24/7 support without significant investment
      - Inconsistent in response quality and time
      - Overwhelmed during peak shopping seasons
      
      The company needed a solution that could handle routine customer inquiries efficiently while allowing human agents to focus on complex issues requiring personal attention.
    `,
    approach: `
      After a thorough analysis of RetailCorp's customer service operations and common inquiry patterns, we developed a comprehensive implementation strategy:
      
      1. **Data Analysis:** We analyzed two years of customer service interactions to identify common questions, issues, and resolution patterns.
      2. **AI Model Development:** We trained a custom natural language processing model on RetailCorp's specific product catalog, policies, and customer interaction history.
      3. **Omnichannel Integration:** We implemented the virtual assistant across multiple channels including website chat, mobile app, and social media platforms.
      4. **Human-AI Collaboration:** We designed a seamless handoff system between the AI assistant and human agents for complex queries.
      5. **Continuous Learning:** We established a feedback loop system to continuously improve the assistant's responses based on customer interactions.
    `,
    solution: `
      Our team developed and deployed "RetailBot," an AI-powered virtual assistant specifically tailored to RetailCorp's needs. Key features included:
      
      - Natural language understanding capable of interpreting complex customer queries
      - Product recommendation engine based on customer preferences and purchase history
      - Order tracking and status updates in real-time
      - Return and exchange processing capabilities
      - Inventory checking across all store locations
      - Personalized responses based on customer history
      - Seamless escalation to human agents when necessary
    `,
    results: [
      "75% reduction in average response time to customer inquiries",
      "40% increase in customer satisfaction scores",
      "65% of inquiries successfully resolved without human intervention",
      "30% reduction in customer service operational costs",
      "24/7 support availability without additional staffing",
      "50% decrease in agent turnover due to more engaging work",
    ],
    testimonial: {
      quote:
        "Implementing Envision Lab's virtual assistant solution has been transformative for our customer service operations. Not only have we seen dramatic improvements in efficiency and customer satisfaction, but we've also gained valuable insights that have informed our broader business strategy. The team at Envision Lab was exceptional throughout the entire process, from initial analysis to ongoing optimization.",
      author: "Sarah Johnson, Chief Customer Officer, RetailCorp",
    },
  },
  "fintech-solutions": {
    title: "Data Analysis Platform for FinTech Solutions",
    category: "Data Analyzer",
    description: "Leveraging AI to transform financial data into actionable investment insights",
    image: "/placeholder.svg?height=500&width=1000&text=FinTech+Solutions+Case+Study",
    industry: "Financial Technology",
    timeline: "9 months",
    solution: "Custom Data Analysis Platform",
    challenge: `
      FinTech Solutions, a growing investment management firm, was struggling to process and analyze the vast amounts of financial data available to them. Their challenges included:
      
      - Manual analysis of market trends was time-consuming and error-prone
      - Inability to process unstructured data from news sources and social media
      - Delayed insights resulting in missed investment opportunities
      - Difficulty in identifying correlations across different asset classes and markets
      - Limited capacity to perform predictive analysis for future market movements
      
      The firm needed a sophisticated data analysis solution that could process diverse data sources in real-time and provide actionable investment insights to gain a competitive edge.
    `,
    approach: `
      We developed a comprehensive strategy to address FinTech Solutions' data analysis challenges:
      
      1. **Data Integration:** We created a unified data pipeline to collect and process data from multiple sources, including market feeds, financial statements, news APIs, and social media.
      2. **AI Model Development:** We built custom machine learning models for sentiment analysis, anomaly detection, and predictive forecasting specific to financial markets.
      3. **Real-time Processing:** We implemented a scalable architecture capable of processing streaming data with minimal latency.
      4. **Visualization Framework:** We designed intuitive dashboards and visualization tools to make complex data insights accessible to investment managers.
      5. **Backtesting Environment:** We created a system to validate investment strategies against historical data before real-world implementation.
    `,
    solution: `
      Our team developed "FinSight," a comprehensive AI-powered data analysis platform tailored to FinTech Solutions' specific needs. Key features included:
      
      - Real-time market data processing and analysis
      - Natural language processing for news and social media sentiment analysis
      - Anomaly detection to identify unusual market patterns
      - Predictive analytics for market trend forecasting
      - Correlation analysis across different asset classes
      - Customizable alert system for investment opportunities
      - Interactive visualization dashboards for different user roles
      - Strategy backtesting and simulation capabilities
    `,
    results: [
      "28% increase in investment returns within the first year",
      "65% reduction in time spent on data analysis",
      "40% improvement in risk assessment accuracy",
      "3x increase in the number of investment opportunities identified",
      "50% reduction in false positive signals",
      "Real-time insights enabling faster decision-making",
    ],
    testimonial: {
      quote:
        "FinSight has completely transformed how we approach investment analysis. The platform's ability to process vast amounts of data and surface meaningful insights has given us a significant edge in the market. What impressed us most was Envision Lab's deep understanding of both AI technology and financial markets. They didn't just deliver a technical solution; they delivered a business advantage.",
      author: "Michael Chen, Chief Investment Officer, FinTech Solutions",
    },
  },
  "ecommerce-marketing": {
    title: "Personalized Marketing Campaign for E-commerce Giant",
    category: "Personalized AI Marketing",
    description: "How we revolutionized customer engagement through AI-driven personalization",
    image: "/placeholder.svg?height=500&width=1000&text=E-commerce+Marketing+Case+Study",
    industry: "E-commerce",
    timeline: "7 months",
    solution: "AI-Powered Marketing Personalization",
    challenge: `
      A leading e-commerce company with millions of customers was struggling with declining engagement rates and conversion metrics. Despite having vast amounts of customer data, they were unable to effectively leverage this information to create personalized experiences. Their marketing campaigns were:
      
      - Too generic, with limited segmentation
      - Ineffective at re-engaging dormant customers
      - Unable to predict customer preferences accurately
      - Generating poor ROI compared to industry benchmarks
      
      The company needed a solution that could transform their customer data into actionable insights and deliver truly personalized marketing at scale.
    `,
    approach: `
      We developed a comprehensive personalization strategy:
      
      1. **Data Unification:** We created a unified customer data platform that integrated information from website interactions, purchase history, support interactions, and third-party sources.
      2. **AI Model Development:** We built custom machine learning models for customer segmentation, product affinity, and next-best-action prediction.
      3. **Content Generation:** We implemented AI-powered content generation systems to create personalized messaging at scale.
      4. **Campaign Automation:** We designed automated campaign workflows that could adapt in real-time based on customer behavior.
      5. **Testing Framework:** We established a robust A/B testing framework to continuously optimize personalization strategies.
    `,
    solution: `
      We implemented "PersonaAI," a comprehensive personalization platform that transformed the company's marketing approach. Key features included:
      
      - Dynamic customer segmentation based on behavior patterns and preferences
      - Predictive product recommendations tailored to individual interests
      - Personalized email content generation with dynamic elements
      - Adaptive campaign timing based on individual engagement patterns
      - Cross-channel personalization across email, web, mobile app, and ads
      - Real-time personalization adjustments based on customer interactions
    `,
    results: [
      "35% increase in conversion rates across all marketing channels",
      "42% improvement in customer retention",
      "53% higher email engagement rates",
      "27% increase in average order value",
      "3.2x ROI on marketing spend",
      "68% reduction in customer acquisition costs",
    ],
    testimonial: {
      quote:
        "Envision Lab's personalization platform has completely transformed our marketing approach. We're now able to deliver truly relevant experiences to each customer, resulting in significantly higher engagement and conversion rates. The AI-driven insights have also helped us identify new market opportunities we hadn't previously recognized.",
      author: "Jennifer Lee, Chief Marketing Officer, E-commerce Giant",
    },
  },
  "healthcare-data": {
    title: "Healthcare Data Management System",
    category: "Customized Software Solution",
    description: "Transforming patient care through intelligent data management",
    image: "/placeholder.svg?height=500&width=1000&text=Healthcare+Data+Management+Case+Study",
    industry: "Healthcare",
    timeline: "12 months",
    solution: "Custom Healthcare Data Platform",
    challenge: `
      A large healthcare provider with multiple facilities was struggling with fragmented data systems that prevented efficient patient care and operational management. Their challenges included:
      
      - Patient information siloed across different departments and systems
      - Inability to quickly access comprehensive patient histories
      - Manual and time-consuming reporting processes
      - Difficulty complying with evolving healthcare regulations
      - Limited ability to leverage data for improving care protocols
      
      The organization needed a unified data management solution that could integrate disparate systems while maintaining strict security and compliance standards.
    `,
    approach: `
      We developed a comprehensive strategy to address their healthcare data challenges:
      
      1. **System Assessment:** We conducted a thorough analysis of all existing data systems, workflows, and integration points.
      2. **Architecture Design:** We designed a secure, HIPAA-compliant data architecture that could unify information while maintaining appropriate access controls.
      3. **AI Integration:** We incorporated machine learning models for predictive analytics, anomaly detection, and clinical decision support.
      4. **Interface Development:** We created intuitive interfaces tailored to different user roles (physicians, nurses, administrators).
      5. **Implementation Strategy:** We developed a phased rollout plan to minimize disruption to critical healthcare operations.
    `,
    solution: `
      We delivered "HealthCore," a comprehensive healthcare data management platform. Key features included:
      
      - Unified patient records with real-time updates across departments
      - AI-powered clinical decision support with evidence-based recommendations
      - Automated regulatory compliance reporting and monitoring
      - Predictive analytics for patient risk assessment and resource allocation
      - Secure patient portal for improved engagement and communication
      - Advanced analytics dashboard for operational optimization
    `,
    results: [
      "60% improvement in operational efficiency",
      "45% reduction in time spent on administrative tasks",
      "32% decrease in average treatment decision time",
      "28% improvement in patient outcomes for high-risk cases",
      "100% compliance with regulatory requirements",
      "$3.2M annual savings in operational costs",
    ],
    testimonial: {
      quote:
        "The data management system developed by Envision Lab has transformed how we deliver care. Our staff now has immediate access to the information they need, allowing them to make better decisions faster. The predictive capabilities have been particularly valuable in helping us identify at-risk patients earlier and intervene proactively.",
      author: "Dr. Robert Williams, Chief Medical Officer, Healthcare Provider",
    },
  },
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const portfolio = portfolioData[params.slug]

  if (!portfolio) {
    notFound()
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/portfolios" className="text-primary hover:underline flex items-center gap-2">
            ← Back to Portfolios
          </Link>
        </div>

        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/20 text-white mb-4">
            {portfolio.category}
          </span>
          <h1 className="text-4xl font-bold mb-4 gradient-text">{portfolio.title}</h1>
          <p className="text-xl text-muted-foreground">{portfolio.description}</p>
        </div>

        <div className="mb-12 border border-border rounded-lg overflow-hidden">
          <Image
            src={portfolio.image || "/placeholder.svg"}
            alt={portfolio.title}
            width={1000}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="border border-border rounded-lg p-6 bg-secondary">
            <h3 className="text-lg font-semibold mb-2">Industry</h3>
            <p className="text-muted-foreground">{portfolio.industry}</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-secondary">
            <h3 className="text-lg font-semibold mb-2">Timeline</h3>
            <p className="text-muted-foreground">{portfolio.timeline}</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-secondary">
            <h3 className="text-lg font-semibold mb-2">Solution</h3>
            <p className="text-muted-foreground">{portfolio.solution}</p>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>The Challenge</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: portfolio.challenge
                .split("\n")
                .map((line) =>
                  line.trim().startsWith("-") ? `<li>${line.substring(1).trim()}</li>` : `<p>${line}</p>`,
                )
                .join("")
                .replace(/<li>/g, "<ul><li>")
                .replace(/<\/li>\n<p>/g, "</li></ul><p>"),
            }}
          />

          <h2>Our Approach</h2>
          <div
            dangerouslySetInnerHTML={{ __html: portfolio.approach.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
          />

          <h2>The Solution</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: portfolio.solution
                .split("\n")
                .map((line) =>
                  line.trim().startsWith("-") ? `<li>${line.substring(1).trim()}</li>` : `<p>${line}</p>`,
                )
                .join("")
                .replace(/<li>/g, "<ul><li>")
                .replace(/<\/li>\n<p>/g, "</li></ul><p>"),
            }}
          />

          <h2>Results</h2>
          <ul>
            {portfolio.results.map((result, index) => (
              <li key={index}>
                <strong>{result.split(" ")[0]}</strong> {result.substring(result.indexOf(" ") + 1)}
              </li>
            ))}
          </ul>
          <p>
            Additionally, the data collected through our solution provided valuable insights into customer preferences
            and pain points, informing product development and marketing strategies.
          </p>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
          <blockquote className="italic border-l-4 border-white pl-4 mb-4 text-muted-foreground">
            "{portfolio.testimonial.quote}"
          </blockquote>
          <p className="font-semibold">- {portfolio.testimonial.author}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/portfolios">View More Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

