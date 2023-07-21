import './garage.css';
import { paramType } from '../../../types/types';
import DivSettingView from './setting/setting-view';
import Track from './track/track-view';
import DivCreateView from './setting/create/create-view';

class SectionGarageView {
    divSettingView: DivSettingView;
    divCreateView: DivCreateView;
    track: Track;
    constructor() {
        this.divSettingView = new DivSettingView();
        this.divCreateView = new DivCreateView();
        this.track = new Track();
        this.createSectionGarage();
        this.createWrapperTrack();
    }
    htmlTeg: paramType = {
        section: 'section',
        div: 'div',
    };
    cssClasses: paramType = {
        sectionGarage: 'garage',
        wrapperTrack: 'wrapper-track',
    };

    createSectionGarage() {
        const sectionGarage: HTMLElement | null = document.createElement(this.htmlTeg.section);
        sectionGarage.classList.add(this.cssClasses.sectionGarage);
        return sectionGarage;
    }

    createWrapperTrack() {
        const wrapperTrack: HTMLElement | null = document.createElement(this.htmlTeg.div);
        wrapperTrack.classList.add(this.cssClasses.wrapperTrack);
        return wrapperTrack;
    }

    appendSectionGarageView() {
        const sectionGarage: HTMLElement = this.createSectionGarage();
        const wrapperTrack: HTMLElement = this.createWrapperTrack();
        const divSetting: HTMLElement = this.divSettingView.appendDivSettingView();
        const track: HTMLElement = this.track.appendDivTrack();
        const btnCreate: HTMLElement = this.divCreateView.createBtnCreate();
        console.log(btnCreate);

        wrapperTrack.append(track);
        btnCreate?.addEventListener('click', () => {
            wrapperTrack.append(track);
            return wrapperTrack;
        });
        sectionGarage.append(divSetting, wrapperTrack);
        return sectionGarage;
    }
}
export default SectionGarageView;
