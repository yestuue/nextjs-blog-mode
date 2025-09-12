export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  author: Author;
  publishedDate: string;
  locale: string;
}

export interface Author {
  name: string;
  bio: string;
  avatarUrl: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}