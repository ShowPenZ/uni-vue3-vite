class EventBus {
  constructor() {
    this.events = {};
  }

  // 添加事件监听器
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  // 触发事件
  emit(eventName, ...args) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach((listener) => listener(...args));
    }
  }

  // 添加一次性事件监听器
  once(eventName, listener) {
    const onceListener = (...args) => {
      this.off(eventName, onceListener);
      listener(...args);
    };
    this.on(eventName, onceListener);
  }

  // 移除事件监听器
  off(eventName, listener) {
    const listeners = this.events[eventName];
    if (listeners) {
      if (!listener) {
        delete this.events[eventName];
      } else {
        const index = listeners.indexOf(listener);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
      }
    }
  }
}

export default EventBus;
