import { records } from '../types/types';

class Animations {
    static recordsAnimation: records[];
    static winnersId: number[];

    constructor() {
        Animations.recordsAnimation = [];
        Animations.winnersId = [];
    }
}

export default Animations;
