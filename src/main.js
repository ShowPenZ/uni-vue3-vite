import { createSSRApp } from "vue";
import App from "./App.vue";
import { setupStore } from "@/store/index";
import { setupRouter } from "./router"; // 引入路由

export function createApp() {
  const app = createSSRApp(App);
  // 注册路由
  setupRouter(app);
  setupStore(app);
  return {
    app,
  };
}
