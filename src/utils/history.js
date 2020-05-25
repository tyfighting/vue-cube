const History = {
  _history: [],
  install(vue) {
    Object.defineProperty(vue.prototype, "$routerHistory", {
      get() {
        return History;
      },
    });
  },
  push(path) {
    // 入栈
    this._current += 1;
    this._history.push(path);
  },
  pop() {
    // 出栈
    this._current -= 1;
    return this._history.pop();
  },
  canBack() {
    return this._history.length > 1;
  },
};
export default History;
