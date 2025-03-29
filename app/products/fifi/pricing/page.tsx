import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function FifiPricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description: "For small businesses just beginning with AI marketing",
      features: [
        "Up to 10,000 customer profiles",
        "Basic audience segmentation",
        "AI-generated content suggestions",
        "Email campaign automation",
        "Standard analytics dashboard",
        "Email support",
        "2 user accounts",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$999",
      description: "For growing businesses with established marketing operations",
      features: [
        "Up to 50,000 customer profiles",
        "Advanced audience segmentation",
        "Full content generation capabilities",
        "Multi-channel campaign orchestration",
        "Advanced analytics with custom reports",
        "Priority email and chat support",
        "5 user accounts",
        "API access",
        "Custom integrations",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex marketing needs",
      features: [
        "Unlimited customer profiles",
        "Enterprise-grade segmentation",
        "Custom AI model training",
        "Full omnichannel capabilities",
        "Advanced predictive analytics",
        "Dedicated account manager",
        "Unlimited user accounts",
        "Full API access",
        "Custom integrations",
        "On-premise deployment option",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/products/fifi" className="text-primary hover:underline flex items-center gap-2">
            ← Back to Fifi
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Fifi Pricing Plans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your business needs and scale as you grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border ${plan.popular ? "border-primary" : "border-border"} rounded-lg overflow-hidden bg-secondary relative flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <Button
                  asChild
                  className={`w-full rounded-full ${plan.popular ? "" : "bg-secondary text-foreground border border-border hover:bg-secondary/80"}`}
                >
                  <Link href={plan.price === "Custom" ? "/contact" : "/contact"}>{plan.cta}</Link>
                </Button>
              </div>
              <div className="p-6 border-t border-border">
                <p className="font-semibold mb-4">Features include:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary p-8 rounded-lg border border-border">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Have questions about our pricing? Find answers below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is there a free trial available?</h3>
              <p className="text-muted-foreground">
                We offer a 14-day free trial of our Professional plan so you can experience the full power of Fifi
                before committing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens if I exceed my customer profile limit?</h3>
              <p className="text-muted-foreground">
                We'll notify you when you reach 80% of your limit. You can choose to upgrade to a higher plan or we can
                discuss custom options for your specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer discounts for annual billing?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 15% discount when you choose annual billing instead of monthly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What kind of support is included?</h3>
              <p className="text-muted-foreground">
                All plans include access to our knowledge base and community forum. Email support is included in all
                plans, while chat support and dedicated account managers are available in higher-tier plans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I get a custom plan for my specific needs?</h3>
              <p className="text-muted-foreground">
                Contact our sales team to discuss your requirements, and we'll create a custom plan tailored to your
                business.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect plan for your business and answer any questions you might
            have about Fifi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/products/fifi">Learn More About Fifi</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

