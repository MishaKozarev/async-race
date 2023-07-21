import './header.css';
import { paramType } from '../../types/types';

class HeaderView {
    constructor() {
        this.createHeader();
    }
    htmlTeg: paramType = {
        header: 'header',
        btn: 'button',
    };
    cssClasses: paramType = {
        header: 'header',
        btnGarage: 'btn-garage',
        btnWinner: 'btn-winner',
    };

    htmlText = {
        btnGarage: 'TO GARAGE',
        btnWinner: 'TO WINNER',
    };

    createHeader() {
        const header: HTMLElement | null = document.createElement(this.htmlTeg.header);
        header.classList.add(this.cssClasses.header);
        return header;
    }
    createHeaderBtnGarage() {
        const btnGarage: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnGarage.classList.add(this.cssClasses.btnGarage);
        btnGarage.textContent = this.htmlText.btnGarage;
        return btnGarage;
    }
    createHeaderBtnWinner() {
        const btnWinner: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnWinner.classList.add(this.cssClasses.btnWinner);
        btnWinner.textContent = this.htmlText.btnWinner;

        return btnWinner;
    }
    appendHeaderView() {
        const header: HTMLElement = this.createHeader();
        const btnGarage: HTMLElement | null = this.createHeaderBtnGarage();
        const btnWinner: HTMLElement | null = this.createHeaderBtnWinner();
        header.append(btnGarage, btnWinner);
        return header;
    }
}
export default HeaderView;
