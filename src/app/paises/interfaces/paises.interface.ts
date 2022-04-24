export interface Country {
    name: Name;
    cca2: string;
    borders: string[];
}

export interface Name {
    common: string;
    official: string;
}