export type paramType = {
    [key: string]: string;
};

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

export type engine = {
    velocity: number;
    distance: number;
};

export type records = {
    id: number;
    time: number;
    animation: Animation;
    wins?: number;
};

export type winItem = {
    id: number;
    wins: number;
    time: number;
};
