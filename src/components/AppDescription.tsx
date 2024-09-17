import { Card } from "@/components/ui/card"

interface AppDescriptionProps {
  description: string
}

export const AppDescription: React.FC<AppDescriptionProps> = ({ description }) => (
  <Card className="mb-8 p-6">
    <h3 className="text-xl font-semibold mb-4">Description</h3>
    <p className="text-lg leading-relaxed">{description}</p>
  </Card>
)
