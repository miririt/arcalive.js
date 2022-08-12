declare type ArticleReadOption = {
    noCache?: boolean;
    withComments?: boolean;
};
declare type ArticlePostOption = {
    anonymous?: boolean;
    nickname?: string;
    password?: string;
    category?: string;
    title?: string;
    content?: string;
};
export type { ArticleReadOption, ArticlePostOption };
