export interface PullRequest {
  author: User;
  repository: Repository;
  comments: Comments;
  number: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  permalink: string;
}

export interface Repository {
  name: string;
  owner: User;
  url: string;
}

export interface User {
  login: string;
  avatarUrl?: string;
}

export interface Comments {
  totalCount: number;
}
