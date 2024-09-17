// SearchBar.tsx
import { Search } from 'lucide-react'
import { Input } from './ui/input.js'

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
  <div className="mb-6">
    <Search className="h-4 w-4 text-muted-foreground" />
    <Input
      type="text"
      placeholder="Search apps..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full"
    />
  </div>
)

