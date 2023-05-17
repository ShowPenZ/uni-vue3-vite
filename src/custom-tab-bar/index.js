Component({
  data: {
    selected: 0,
    isShow: false,
    color: "#D1D1D1",
    selectedColor: "#097efc",
    list: [
      {
        pagePath: "/pages/index",
        iconPath: "/static/images/device.png",
        selectedIconPath: "/static/images/device_selected.png",
        text: "首页",
      },
      {
        pagePath: "/pages/mine",
        iconPath: "/static/images/mine.png",
        selectedIconPath: "/static/images/mine_selected.png",
        text: "个人中心",
      },
    ],
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
    toAddDevice() {
      const { route } = getCurrentPages()[0];

      wx.$bus.emit("toAddDevice", { route: route });
    },
    toScan() {
      const { route } = getCurrentPages()[0];

      wx.$bus.emit("toScan", { route: route });
    },
    // 此处需要针对中间的tabBar跳转到二级页面，而不是使用switchTab
    toadd(event) {
      this.setData({
        isShow: !this.data.isShow,
      });
      const { route } = getCurrentPages()[0];

      wx.$bus.emit("isShowMidBtnDetail", { isShowMidBtnDetail: this.data.isShow, route: route });
    },
  },
});

