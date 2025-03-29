import Image from "next/image"
import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Envision%20Lab%20Logo%20White-8GRJu4YOsaPpRN73uDUZARiw44JZWI.svg"
        alt="Envision Lab"
        width={180}
        height={60}
        className="h-8 w-auto"
      />
    </Link>
  )
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Envision%20Lab%20Logo%20No%20Text.jpg-c839PSlJXkt9l51KIaLWrggNGjE7X5.jpeg"
        alt="Envision Lab"
        width={60}
        height={60}
        className="h-10 w-auto"
      />
    </Link>
  )
}

