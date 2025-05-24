"use client"

import type React from "react"

import { useState } from "react"
import { Check, X, Star, Zap, Crown, Users, Shield, Headphones, BarChart3, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Feature {
  name: string
  basic: boolean | string
  pro: boolean | string
  enterprise: boolean | string
}

interface PricingTier {
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  icon: React.ReactNode
  popular?: boolean
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline" | "secondary"
}

const features: Feature[] = [
  { name: "Users", basic: "Up to 5", pro: "Up to 50", enterprise: "Unlimited" },
  { name: "Storage", basic: "10 GB", pro: "100 GB", enterprise: "1 TB" },
  { name: "Projects", basic: "3", pro: "25", enterprise: "Unlimited" },
  { name: "API Calls", basic: "1,000/month", pro: "10,000/month", enterprise: "Unlimited" },
  { name: "Email Support", basic: true, pro: true, enterprise: true },
  { name: "Priority Support", basic: false, pro: true, enterprise: true },
  { name: "Phone Support", basic: false, pro: false, enterprise: true },
  { name: "Advanced Analytics", basic: false, pro: true, enterprise: true },
  { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
  { name: "SLA Guarantee", basic: false, pro: false, enterprise: true },
]

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    description: "Perfect for individuals and small teams getting started",
    monthlyPrice: 9,
    annualPrice: 90,
    icon: <Users className="h-6 w-6" />,
    features: ["Up to 5 team members", "10 GB storage", "3 projects", "Basic analytics", "Email support"],
    buttonText: "Start Basic Plan",
    buttonVariant: "outline",
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses and professional teams",
    monthlyPrice: 29,
    annualPrice: 290,
    icon: <Zap className="h-6 w-6" />,
    popular: true,
    features: [
      "Up to 50 team members",
      "100 GB storage",
      "25 projects",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom workflows",
    ],
    buttonText: "Start Pro Plan",
    buttonVariant: "default",
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for large organizations",
    monthlyPrice: 99,
    annualPrice: 990,
    icon: <Crown className="h-6 w-6" />,
    features: [
      "Unlimited team members",
      "1 TB storage",
      "Unlimited projects",
      "Advanced analytics & reporting",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantee",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "secondary",
  },
]

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "We'll notify you when you're approaching your limits. You can either upgrade your plan or purchase additional resources as needed.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, annual billing provides approximately 17% savings compared to monthly billing across all plans.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
  },
]

export default function SubscriptionTiers() {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleSubscribe = (tierName: string) => {
    // This would typically integrate with your payment processor
    console.log(`Subscribing to ${tierName} plan`)
    // Example: redirect to payment page or open payment modal
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Choose Your Perfect Plan</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Scale your business with our flexible pricing options. Start free and upgrade as you grow.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center space-x-4">
        <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
          Monthly
        </span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            isAnnual ? "bg-primary" : "bg-muted"
          }`}
          role="switch"
          aria-checked={isAnnual}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isAnnual ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Annual</span>
        {isAnnual && (
          <Badge variant="secondary" className="ml-2">
            Save 17%
          </Badge>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} className={`relative ${tier.popular ? "border-primary shadow-lg scale-105" : ""}`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">{tier.icon}</div>
              </div>
              <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
              <CardDescription className="text-sm">{tier.description}</CardDescription>

              <div className="mt-4">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">${isAnnual ? tier.annualPrice : tier.monthlyPrice}</span>
                  <span className="text-muted-foreground ml-1">/{isAnnual ? "year" : "month"}</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-muted-foreground mt-1">
                    ${Math.round(tier.annualPrice / 12)}/month billed annually
                  </p>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button className="w-full" variant={tier.buttonVariant} onClick={() => handleSubscribe(tier.name)}>
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Compare All Features</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold">Features</th>
                <th className="text-center py-4 px-4 font-semibold">Basic</th>
                <th className="text-center py-4 px-4 font-semibold">Pro</th>
                <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="py-4 px-4 font-medium">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof feature.basic === "boolean" ? (
                      feature.basic ? (
                        <Check className="h-4 w-4 text-primary mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-sm">{feature.basic}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof feature.pro === "boolean" ? (
                      feature.pro ? (
                        <Check className="h-4 w-4 text-primary mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-sm">{feature.pro}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? (
                        <Check className="h-4 w-4 text-primary mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="text-sm">{feature.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8">
        <div className="text-center space-y-2">
          <Shield className="h-8 w-8 text-primary mx-auto" />
          <h3 className="font-semibold">Secure & Compliant</h3>
          <p className="text-sm text-muted-foreground">SOC 2 Type II certified</p>
        </div>
        <div className="text-center space-y-2">
          <Headphones className="h-8 w-8 text-primary mx-auto" />
          <h3 className="font-semibold">24/7 Support</h3>
          <p className="text-sm text-muted-foreground">Always here to help</p>
        </div>
        <div className="text-center space-y-2">
          <BarChart3 className="h-8 w-8 text-primary mx-auto" />
          <h3 className="font-semibold">99.9% Uptime</h3>
          <p className="text-sm text-muted-foreground">Reliable performance</p>
        </div>
        <div className="text-center space-y-2">
          <Globe className="h-8 w-8 text-primary mx-auto" />
          <h3 className="font-semibold">Global CDN</h3>
          <p className="text-sm text-muted-foreground">Fast worldwide access</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-bold">Ready to get started?</h2>
        <p className="text-muted-foreground">Join thousands of satisfied customers and start your free trial today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => handleSubscribe("Pro")}>
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  )
}
