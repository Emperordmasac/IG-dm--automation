import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const plans = [
    {
      name: "Basic Plan",
      description: "Perfect for getting started",
      price: "$19",
      features: [
        "Automated DM Responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging"
      ],
      cta: "Get Started"
    },
    {
      name: "Business Plan",
      description: "To cater for all your business needs",
      price: "$99",
      features: [
        "All Basic Feature",
        "AI-powered Response Generation",
        "Advanced Analytics Tools",
        "Priority Support Acess",
        "Custom Branding Options"
      ],
      cta: "Upgrade Now"
    }
  ]
  return (
    <main>
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="container px-4 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-white text-blue-700 flex items-center justify-center font-bold">
                  IG
                </div>
                <span className="text-xl font-semibold text-[#fff]">Auto</span>
              </div>
              <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#about">About</Link>
              </nav>
              <Button className="bg-white hover:bg-white font-bold text-blue-700 hover:text-blue-400/">
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Instagram Engagement Effortlessly
              </h1>

              <p className="mt-6 text-lg text-blue-200">
                Unlock the power of automated conversations and turn every
                interaction into an opportunity. With IGAuto, your audience is
                always engaged, ensuring no lead goes unnoticed.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 bg-transparent border-[2px] hover:bg-blue-900/50 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-40 md:h-80 w-full  mt-10">
              <Image
                src="/Ig-creators.png"
                alt="Community member"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="container w-full py-12 md:py-24 lg:py-32 bg-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pricing Plans
            </h2>
            <p className="max-w-[900px] text-muted-foreground">
              Choose the perfect plan for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
