import { User } from "./User"

export interface Comment {
  id: number
  user: User
  body: string
  likes: number
}

export interface Comments {
  [postId: number]: Comment[]
}

export interface NewComment {
    body: string, 
    postId?: number | null,
    userId: number
}
