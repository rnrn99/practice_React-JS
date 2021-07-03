import KeywordListView from './KeywordListView.js';
import { formatRelativeDate, qs } from '../helpers.js';

export default class HistoryListView extends KeywordListView {
    constructor() {
        super(qs('#history-list-view'), new Template());
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