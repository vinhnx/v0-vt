import SubscriptionTiers from "../subscription-tiers"
import { ThemeProvider } from "@/components/theme-provider"

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SubscriptionTiers />
    </ThemeProvider>
  )
}
