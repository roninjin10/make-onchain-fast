import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, MessageSquare, ChevronDown, ChevronUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export type CommentType = {
  author: { name: string; avatar: string };
  content: string;
  date: string;
  upvotes: number;
  downvotes: number;
  replies?: CommentType[];
};

export const Comment = ({ comment, level = 0 }: { comment: CommentType; level?: number }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const handleReply = () => {
    console.log('Reply submitted:', replyContent);
    setIsReplying(false);
    setReplyContent('');
  };

  return (
    <div className={`mt-4 ${level > 0 ? 'ml-6 border-l pl-4' : ''}`}>
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
          <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <h4 className="font-semibold">{comment.author.name}</h4>
            <span className="ml-2 text-sm text-muted-foreground">{comment.date}</span>
          </div>
          <p className="mt-1">{comment.content}</p>
          <div className="mt-2 flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <ThumbsUp className="mr-1 h-4 w-4" />
              {comment.upvotes}
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <ThumbsDown className="mr-1 h-4 w-4" />
              {comment.downvotes}
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setIsReplying(!isReplying)}>
              <MessageSquare className="mr-1 h-4 w-4" />
              Reply
            </Button>
            {comment.replies && comment.replies.length > 0 && (
              <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                {isCollapsed ? 'Show replies' : 'Hide replies'}
              </Button>
            )}
          </div>
          {isReplying && (
            <div className="mt-4">
              <Textarea
                placeholder="Write your reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="mb-2"
              />
              <Button size="sm" onClick={handleReply}>Submit Reply</Button>
            </div>
          )}
        </div>
      </div>
      {!isCollapsed && comment.replies && (
        <div className="mt-4">
          {comment.replies.map((reply, index) => (
            <Comment key={index} comment={reply} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
