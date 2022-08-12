type BoardReadOption = {
  withNotices?: boolean;
  category?: string;
};

type BoardQueryOption = BoardReadOption & {
  queryTarget?:
    | "all"
    | "title_content"
    | "title"
    | "content"
    | "nickname"
    | "comment";

  queryString?: string;
};

export type { BoardReadOption, BoardQueryOption };
