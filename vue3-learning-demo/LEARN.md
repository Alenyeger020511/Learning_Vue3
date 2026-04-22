# Vue3 学习框架

这是一个专为学习 Vue3 而设计的示例项目，包含了 Vue3 的核心功能和最佳实践。

## 📚 项目特点

- ✅ **详细的中文注释**：每个文件、每个功能都有清晰的中文说明
- ✅ **组合式 API (Composition API)**：使用 Vue3 推荐的 `<script setup>` 语法
- ✅ **核心功能演示**：涵盖 Vue3 的主要特性
- ✅ **美观的 UI 界面**：现代化的卡片式设计，易于理解和交互

## 🎯 包含的核心功能

### 1. ref - 响应式引用
- 创建响应式的基本类型数据
- 在 JavaScript 中通过 `.value` 访问
- 在模板中自动解包

### 2. reactive - 响应式对象
- 创建响应式的对象和数组
- 直接访问属性，无需 `.value`
- 适合管理复杂的状态

### 3. computed - 计算属性
- 基于其他响应式数据自动计算
- 自动追踪依赖并缓存结果
- 提高性能

### 4. watch - 侦听器
- 侦听数据变化并执行回调
- 支持深度监听
- 适合执行副作用操作

### 5. v-model - 双向绑定
- 表单输入与应用状态同步
- 支持多种表单元素
- 简化表单处理

### 6. v-if/v-else - 条件渲染
- 根据条件显示/隐藏元素
- 支持 v-else-if 链式判断
- 真正的条件渲染（元素会被销毁/重建）

### 7. v-for - 列表渲染
- 循环渲染列表数据
- 需要绑定唯一的 `:key`
- 支持内联样式和类绑定

### 8. 事件处理
- @click、@mouseenter 等事件绑定
- 内联处理和函数处理
- $event 访问原生事件对象

### 9. 生命周期钩子
- onMounted - 组件挂载后
- onUnmounted - 组件卸载前
- 其他钩子：onUpdated、onBeforeMount 等

## 🚀 快速开始

### 安装依赖
```bash
cd vue3-learning-demo
npm install
```

### 开发模式运行
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📁 项目结构

```
vue3-learning-demo/
├── src/
│   ├── main.js              # 应用入口文件
│   ├── App.vue              # 根组件
│   ├── style.css            # 全局样式
│   └── components/
│       └── HelloWorld.vue   # 功能演示组件（核心学习文件）
├── index.html               # HTML 模板
├── package.json             # 项目配置
└── vite.config.js          # Vite 配置
```

## 💡 学习建议

1. **从 main.js 开始**：了解 Vue3 应用的启动流程
2. **查看 App.vue**：理解组件结构和导入方式
3. **深入研究 HelloWorld.vue**：这是核心学习文件，包含所有功能演示
4. **打开浏览器控制台**：观察 watch 和生命周期钩子的输出
5. **动手修改代码**：尝试修改数据和方法，观察变化

## 🔍 关键概念说明

### Composition API vs Options API
本项目使用 **Composition API**（组合式 API），这是 Vue3 推荐的方式：
- 更好的代码组织
- 更强的 TypeScript 支持
- 更灵活的逻辑复用

### <script setup> 语法糖
- 自动注册导入的组件
- 模板中直接使用变量和函数
- 更简洁的代码

### 响应式原理
- **ref**: 用于基本类型（number, string, boolean 等）
- **reactive**: 用于对象和数组
- 数据变化时，视图自动更新

## 📖 进一步学习

- [Vue3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vite.dev/)
- [Vue3 组合式 API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html)

## 🎨 UI 设计说明

项目采用现代化卡片式设计：
- 每个功能独立成一个卡片
- 左侧绿色边框标识
- 底部黄色提示框解释概念
- 响应式布局，适配不同屏幕

---

**祝你学习愉快！** 🎉

如有问题，欢迎查看浏览器控制台或阅读代码注释。
