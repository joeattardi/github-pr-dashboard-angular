export interface PullRequest {
  author: User;
  repository: Repository;
  comments: Comments;
  number: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  permalink: string;
  baseRefName: string;
  participants: UserList[];
}

export interface UserList {
  nodes: User[];
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
