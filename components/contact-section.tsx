"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle2, Send, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    await new Promise((r) => setTimeout(r, 1500))
    console.log("[Contact]", formData)
    setSubmitStatus("success")
    setIsSubmitting(false)
    setTimeout(() => setFormData({ name: "", email: "", message: "" }), 3000)
  }

  const contactInfos = [
    { icon: Mail, title: "Email Me", detail: "pastilaku121@gmail.com", href: "mailto:pastilaku121@gmail.com" },
    { icon: MapPin, title: "Visit Me", detail: "Semarang, Indonesia" },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Send className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="bg-card border border-border shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="h-12"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="h-12"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="resize-none"
                />

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-3 bg-primary/10 text-primary rounded border border-primary/20">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm">Message sent successfully!</span>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <>Send Message <ArrowRight className="ml-2 h-5 w-5" /></>}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfos.map((info) => (
              <Card key={info.title} className="bg-card border border-border shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-primary hover:underline">{info.detail}</a>
                    ) : (
                      <p className="text-muted-foreground">{info.detail}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}