import View from './View.js';
import { qs, qsAll, delegate } from '../helpers.js'

export const TabType = {
    KEYWORD: 'KEYWORD',
    HISTORY: 'HISTORY'
}

const TabLabel = {
    [TabType.KEYWORD]: '추천 검색어',
    [TabType.HISTORY]: '최근 검색어'
}

export default class TabView extends View {
    constructor() {
        super(qs('#tab-view'));
        this.template = new Template();
        this.bindEvents();
    }
    
    show(selectedTab) {
        this.element.innerHTML = this.template.getTabList();
        qsAll("li", this.element).forEach(li => {
            li.className = li.dataset.tab === selectedTab ? "active" : "";
        })
        
        super.show()
    }

    bindEvents() {
        delegate(this.element, "click", "li", (event) => {
            this.handleClick(event);
        })
    }
    
    handleClick(event) {
        // console.log('click', event.target)
        const value = event.target.dataset.tab;
        this.emit("@clickTab", { value })
    }
}

class Template {
    getTabList() {
        return `
        <ul class="tabs">
        ${Object.values(TabType)
            .map(type => ({type, label: TabLabel[type]}))
            .map(this._getTab)
            .join("")
        }
        </ul>
        `
    }
    
    _getTab({type, label}) {
        return `<li data-tab="${type}">${label}</li>`
    }
}