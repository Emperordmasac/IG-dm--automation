import {
  AutomationDuoToneBlue,
  ContactsDuoToneBlue,
  HomeDuoToneBlue,
  RocketDuoToneBlue,
  SettingsDuoToneWhite
} from "@/icons"

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings"
]

type PAGE_ICONProps = {
  [page in string]: React.ReactNode
}

export const PAGE_ICON: PAGE_ICONProps = {
  AUTOMATIONS: <AutomationDuoToneBlue />,
  CONTACTS: <ContactsDuoToneBlue />,
  INTEGRATIONS: <RocketDuoToneBlue />,
  SETTINGS: <SettingsDuoToneWhite />,
  HOME: <HomeDuoToneBlue />
}

export const PLANS = [
  {
    name: "BASIC Plan",
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
