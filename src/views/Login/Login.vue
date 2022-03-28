<template>
  <div class="sign-in">
    <a-row type="flex" :gutter="[24, 24]" justify="space-around" align="middle">
      <a-col
        :span="24"
        :md="12"
        :lg="{ span: 12, offset: 0 }"
        :xl="{ span: 6, offset: 2 }"
        class="col-form"
      >
        <h1 class="mb-15">Sign In</h1>
        <h5 class="font-regular text-muted">
          Enter your email and password to sign in
        </h5>
        <a-form
          :hideRequiredMark="true"
          layout="vertical"
          :model="formState"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            class="mb-10"
            label="Name"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.username" placeholder="username">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            class="mb-5"
            label="Password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="Password"
            >
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item class="mb-10">
            <a-switch v-model="rememberMe" /> Remember Me
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              block
              html-type="submit"
              class="login-form-button"
            >
              SIGN IN
            </a-button>
          </a-form-item>
        </a-form>
        <p class="font-semibold text-muted">
          Don't have an account?
          <router-link to="/signup" class="font-bold text-dark"
            >Sign Up</router-link
          >
        </p>
      </a-col>
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
        <img src="images/img-signin.jpg" alt="" />
      </a-col>
    </a-row>
  </div>
</template>
<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { login } from "api";
import storage from "store";
import { ACCESS_TOKEN } from "@/store/mutation-types";

const store = useStore();
const router = useRouter();
const { proxy } = getCurrentInstance();
const rememberMe = ref(true);

const formState = reactive({
  username: "",
  password: "",
  remember: true,
});

const onFinish = (values) => {
  login(formState).then((res) => {
    console.log(res);
    if (res.code == 1001) {
      proxy.$message.success(res.message);
      store.commit("common/setToken", res.token);
      storage.set(ACCESS_TOKEN, res.token, 7 * 24 * 60 * 60 * 1000);
      router.push("/");
    }
  });
};

const onFinishFailed = (errorInfo) => {};
</script>

<style lang="scss" scoped>
.sign-in {
  height: 100%;
  padding: 0px 20px;
  .ant-row {
    height: 100%;
  }
  .col-img img {
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: block;
  }
  .col-form .ant-switch {
    margin-right: 5px;
  }
  :deep(.ant-form-item label) {
    font-size: 13px;
    font-weight: $fw-semibold;
    color: $color-gray-12;
  }
}
</style>
