import './footer.css';
import { paramType } from '../../types/types';

class FooterView {
    constructor() {
        this.createFooter();
    }
    htmlTeg: paramType = {
        footer: 'footer',
        btn: 'button',
    };
    cssClasses: paramType = {
        footer: 'footer',
        btnPrev: 'btn-prev',
        btnNext: 'btn-next',
    };

    htmlText = {
        btnNext: 'PREV',
        btnPrev: 'NEXT',
    };
    createFooter() {
        const footer: HTMLElement | null = document.createElement(this.htmlTeg.footer);
        footer.classList.add(this.cssClasses.footer);
        return footer;
    }

    createBtnPrev() {
        const btnPrev: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnPrev.classList.add(this.cssClasses.btnPrev);
        btnPrev.textContent = this.htmlText.btnPrev;
        return btnPrev;
    }
    createBtnNext() {
        const btnNext: HTMLElement | null = document.createElement(this.htmlTeg.btn);
        btnNext.classList.add(this.cssClasses.btnNext);
        btnNext.textContent = this.htmlText.btnNext;

        return btnNext;
    }
    appendFooterView() {
        const header: HTMLElement = this.createFooter();
        const btnPrev: HTMLElement | null = this.createBtnPrev();
        const btnNext: HTMLElement | null = this.createBtnNext();
        header.append(btnPrev, btnNext);
        return header;
    }
}
export default FooterView;
