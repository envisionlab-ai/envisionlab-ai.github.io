import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function EmedisCaseStudiesPage() {
  const caseStudies = [
    {
      title: "Metropolitan Medical Center",
      type: "Hospital Network",
      description:
        "How a large hospital network improved patient care and reduced documentation time by 60% with Emedis EMR.",
      results: [
        "60% reduction in documentation time",
        "35% improvement in clinical decision accuracy",
        "42% increase in patient satisfaction scores",
        "$2.4M annual savings in operational costs",
      ],
      image: "/placeholder.svg?height=300&width=600&text=Metropolitan+Medical+Center",
      link: "/products/emedis/case-studies/metropolitan-medical",
    },
    {
      title: "Westside Primary Care",
      type: "Primary Care Practice",
      description:
        "A 15-physician primary care practice transformed patient engagement and clinical workflows with Emedis.",
      results: [
        "2 hours saved per physician per day",
        "28% reduction in administrative staff needs",
        "45% improvement in preventive care compliance",
        "30% decrease in patient wait times",
      ],
      image: "/placeholder.svg?height=300&width=600&text=Westside+Primary+Care",
      link: "/products/emedis/case-studies/westside-primary",
    },
    {
      title: "Specialized Cardiology Group",
      type: "Specialty Practice",
      description: "How a cardiology group leveraged Emedis to improve diagnosis accuracy and patient outcomes.",
      results: [
        "22% improvement in early diagnosis of cardiac conditions",
        "40% reduction in unnecessary tests",
        "50% faster access to critical patient information",
        "35% increase in practice revenue",
      ],
      image: "/placeholder.svg?height=300&width=600&text=Specialized+Cardiology+Group",
      link: "/products/emedis/case-studies/cardiology-group",
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/products/emedis" className="text-primary hover:underline flex items-center gap-2">
            ← Back to Emedis
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Emedis Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how healthcare organizations are transforming patient care and operational efficiency with Emedis
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden bg-secondary">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/20 text-primary mb-4">
                    {study.type}
                  </span>
                  <h2 className="text-2xl font-bold mb-3">{study.title}</h2>
                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  <h3 className="text-lg font-semibold mb-3">Key Results:</h3>
                  <ul className="space-y-2 mb-6">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="rounded-full">
                    <Link href={study.link}>Read Full Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary p-8 rounded-lg border border-border text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join these successful healthcare organizations and discover how Emedis can improve patient care, streamline
            workflows, and enhance your practice's efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/products/emedis">Learn More About Emedis</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

