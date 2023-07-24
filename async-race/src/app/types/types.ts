export type paramType = {
    [key: string]: string;
};

export type Callback<T> = (date: T) => void;

export type cars = {
    name: string;
    color: string;
    id: number;
};

export type Paths = {
    garage: string;
    engine: string;
    winners: string;
};
