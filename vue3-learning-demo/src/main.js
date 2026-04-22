/**
 * main.js - Vue3 应用入口文件
 * 
 * 这是 Vue3 应用的起点，负责：
 * 1. 从 'vue' 包导入 createApp 函数（Vue3 的新应用创建方式）
 * 2. 导入全局样式文件
 * 3. 导入根组件 App.vue
 * 4. 创建并挂载应用实例到 #app 元素
 */

// 从 Vue 库导入 createApp 函数，用于创建应用实例
import { createApp } from 'vue'

// 导入全局样式文件，这些样式将应用于整个应用
import './style.css'

// 导入根组件 App.vue，它是整个应用的顶层组件
import App from './App.vue'

// 创建 Vue 应用实例并挂载到 HTML 中的 #app 元素上
// createApp() 接收根组件作为参数
// .mount('#app') 将应用挂载到页面上 id 为 app 的 DOM 元素
createApp(App).mount('#app')
