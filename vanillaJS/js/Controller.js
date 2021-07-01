const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView }) {
    console.log(tag, 'controller')
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;

    this.subscribeViewEvents();
    this.render();
  }

  // 각 view에서 발생하는 이벤트 확인(수신)
  subscribeViewEvents() {
    // searchFormView에서 @submit 이벤트(커스텀이벤트) 발생 시(=> 검색어 입력 후 엔터 누름) search함수 호출
    this.searchFormView.on('@submit', (event) => this.search(event.detail.value))
                       .on('@reset', () => this.reset())
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

  render() {
    // 검색어 입력시
    if(this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }

    this.tabView.show(this.store.selectedTab);
    this.searchResultView.hide();
  }

  renderSearchResult() {
    this.tabView.hide()
    this.searchResultView.show(this.store.searchResult);
  }
}
