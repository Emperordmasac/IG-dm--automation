import { CreditCardIcon, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useSubscription } from "@/hooks/use-subscription"

type Props = {}

const PaymentButton = (props: Props) => {
  const { onSubscribe, isProcessing } = useSubscription()
  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className="bg-gradient-to-brtext-white rounded-full from-[#6d60a3] via-[#9434E6] text-white font-bold to-[#CC3BD4]"
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </Button>
  )
}

export default PaymentButton
