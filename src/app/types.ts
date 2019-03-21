export interface PullRequest {
  author: User;
  repository: Repository;
  number: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  permalink: string;
}

export interface Repository {
  name: string;
  owner: User;
}

export interface User {
  login: string;
  avatarUrl?: string;
}
