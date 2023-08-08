<template>
  <view class="login">
    <view class="loginTopArea">
      <text class="loginTitle">登录demo111</text>
    </view>
    <uni-forms class="loginForm" :model="formData" ref="ruleLoginForm" validate-trigger="bind">
      <uni-forms-item
        class="loginFormItemArea"
        name="userName"
        required
        :rules="[{ required: true, errorMessage: '请输入账号' }]"
      >
        <uni-easyinput focus placeholder="请输入账号" v-model="formData.userName" :maxlength="24" />
      </uni-forms-item>
      <uni-forms-item class="loginFormItemArea" name="password" required>
        <uni-easyinput
          placeholder="请输入密码"
          v-model="formData.password"
          :type="showPwd ? 'text' : 'password'"
          maxlength="18"
        />
        <uni-icons class="pwdEye" :name="showPwd ? 'eye-slash' : 'eye'" @click="showPwd = !showPwd" />
      </uni-forms-item>
      <checkbox class="loginCheckbox" :value="isCheck" :checked="isCheck">记住密码</checkbox>
      <button class="loginBtn" type="primary" size="large" :disabled="isLoading" :loading="isLoading" @click="submit">
        登录
      </button>
    </uni-forms>
  </view>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { onLoad, onReady } from "@dcloudio/uni-app";

import {
  //   setToken, setRefreshToken,
  setCipherAccount,
  getCipherAccount,
  setRefreshToken,
} from "@/utils/store";
import { ciphertext, isObjEmpty, sleep } from "@/utils/utils";
import { CONST_URL } from "@/config/constant";
// import { useUserInfo } from "@/store/user";

export default {
  name: "login-page",
  components: {},
  setup() {
    // const styles = useCssModule();
    // const use_userInfo = useUserInfo();
    const ruleLoginForm = ref(null);
    const state = reactive({
      isLoading: false,
      isCheck: true,
      customRules: {
        password: {
          rules: [
            { required: true, errorMessage: "请输入密码" },
            // {
            //   validateFunction: function (rule, value, data, callback) {
            //     if (!valid_10(value)) {
            //       callback("请输入6-18位由数字+大小写字母组成的密");
            //     }
            //     return true;
            //   },
            // },
          ],
        },
      },
    });

    const inputType = reactive({
      showPwd: false,
    });

    onLoad(() => {
      uni.hideHomeButton();
    });

    onReady(() => {
      ruleLoginForm.value.setRules(state.customRules);
    });

    // 获取storage内解密的账户密码
    const cipherInfo = ref({
      cipherAccount: !isObjEmpty(getCipherAccount()) ? getCipherAccount() : { password: "", userName: "" },
    });

    const genFormData = cipherInfo.value.cipherAccount;

    const formData = reactive(genFormData);

    // 提交
    const submit = () => {
      console.log(ruleLoginForm, "ruleLoginForm");
      ruleLoginForm.value
        .validate()
        .then((res) => {
          console.log(res);
          handleSubmit(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const holdAccountInfo = (formData) => {
      const cipherAccount = {};
      console.log(formData);
      const cipherUserName = ciphertext(formData.userName);
      const cipherPwd = ciphertext(formData.password);

      cipherAccount.userName = cipherUserName;
      cipherAccount.password = cipherPwd;
      setCipherAccount(cipherAccount);
    };

    const handleSubmit = async (formData) => {
      state.isLoading = true;
      // const res = await login(formData)
      //   .then()
      //   .catch((e) => {
      //     console.log(e);
      //     state.isLoading = false;
      //   });

      const res = { code: 200, message: "登录成功" };

      console.log(res);
      if (res && res.code === 200) {
        // setToken(res.data.accessToken);
        // setRefreshToken(res.data.refreshToken);
        if (state.isCheck) {
          console.log(formData);
          holdAccountInfo(formData);
        } else {
          setCipherAccount({});
        }
        state.isLoading = false;
        setRefreshToken("123");
        // 登录成功跳转
        uni.showToast({ title: res.message, icon: "", duration: 1000 });
        sleep(1002).then(async () => {
          uni.reLaunch({ url: "/pages/index/index" });
          // try {
          //   await use_userInfo.getUserParams();
          // } catch (error) {
          //   console.log(error);
          // }
        });
      }
    };

    // onHide(() => {
    //   ruleLoginForm.value.reset();
    // });

    // onUnload(() => {
    //   ruleLoginForm.value.reset();
    // });

    return {
      ...toRefs(state),
      CONST_URL,
      ruleLoginForm,
      formData,
      ...toRefs(inputType),
      submit,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  /* padding-top: 40px; */
  background-size: 100% 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 270px 40px 0 40px;
}

.loginTopArea {
  text-align: center;
  margin-bottom: 20px;
}

.loginCheckbox {
  margin-bottom: 20px;
}

/* /deep/ .uni-forms {
} */
</style>
