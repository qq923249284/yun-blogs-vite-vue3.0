<template>
  <div
    class="sign-up-header"
    style="background-image: url('@/assets/images/bg-signup.jpg')"
  >
    <div class="content">
      <h1 class="mb-5">Sign Up</h1>
      <p class="text-lg">
        Use these awesome forms to login or create new account in your project
        for free.
      </p>
    </div>
  </div>
  <a-card
    :bordered="false"
    class="card-signup header-solid h-full"
    :bodyStyle="{ paddingTop: 0 }"
  >
    <template #title>
      <h5 class="font-semibold text-center">Register With</h5>
    </template>
    <a-form
      :model="formState"
      :hideRequiredMark="true"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        class="mb-10"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" placeholder="Name">
        </a-input>
      </a-form-item>

      <a-form-item
        class="mb-10"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input v-model:value="formState.email" placeholder="Email"> </a-input>
      </a-form-item>
      <a-form-item
        class="mb-5"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password
          v-model:value="formState.password"
          placeholder="Password"
        >
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          block
          html-type="submit"
          class="login-form-button"
        >
          SIGN UP
        </a-button>
      </a-form-item>
    </a-form>
    <p class="font-semibold text-muted text-center">
      Already have an account?
      <router-link to="/login" class="font-bold text-dark">Sign In</router-link>
    </p>
  </a-card>
</template>

<script setup>
import { signupUser, getHaveName } from "api";
import { ref, reactive, getCurrentInstance } from "vue";
import {useRoute, useRouter} from 'vue-router';
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

const router = useRouter();
const route = useRoute();

const { proxy } = getCurrentInstance();

const rememberMe = ref(true);

const formState = reactive({
  username: "",
  password: "",
  email: "",
});

const onFinish = (values) => {
  signupUser(formState).then((res) => {
    console.log(res)
    if (res.code === 1001) {
      proxy.$message.success("注册成功");
      router.push("/login");
    }
  });
};

const onFinishFailed = (errorInfo) => {
  // getHaveName(formState.username).then((res) => {
  //   console.log(res);
  // });
};
</script>

<style lang="scss" scoped>
.card-signup {
  width: 100%;
  max-width: 500px;
  margin: auto;
  box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
  border-radius: 12px;
  margin-top: -190px;
  margin-bottom: 20px;
  :deep(.ant-card-head) {
    border-bottom: 0;
    .ant-card-head-title {
      display: inline-block;
      flex: 1;
      padding: 16px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
    }
  }
}

.layout-default.layout-sign-up {
  padding: 11px;
  .ant-layout-header {
    background-color: $color-gray-1;
    color: $color-gray-12;
    box-shadow: none;
    padding: 20px;
    margin: -12px -12px 0;
    @media (min-width: $lg) {
      background-color: transparent;
      color: $color-gray-1;
      margin: 0;
      padding: 0 20px;
    }
    .header-brand {
      padding: 0px;
      @media (min-width: $lg) {
      }
      h6 {
        color: $color-gray-12;
        @media (min-width: $lg) {
          color: $color-gray-1;
        }
      }
    }
    .header-nav {
      a {
        color: $color-gray-12;

        @media (min-width: $lg) {
          color: $color-gray-1;
        }
        svg path {
          fill: $color-gray-12 !important;

          @media (min-width: $lg) {
            fill: $color-gray-1 !important;
          }
        }

        &.router-link-active {
          color: $color-gray-12;

          @media (min-width: $lg) {
            color: $color-gray-1;
          }
          svg path {
            fill: $color-gray-12;

            @media (min-width: $lg) {
              fill: $color-gray-1;
            }
          }
        }
      }
      .ant-menu-horizontal {
        line-height: 26px;
        padding: 10px 0;

        span {
          color: $color-gray-12;

          @media (min-width: $lg) {
            color: $color-gray-1;
          }
        }
      }
    }
    .header-btn .ant-btn-primary {
      @media (min-width: $lg) {
        background-color: $color-gray-1;
        color: $color-gray-12;
        border: none;
      }
    }
  }
  .ant-layout-content {
    padding-top: 0;
  }
}
.sign-up-header {
  @include box-shadow;
  height: 550px;
  margin-top: -120.8px;
  padding-top: 137.8px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  text-align: center;
  @media (min-width: $lg) {
    margin-top: -62.8px;
  }
  .content {
    padding-top: 40px;
    max-width: 480px;
    margin: auto;
    color: $color-gray-1;
    h1 {
      color: $color-gray-1;
      font-size: 36px;
    }
  }
}
</style>
