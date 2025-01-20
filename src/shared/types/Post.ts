import { User } from "./User";

export interface Reaction {
  likes: number;
  dislikes: number;
};

export interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Reaction
  views: number
  userId: number
}

export interface PostWithAuthor extends Post {
  author?: User | undefined;
}

