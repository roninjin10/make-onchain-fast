import { Card, CardContent, CardHeader } from "@/components/ui/card"

export interface CodeEditorProps {
  code: string;
  onChange: (newCode: string) => void;
}

export const CodeEditor = ({ code, onChange }: CodeEditorProps) => (
  <Card className="bg-gray-900 shadow-lg border border-gray-800 overflow-hidden">
    <CardHeader className="bg-gray-800 border-b border-gray-700 p-2">
      <div className="flex space-x-2">
        {['red', 'yellow', 'green'].map(color => (
          <div key={color} className={`w-3 h-3 rounded-full bg-${color}-500`}></div>
        ))}
      </div>
    </CardHeader>
    <CardContent className="p-4">
      <textarea
        className="w-full h-64 text-sm text-gray-300 bg-transparent resize-none focus:outline-none font-mono"
        value={code}
        onChange={(e) => onChange(e.target.value)}
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(69, 78, 89, 0.2) 50%)',
          backgroundSize: '100% 3rem',
          backgroundPosition: '0 -2px',
          lineHeight: '1.5rem'
        }}
      />
    </CardContent>
  </Card>
);

