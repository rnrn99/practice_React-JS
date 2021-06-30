// DOM API MAPPING

// querySelector 함수 호출 -> element 반환
export function qs(selector, scope = document) {
  if (!selector) throw "no selector";

  return scope.querySelector(selector);
}

// querySelectorAll 함수 호출 -> element 반환(array로)
export function qsAll(selector, scope = document) {
  if (!selector) throw "no selector";

  return Array.from(scope.querySelectorAll(selector));
}

// adEventListener 함수 호출 -> element에서 event 수신, handler 호출
export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

// on과 비슷 but handler 따로 호출 -> 특정 element 하위의 자식 element event 처리
export function delegate(target, eventName, selector, handler) {
  const emitEvent = (event) => {
    const potentialElements = qsAll(selector, target);

    for (const potentialElement of potentialElements) {
      if (potentialElement === event.target) {
        return handler.call(event.target, event);
      }
    }
  };

  on(target, eventName, emitEvent);
}

// event 발행, dispatchEvent함수 호출
export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

// Date 객체를 받아서 상대 시간 객체 반환
export function formatRelativeDate(date = new Date()) {
  const TEN_SECOND = 10 * 1000;
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;

  const diff = new Date() - date;

  if (diff < TEN_SECOND) return `방금 전`;
  if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 전`;
  if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 전`;
  if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 24)}시간 전`;
  return date.toLocaleString("ko-KR", {
    hour12: false,
    dateStyle: "medium",
  });
}

// 과거 날짜 객체 반환
export function createPastDate(date = 1, now = new Date()) {
  if (date < 1) throw "date는 1 이상입니다";

  const yesterday = new Date(now.setDate(now.getDate() - 1));
  if (date === 1) return yesterday;

  return createPastDate(date - 1, yesterday);
}

// 하나씩 늘리면서 id를 만들기 위한 함수
export function createNextId(list = []) {
  return Math.max(...list.map((item) => item.id)) + 1;
}
