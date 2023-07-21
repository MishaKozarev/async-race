import SectionGarageView from '../view/main/section-garage/section-garage-view';
import Track from '../view/main/section-garage/track/track-view';

class AddTrack {
    wrapperTrack: SectionGarageView;
    track: Track;
    constructor() {
        this.wrapperTrack = new SectionGarageView();
        this.track = new Track();
        this.addTrack();
    }
    addTrack() {
        const btnCreate: HTMLElement | null = document.querySelector('.btn-create');
        const car: HTMLElement | null = document.querySelector('.car');
        const wrapperTrack: HTMLElement = this.wrapperTrack.createWrapperTrack();
        // const track: HTMLElement = this.track.appendDivTrack();
        // wrapperTrack.append(track);
        btnCreate?.addEventListener('click', () => {
            const createColor: HTMLInputElement | null = document.querySelector('.create__color');
            const color: string | undefined = createColor?.value;
            console.log(color);
            if (car) car.style.fill = `${color}`;
        });
        return wrapperTrack;
    }
}
export default AddTrack;
