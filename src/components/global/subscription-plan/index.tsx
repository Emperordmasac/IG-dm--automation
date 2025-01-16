// import { useQueryUser } from "@/hooks/user-queries"

type Props = {
  type: "BASIC" | "BUSINESS"
  children: React.ReactNode
}

export const SubscriptionPlan = ({ children, type }: Props) => {
  // WIP
  // const { data } = useQueryUser()
  // return data?.data?.subscription?.plan === type && children

  return children
}
