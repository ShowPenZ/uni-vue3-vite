// eslint-disable-next-line no-undef
Component({
  data: {
    selected: 0,
    isShow: false,
    color: "#D1D1D1",
    selectedColor: "#097efc",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/static/images/device.png",
        selectedIconPath: "/static/images/device_selected.png",
        text: "首页",
      },
      {
        pagePath: "/pages/mine/index",
        iconPath: "/static/images/mine.png",
        selectedIconPath: "/static/images/mine_selected.png",
        text: "个人中心",
      },
    ],
    mask: false,
  },
  attached() {
    wx.$bus.on("hideFab", () => {
      this.setData({
        isShow: false,
      });
    });
  },

  methods: {
    switchTab(e) {
      const { route } = getCurrentPages()[0];
      const { fullPath } = getCurrentPages()[0].$page;

      const data = e.currentTarget.dataset;
      const url = data.path;

      if (url !== fullPath) {
        wx.switchTab({ url });
        this.setData({
          isShow: false,
        });

        wx.$bus.emit("isShowMidBtnDetail", { isShowMidBtnDetail: false, route: route });
      }
    },
    handleToAdd() {
      const { route } = getCurrentPages()[0];

      // 这种通过emit派发消息的方式可以在切换路由时带参
      // 或者如果无需带参数直接使用wx.navigateTo
      wx.$bus.emit("toAddDevice", { route: route });
    },
    HandleToScan() {
      const { route } = getCurrentPages()[0];

      wx.$bus.emit("toScan", { route: route });
    },
    HandleToShow(event) {
      this.setData({
        isShow: !this.data.isShow,
      });
      const { route } = getCurrentPages()[0];

      // 禁止页面滚动
      wx.setPageStyle({
        style: {
          overflow: "hidden",
        },
      });
      wx.$bus.emit("isShowMidBtnDetail", { isShowMidBtnDetail: this.data.isShow, route: route });
    },

    handleClickMask() {
      this.setData({
        isShow: false,
      });

      // 取消禁止页面滚动
      wx.setPageStyle({
        style: {
          overflow: "auto",
        },
      });
    },
  },
});

