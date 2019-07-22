export enum BookFormat {
    hard = 'Hardcover',
    paper = 'Paperback',
    ebook = 'E-Book'
}

export interface Book {
    id: string;
    author: string;
    title: string;
    format: BookFormat;
    BookFormat: BookFormat;
}
