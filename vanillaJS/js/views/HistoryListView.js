import KeywordListView from './KeywordListView.js';
import { delegate, formatRelativeDate, qs } from '../helpers.js';

export default class HistoryListView extends KeywordListView {
    constructor() {
        super(qs('#history-list-view'), new Template());
    }

    bindEvents() {
        delegate(this.element, "click", "button.btn-remove", (event) => {
            this.handleClickBtn(event);
        });

        super.bindEvents();
    }

    handleClickBtn(event) {
        const value = event.target.parentElement.dataset.keyword;
        this.emit('@remove', { value })
    }
}

class Template {
    getList(data = []) {
        return `
            <ul class="list">
                ${data.map(this._getItem).join("")}
            </ul>
        `
    }
    _getItem({id, keyword, date}) {
        return `
            <li data-keyword="${keyword}" data-id="${id}">
                ${keyword}
                <span class="date">${formatRelativeDate(date)}</span>
                <button class="btn-remove"></button>
            </li>
        `
    }

    getEmptyMessage() {
        return `
            <div class="empty-box">최근 검색어가 없습니다.</div>
        `
    }
}