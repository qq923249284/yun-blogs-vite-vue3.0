import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  build: {
    outDir: "../yun-node/public/",
    emptyOutDir: "../yun-node/public/",
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        // 默认从 /src/components 目录下自动查找组件
        AntDesignVueResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      "@": "/src",
      "api": "/src/services/api.js",
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
        additionalData:
          '@import "@/common/css/globalVariable.scss";@import "@/common/css/mixin.scss";',
        charset: false
      },
    },
  },
});
