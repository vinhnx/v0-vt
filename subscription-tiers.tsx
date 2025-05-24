"use client"

import type React from "react"

import { useState } from "react"
import {
  X,
  Star,
  Zap,
  Crown,
  Users,
  Shield,
  Headphones,
  BarChart3,
  Globe,
  Moon,
  Sun,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTheme } from "next-themes"

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
  { name: "Team Members", basic: "Up to 5", pro: "Up to 50", enterprise: "Unlimited" },
  { name: "Storage Space", basic: "10 GB", pro: "100 GB", enterprise: "1 TB" },
  { name: "Active Projects", basic: "3", pro: "25", enterprise: "Unlimited" },
  { name: "API Requests", basic: "1K/month", pro: "10K/month", enterprise: "Unlimited" },
  { name: "Email Support", basic: true, pro: true, enterprise: true },
  { name: "Priority Support", basic: false, pro: true, enterprise: true },
  { name: "Phone Support", basic: false, pro: false, enterprise: true },
  { name: "Advanced Analytics", basic: false, pro: true, enterprise: true },
  { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
  { name: "SLA Guarantee", basic: false, pro: false, enterprise: true },
]

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams getting started",
    monthlyPrice: 9,
    annualPrice: 90,
    icon: <Users className="h-5 w-5" />,
    features: ["Up to 5 team members", "10 GB storage", "3 active projects", "Basic analytics", "Email support"],
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses and professional teams",
    monthlyPrice: 29,
    annualPrice: 290,
    icon: <Zap className="h-5 w-5" />,
    popular: true,
    features: [
      "Up to 50 team members",
      "100 GB storage",
      "25 active projects",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom workflows",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default",
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for large organizations",
    monthlyPrice: 99,
    annualPrice: 990,
    icon: <Crown className="h-5 w-5" />,
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
  const { theme, setTheme } = useTheme()

  const handleSubscribe = (tierName: string) => {
    console.log(`Subscribing to ${tierName} plan`)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white dark:text-gray-900" />
            </div>
            <span className="font-semibold text-lg">Pricing</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="h-9 w-9 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            Simple, transparent pricing
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Choose the right plan
            <br />
            <span className="text-gray-600 dark:text-gray-400">for your team</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                !isAnnual
                  ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${
                isAnnual
                  ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Annual
              {isAnnual && (
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-0.5 border-0">
                  Save 17%
                </Badge>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`relative overflow-hidden transition-all duration-200 hover:shadow-lg ${
                tier.popular
                  ? "border-gray-900 dark:border-white shadow-lg ring-1 ring-gray-900 dark:ring-white"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"></div>
              )}

              <CardHeader className="pb-6">
                {tier.popular && (
                  <Badge className="w-fit bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-0 mb-4">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                    {tier.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{tier.name}</CardTitle>
                  </div>
                </div>

                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {tier.description}
                </CardDescription>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">/{isAnnual ? "year" : "month"}</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      ${Math.round(tier.annualPrice / 12)}/month billed annually
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pb-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  className={`w-full h-10 font-medium transition-all duration-200 ${
                    tier.popular
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                      : tier.buttonVariant === "outline"
                        ? "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  variant={tier.popular ? "default" : tier.buttonVariant}
                  onClick={() => handleSubscribe(tier.name)}
                >
                  {tier.buttonText}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Compare features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              See what's included in each plan to find the right fit for your team.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white text-sm">
                      Features
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white text-sm">
                      Starter
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white text-sm">Pro</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white text-sm">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white text-sm">{feature.name}</td>
                      {[feature.basic, feature.pro, feature.enterprise].map((value, cellIndex) => (
                        <td key={cellIndex} className="py-4 px-6 text-center">
                          {typeof value === "boolean" ? (
                            value ? (
                              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                              {value}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Enterprise Security", description: "SOC 2 Type II compliant" },
            { icon: Headphones, title: "Expert Support", description: "24/7 technical assistance" },
            { icon: BarChart3, title: "99.9% Uptime", description: "Guaranteed reliability" },
            { icon: Globe, title: "Global Infrastructure", description: "Worldwide edge network" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center space-y-3 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently asked questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg px-6 bg-white dark:bg-gray-950 hover:shadow-sm transition-all duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:no-underline py-6 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 pb-6 leading-relaxed text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to get started?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers and teams building with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 h-12 px-8 font-medium"
              onClick={() => handleSubscribe("Pro")}
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 h-12 px-8 font-medium"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
