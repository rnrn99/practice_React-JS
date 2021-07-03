import { TabType } from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView, keywordListView, historyListView }) {
    console.log(tag, 'controller')
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;
    this.keywordListView = keywordListView;
    this.historyListView = historyListView;

    this.subscribeViewEvents();
    this.render();
  }

  // 각 view에서 발생하는 이벤트 확인(수신)
  subscribeViewEvents() {
    // searchFormView에서 @submit 이벤트(커스텀이벤트) 발생 시(=> 검색어 입력 후 엔터 누름) search함수 호출
    this.searchFormView.on('@submit', (event) => this.search(event.detail.value))
                       .on('@reset', () => this.reset())
    
    this.tabView.on('@clickTab', (event) => this.clickTab(event.detail.value));
    this.keywordListView.on('@click', (event) => this.search(event.detail.value));
    this.historyListView.on('@click', (event) => this.search(event.detail.value))
  }

  search(keyword) {
    console.log(tag, keyword);
    this.store.search(keyword);
    this.render();
  }

  reset() {
    console.log(tag, 'reset');
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  clickTab(tab) {
    // console.log(tag, tab, 'click');
    this.store.selectedTab = tab;
    this.render();
  }

  render() {
    // 검색어 입력시
    if(this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }

    // 기본 화면(초기화면)
    this.tabView.show(this.store.selectedTab);
    this.searchResultView.hide();

    if(this.store.selectedTab === TabType.KEYWORD) {
      this.keywordListView.show(this.store.getKeywordList());
      this.historyListView.hide();
    } else if (this.store.selectedTab === TabType.HISTORY) {
      this.keywordListView.hide();
      this.historyListView.show(this.store.getHistoryList());
    } else {
      throw console.log("Failed to render KeywordListView");
    }
  }

  renderSearchResult() {
    this.tabView.hide();
    this.keywordListView.hide();
    this.historyListView.hide();
    this.searchResultView.show(this.store.searchResult);
    this.searchFormView.show(this.store.searchKeyword);
  }
}
