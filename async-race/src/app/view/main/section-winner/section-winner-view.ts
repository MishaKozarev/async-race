import './winner.css';
import { paramType } from '../../../types/types';
import TableView from './table/table-view';

class SectionWinnerView {
    tableView: TableView;
    constructor() {
        this.tableView = new TableView();
        this.createSectionWinner();
    }
    htmlTeg: paramType = {
        section: 'section',
        h2: 'h2',
        h4: 'h4',
    };

    cssClasses: paramType = {
        sectionGarage: 'winner',
        title: 'title',
        subtitle: 'subtitle',
    };

    htmlText: paramType = {
        title: 'Winner( )',
        subtitle: 'Page #',
    };

    createSectionWinner() {
        const sectionGarage: HTMLElement | null = document.createElement(this.htmlTeg.section);
        sectionGarage.classList.add(this.cssClasses.sectionGarage);
        return sectionGarage;
    }

    createTitle() {
        const title: HTMLElement | null = document.createElement(this.htmlTeg.h2);
        title.classList.add(this.cssClasses.title);
        title.textContent = this.htmlText.title;
        return title;
    }
    createSubtitle() {
        const subtitle: HTMLElement | null = document.createElement(this.htmlTeg.h4);
        subtitle.classList.add(this.cssClasses.subtitle);
        subtitle.textContent = this.htmlText.subtitle;
        return subtitle;
    }

    appendSectionWinnerView() {
        const sectionWinner: HTMLElement = this.createSectionWinner();
        const table: HTMLElement | null = this.tableView.appendTableView();
        const title: HTMLElement = this.createTitle();
        const subtitle: HTMLElement = this.createSubtitle();
        sectionWinner.append(title, subtitle, table);
        return sectionWinner;
    }
}
export default SectionWinnerView;
