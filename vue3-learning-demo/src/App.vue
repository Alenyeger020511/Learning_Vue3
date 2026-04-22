<!--
App.vue - Vue3 根组件

这是应用的主组件，负责：
1. 使用 <script setup> 语法糖（Vue3 推荐的组合式 API 写法）
2. 导入并注册子组件
3. 定义应用的整体模板结构
-->

<script setup>
/**
 * <script setup> 是 Vue3 的组合式 API 语法糖
 * 优点：
 * - 更简洁的代码
 * - 更好的 TypeScript 支持
 * - 更高的运行时性能
 * 
 * 在这个文件中，我们导入 HelloWorld 组件
 * 在 <script setup> 中导入的组件会自动注册到模板中
 */
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- 
  template 标签内定义组件的 HTML 结构
  
  Vue3 支持多个根节点（Fragment），不需要像 Vue2 那样包裹在单个 div 中
  -->
  
  <!-- 使用 HelloWorld 组件 -->
  <!-- 在 <script setup> 中导入的组件可以直接在模板中使用 -->
  <HelloWorld />
</template>
