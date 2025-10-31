import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Post } from "@/data/mockData";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth">
      {/* Author Info */}
      <div className="flex items-start gap-3 mb-4">
        <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold">
          {post.author.split(" ").map(n => n[0]).join("")}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{post.author}</h4>
          <p className="text-sm text-muted-foreground">{post.authorRole} • {post.date}</p>
        </div>
      </div>

      {/* Post Content */}
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-muted-foreground mb-4">{post.content}</p>

      {/* Actions */}
      <div className="flex items-center gap-6 pt-4 border-t">
        <Button variant="ghost" size="sm" className="gap-2">
          <Heart className="h-4 w-4" />
          <span>{post.likes}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" />
          <span>{post.comments}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
