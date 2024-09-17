import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Comment, CommentType } from './Comment'

export const CommentSection = ({ comments }: { comments: CommentType[] }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    setNewComment('');
  };

  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        <div className="mb-4">
          <Textarea
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleSubmitComment}>Submit Comment</Button>
        </div>
        <ScrollArea className="h-[400px]">
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

