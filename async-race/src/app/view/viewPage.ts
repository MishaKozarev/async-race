import FooterView from './footer/footer-view';
import MainView from './main/main-view';
import HeaderView from './header/header-view';
// import svgSprite from './main/section-garage/track/svgSprite/svgSprite-view';

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
        const footerViewHtml: HTMLElement | null = this.footerView.appendFooterView();
        if (headerViewHtml && mainViewHtml && footerViewHtml)
            body?.append(headerViewHtml, mainViewHtml, footerViewHtml);
        // body.insertAdjacentHTML('beforeend', `${svgSprite}`);
    }
}

export default PageView;
