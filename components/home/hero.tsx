import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Leading Generative AI Implementor for Businesses
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transform your business with cutting-edge AI solutions tailored to your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-900"
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="AI Technology Visualization"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

