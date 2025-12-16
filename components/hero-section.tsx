import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-24 pb-16">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full grid gap-12 lg:grid-cols-2 items-center">
        
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group w-72 sm:w-80 lg:w-[28rem] h-72 sm:h-80 lg:h-[28rem] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-transparent transition-transform duration-500 hover:scale-105">
              <Image
                src="/professional-programmer.png"
                alt="Ega Destaviano - Professional Programmer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Ega <span className="text-primary">Destaviano</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Full Stack Developer & UI/UX Designer passionate about creating innovative digital experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button size="lg" asChild className="text-base h-12 px-8">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base h-12 px-8 bg-transparent">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex gap-3 pt-4 justify-center lg:justify-start">
              {[
                { href: "https://github.com/egadestaviano", icon: <Github className="h-5 w-5" />, label: "GitHub" },
                { href: "mailto:pastilaku121@gmail.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-11 w-11 inline-flex items-center justify-center rounded-lg border border-border bg-card hover:bg-secondary hover:border-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
          
        </div>

    </section>
  );
}
