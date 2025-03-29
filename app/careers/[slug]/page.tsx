import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata, ResolvingMetadata } from "next"

// Job positions data
const jobData = {
  "senior-ai-engineer": {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    summary: "Join our core engineering team to develop cutting-edge AI solutions for our enterprise clients.",
    aboutRole: `
      <p>
        As a Senior AI Engineer at Envision Lab, you'll be at the forefront of developing innovative AI solutions that transform how businesses operate. You'll work on challenging problems across various domains, collaborating with a talented team of engineers, data scientists, and product managers.
      </p>
      <p>
        You'll be responsible for designing, implementing, and optimizing AI models and systems that power our products and client solutions. This role offers the opportunity to work with cutting-edge technologies and make a significant impact on our clients' businesses.
      </p>
    `,
    responsibilities: [
      "Design and implement machine learning models and AI systems for production environments",
      "Collaborate with cross-functional teams to understand requirements and translate them into technical solutions",
      "Optimize models for performance, scalability, and accuracy",
      "Mentor junior engineers and contribute to engineering best practices",
      "Stay current with the latest AI research and technologies, evaluating their potential application to our products",
      "Contribute to technical documentation and knowledge sharing within the team",
      "Participate in code reviews and ensure high code quality standards",
    ],
    requirements: [
      "5+ years of experience in software engineering, with at least 3 years focused on AI/ML development",
      "Strong programming skills in Python and experience with ML frameworks such as TensorFlow, PyTorch, or JAX",
      "Experience deploying ML models to production environments",
      "Solid understanding of machine learning algorithms, neural networks, and deep learning techniques",
      "Experience with NLP, computer vision, or reinforcement learning (at least one area)",
      "Familiarity with cloud platforms (AWS, GCP, or Azure) and containerization technologies",
      "Bachelor's degree or higher in Computer Science, Engineering, or a related field",
    ],
    preferred: [
      "Experience with MLOps tools and practices",
      "Contributions to open-source projects or research publications",
      "Experience with distributed computing and big data technologies",
      "Knowledge of software design patterns and system architecture",
      "Experience with real-time inference systems",
    ],
  },
  "machine-learning-researcher": {
    title: "Machine Learning Researcher",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    summary: "Research and implement state-of-the-art machine learning algorithms to enhance our AI capabilities.",
    aboutRole: `
      <p>
        As a Machine Learning Researcher at Envision Lab, you'll be pushing the boundaries of what's possible with AI. You'll research, design, and prototype novel machine learning approaches that address complex business problems and enhance our product capabilities.
      </p>
      <p>
        This role combines theoretical research with practical implementation, requiring both deep technical knowledge and the ability to translate research into business value. You'll work closely with our engineering and product teams to bring innovative ideas from concept to production.
      </p>
    `,
    responsibilities: [
      "Research and develop novel machine learning algorithms and approaches",
      "Implement and evaluate prototypes to validate research ideas",
      "Stay current with the latest academic research and industry developments",
      "Collaborate with engineering teams to transition research into production systems",
      "Publish research findings in academic conferences and journals",
      "Contribute to patents and intellectual property development",
      "Mentor junior researchers and engineers",
    ],
    requirements: [
      "PhD or MS in Computer Science, Machine Learning, or a related field",
      "Strong publication record or equivalent industry research experience",
      "Deep expertise in machine learning, deep learning, and statistical modeling",
      "Excellent programming skills in Python and experience with ML frameworks",
      "Experience implementing and adapting state-of-the-art ML algorithms",
      "Strong mathematical foundation in linear algebra, calculus, and probability",
      "Ability to communicate complex technical concepts clearly",
    ],
    preferred: [
      "Specialization in NLP, computer vision, reinforcement learning, or generative models",
      "Experience with large language models and transformer architectures",
      "Contributions to open-source ML libraries or frameworks",
      "Industry experience applying research to real-world problems",
      "Experience with distributed computing for large-scale ML",
    ],
  },
  "ai-solutions-consultant": {
    title: "AI Solutions Consultant",
    department: "Consulting",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    summary: "Work directly with clients to understand their needs and design AI solutions that drive business value.",
    aboutRole: `
      <p>
        As an AI Solutions Consultant at Envision Lab, you'll be the bridge between our clients' business challenges and our technical capabilities. You'll work closely with clients to understand their needs, identify opportunities for AI implementation, and design solutions that deliver measurable business value.
      </p>
      <p>
        This role requires a unique blend of technical knowledge, business acumen, and communication skills. You'll collaborate with cross-functional teams including engineers, data scientists, and product managers to ensure successful solution delivery and client satisfaction.
      </p>
    `,
    responsibilities: [
      "Engage with clients to understand their business challenges and objectives",
      "Identify opportunities where AI can create value and solve business problems",
      "Develop solution proposals and implementation roadmaps",
      "Translate business requirements into technical specifications",
      "Work with engineering teams to ensure successful solution delivery",
      "Present complex technical concepts to non-technical stakeholders",
      "Build and maintain strong client relationships",
    ],
    requirements: [
      "5+ years of experience in technology consulting, solution architecture, or similar roles",
      "Strong understanding of AI/ML technologies and their business applications",
      "Experience designing and implementing AI solutions in enterprise environments",
      "Excellent communication and presentation skills",
      "Ability to translate between business and technical languages",
      "Problem-solving mindset and analytical thinking",
      "Bachelor's degree in Computer Science, Engineering, Business, or a related field",
    ],
    preferred: [
      "MBA or advanced degree in a technical field",
      "Experience in specific industry verticals (finance, healthcare, retail, etc.)",
      "Background in software development or data science",
      "Project management experience",
      "Experience with digital transformation initiatives",
    ],
  },
  "product-manager": {
    title: "Product Manager - AI Products",
    department: "Product",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    summary: "Lead the development and go-to-market strategy for our AI product suite.",
    aboutRole: `
      <p>
        As a Product Manager for AI Products at Envision Lab, you'll be responsible for defining the vision, strategy, and roadmap for our AI product suite. You'll work at the intersection of technology, business, and user experience to create products that solve real customer problems and drive business growth.
      </p>
      <p>
        This role requires a deep understanding of AI technologies, market trends, and customer needs. You'll collaborate with engineering, design, marketing, and sales teams to bring products from concept to market and ensure their ongoing success.
      </p>
    `,
    responsibilities: [
      "Define product vision, strategy, and roadmap based on market research and customer insights",
      "Gather and prioritize product requirements from stakeholders and customers",
      "Work closely with engineering teams throughout the product development lifecycle",
      "Develop go-to-market strategies in collaboration with marketing and sales",
      "Define success metrics and monitor product performance",
      "Conduct competitive analysis and stay current with market trends",
      "Create product specifications, user stories, and acceptance criteria",
    ],
    requirements: [
      "5+ years of product management experience, with at least 2 years focused on AI/ML products",
      "Strong understanding of AI technologies and their business applications",
      "Experience bringing products from concept to market",
      "Excellent communication and stakeholder management skills",
      "Data-driven approach to decision making",
      "Strong analytical and problem-solving abilities",
      "Bachelor's degree in Computer Science, Business, or a related field",
    ],
    preferred: [
      "MBA or advanced degree in a technical field",
      "Experience with agile development methodologies",
      "Background in software development or data science",
      "Experience with B2B SaaS products",
      "Product management certification (e.g., Pragmatic Marketing, Product School)",
    ],
  },
  "ux-ui-designer": {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    summary: "Create intuitive and engaging user experiences for our AI-powered applications.",
    aboutRole: `
      <p>
        As a UX/UI Designer at Envision Lab, you'll be responsible for creating intuitive, engaging, and accessible user experiences for our AI-powered applications. You'll design interfaces that make complex AI capabilities easy to understand and use, enhancing the value our products deliver to customers.
      </p>
      <p>
        This role requires a blend of creative thinking, user empathy, and technical understanding. You'll collaborate closely with product managers, engineers, and researchers to ensure our products are not only powerful but also delightful to use.
      </p>
    `,
    responsibilities: [
      "Design user interfaces for web and mobile applications that make AI accessible and valuable",
      "Create user flows, wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing to inform design decisions",
      "Develop and maintain design systems and component libraries",
      "Collaborate with engineers to ensure accurate implementation of designs",
      "Stay current with UX/UI trends and best practices",
      "Advocate for the user throughout the product development process",
    ],
    requirements: [
      "3+ years of experience in UX/UI design for digital products",
      "Strong portfolio demonstrating your design process and outcomes",
      "Proficiency with design and prototyping tools (Figma, Sketch, Adobe XD, etc.)",
      "Experience designing data-heavy interfaces and visualizations",
      "Understanding of accessibility standards and inclusive design principles",
      "Excellent visual design skills with attention to typography, color, and layout",
      "Bachelor's degree in Design, HCI, or a related field (or equivalent experience)",
    ],
    preferred: [
      "Experience designing for AI or data-driven products",
      "Knowledge of front-end development (HTML, CSS, JavaScript)",
      "Experience with motion design and micro-interactions",
      "Background in user research methodologies",
      "Experience with design systems and component libraries",
    ],
  },
  "marketing-specialist": {
    title: "Marketing Specialist - AI Solutions",
    department: "Marketing",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    summary: "Develop and execute marketing strategies to promote our AI solutions and thought leadership.",
    aboutRole: `
      <p>
        As a Marketing Specialist focused on AI Solutions at Envision Lab, you'll be responsible for developing and executing marketing strategies that promote our AI products and services. You'll create compelling content that demonstrates our expertise, generates leads, and builds our brand in the AI space.
      </p>
      <p>
        This role requires a unique blend of marketing skills and technical understanding. You'll work closely with product, sales, and technical teams to translate complex AI concepts into clear, compelling messages that resonate with our target audience.
      </p>
    `,
    responsibilities: [
      "Develop and execute marketing campaigns for our AI solutions",
      "Create high-quality content including blog posts, case studies, whitepapers, and social media content",
      "Collaborate with product teams to understand and effectively communicate product features and benefits",
      "Manage digital marketing channels including email, social media, and content platforms",
      "Analyze campaign performance and optimize based on data insights",
      "Support event planning and execution, both virtual and in-person",
      "Stay current with AI industry trends and competitive landscape",
    ],
    requirements: [
      "3+ years of B2B marketing experience, preferably in technology or SaaS",
      "Strong content creation skills with excellent writing and editing abilities",
      "Experience with digital marketing channels and tools",
      "Data-driven approach to marketing with analytics experience",
      "Ability to understand and communicate technical concepts to different audiences",
      "Project management skills with attention to detail",
      "Bachelor's degree in Marketing, Communications, or a related field",
    ],
    preferred: [
      "Experience marketing AI, ML, or other advanced technologies",
      "Knowledge of marketing automation platforms (HubSpot, Marketo, etc.)",
      "Experience with SEO and SEM strategies",
      "Background in technology or technical education",
      "Experience with ABM (Account-Based Marketing) strategies",
    ],
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug
  const job = jobData[slug]

  if (!job) {
    return {
      title: "Job Not Found",
    }
  }

  return {
    title: `${job.title} | Careers at Envision Lab`,
    description: job.summary,
    alternates: {
      canonical: `https://envisionlab.com/careers/${slug}`,
    },
    openGraph: {
      title: `${job.title} | Careers at Envision Lab`,
      description: job.summary,
      url: `https://envisionlab.com/careers/${slug}`,
    },
  }
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = jobData[params.slug]

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/careers" className="text-primary hover:underline flex items-center gap-2">
            ← Back to Careers
          </Link>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="bg-primary/10">
              {job.department}
            </Badge>
            <Badge variant="outline" className="bg-primary/10">
              {job.location}
            </Badge>
            <Badge variant="outline" className="bg-primary/10">
              {job.type}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold mb-4 gradient-text">{job.title}</h1>
          <p className="text-xl text-muted-foreground">{job.summary}</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <h2>About the Role</h2>
          <div dangerouslySetInnerHTML={{ __html: job.aboutRole }} />

          <h2>Key Responsibilities</h2>
          <ul>
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>Requirements</h2>
          <ul>
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>Preferred Qualifications</h2>
          <ul>
            {job.preferred.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary p-8 rounded-lg mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-4">Our Hiring Process</h2>
          <p className="text-muted-foreground mb-6">Our hiring process typically includes the following steps:</p>
          <ol className="space-y-2 text-muted-foreground">
            <li>1. Application review</li>
            <li>2. Initial screening call with a recruiter</li>
            <li>3. Technical assessment or case study</li>
            <li>4. Interviews with team members and potential collaborators</li>
            <li>5. Final interview with leadership</li>
            <li>6. Offer and onboarding</li>
          </ol>
          <p className="text-muted-foreground mt-6">
            We strive to make our hiring process transparent, fair, and efficient. We value your time and will keep you
            informed at every stage.
          </p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Apply for This Position</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

