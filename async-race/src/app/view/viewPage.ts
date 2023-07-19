import FooterView from './footer/footer-view';
import MainView from './main/main-view';
import HeaderView from './header/header-view';

class PageView {
    footerView: FooterView;
    mainView: MainView;
    headerView: HeaderView;
    constructor() {
        this.footerView = new FooterView();
        this.mainView = new MainView();
        this.headerView = new HeaderView();
    }

    appendViewPage() {
        const body = document.body;
        const headerViewHtml: HTMLElement | null = this.headerView.appendHeaderView();
        const mainViewHtml: HTMLElement | null = this.mainView.appendMainView();
        const footerViewHtml: HTMLElement | null = this.footerView.createFooter();
        if (headerViewHtml && mainViewHtml && footerViewHtml)
            body?.append(headerViewHtml, mainViewHtml, footerViewHtml);
    }
}

export default PageView;
