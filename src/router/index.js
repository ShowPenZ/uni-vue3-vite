import uniCrazyRouter from "uni-crazy-router";
export function setupRouter(app) {
  // 接收vue3的实例，并注册uni-crazy-router
  app.use(uniCrazyRouter);
}

uniCrazyRouter.beforeEach(async (to, from, next) => {
  // 逻辑代码

  next();
});

// eslint-disable-next-line no-unused-vars
uniCrazyRouter.afterEach((to, from) => {
  // 逻辑代码
});

// eslint-disable-next-line no-unused-vars
uniCrazyRouter["on" + "Error"]((to, from) => {
  // 逻辑代码
});
