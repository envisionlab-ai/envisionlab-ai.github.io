import Image from "next/image"

export default function TrustedBrands() {
  const brands = [
    { name: "Company 1", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Company 2", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Company 3", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Company 4", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Company 5", logo: "/placeholder.svg?height=80&width=160" },
    { name: "Company 6", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading companies across industries trust Envision Lab to deliver innovative AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

