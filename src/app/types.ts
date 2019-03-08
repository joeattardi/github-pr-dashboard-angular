export interface PullRequest {
  owner: string;
  repository: string;
  number: number;
  title: string;
  created: Date;
  updated: Date;
}
