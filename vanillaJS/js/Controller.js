const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag, 'controller')
    this.store = store;

    this.searchFormView = searchFormView

    this.subscribeViewEvents()
  }

  // 각 view에서 발생하는 이벤트 확인(수신)
  subscribeViewEvents() {
    // searchFormView에서 @submit 이벤트(커스텀이벤트) 발생 시(=> 검색어 입력 후 엔터 누름) search함수 호출
    this.searchFormView.on('@submit', (event) => this.search(event.detail.value))
                       .on('@reset', () => this.reset())
  }

  search(keyword) {
    console.log(tag, keyword)
  }

  reset() {
    console.log(tag, 'reset')
  }
}
