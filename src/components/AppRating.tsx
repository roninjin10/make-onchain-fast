import { Star } from "lucide-react"

interface AppRatingProps {
  rating: number
}

export const AppRating: React.FC<AppRatingProps> = ({ rating }) => (
  <div className="flex items-center mb-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-5 h-5 ${star <= Math.round(rating)
          ? 'text-yellow-400 fill-current'
          : 'text-gray-300'
          }`}
      />
    ))}
    <span className="ml-2 text-lg font-semibold">{rating.toFixed(1)}</span>
  </div>
)

