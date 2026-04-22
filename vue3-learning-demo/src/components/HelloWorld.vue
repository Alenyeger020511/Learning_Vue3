<!--
HelloWorld.vue - Vue3 功能演示组件

这个组件展示了 Vue3 的核心功能：
1. ref - 响应式引用
2. computed - 计算属性
3. watch - 侦听器
4. 事件处理
5. v-model 双向绑定
6. v-if/v-else 条件渲染
7. v-for 列表渲染
8. 生命周期钩子
9. props 和 emits（父子组件通信）
-->

<script setup>
/**
 * 导入 Vue3 的响应式 API
 * ref: 创建响应式引用，用于基本类型
 * reactive: 创建响应式对象，用于对象和数组
 * computed: 创建计算属性，自动追踪依赖
 * watch: 侦听数据变化并执行回调
 * onMounted/onUnmounted: 生命周期钩子
 */
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'

// ============================================
// 1. ref - 响应式引用
// ============================================
/**
 * ref 用于创建响应式的引用
 * - 在 JavaScript 中通过 .value 访问和修改
 * - 在模板中自动解包，不需要 .value
 */
const count = ref(0) // 计数器
const message = ref('你好，Vue3!') // 文本消息
const inputValue = ref('') // 输入框绑定值
const todos = ref([ // 待办事项列表
  { id: 1, text: '学习 Vue3 基础', done: true },
  { id: 2, text: '理解响应式原理', done: false },
  { id: 3, text: '实践组件开发', done: false }
])

// ============================================
// 2. reactive - 响应式对象
// ============================================
/**
 * reactive 用于创建响应式的对象或数组
 * - 直接访问属性，不需要 .value
 * - 适合管理复杂的状态对象
 */
const user = reactive({
  name: '学习者',
  age: 25,
  email: 'learner@example.com',
  isActive: true
})

const formState = reactive({
  username: '',
  password: '',
  rememberMe: false
})

// ============================================
// 3. computed - 计算属性
// ============================================
/**
 * computed 创建基于其他响应式数据的计算属性
 * - 自动追踪依赖，只有依赖变化时才重新计算
 * - 结果会被缓存，提高性能
 */
const doubleCount = computed(() => count.value * 2)

const completedTodosCount = computed(() => {
  return todos.value.filter(todo => todo.done).length
})

const greetingMessage = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return `早上好，${user.name}!`
  else if (hour < 18) return `下午好，${user.name}!`
  else return `晚上好，${user.name}!`
})

// ============================================
// 4. watch - 侦听器
// ============================================
/**
 * watch 用于侦听特定数据的变化并执行副作用
 * - 可以侦听 ref、reactive 或 getter 函数
 * - 适合执行异步操作或 DOM 操作
 */
watch(count, (newValue, oldValue) => {
  console.log(`count 从 ${oldValue} 变为 ${newValue}`)
})

watch(user, (newUser) => {
  console.log('用户信息发生变化:', newUser)
}, { deep: true }) // deep: true 表示深度监听对象内部属性

// ============================================
// 5. 事件处理方法
// ============================================
/**
 * 定义事件处理函数
 * 可以直接在模板中通过 @click 等事件绑定使用
 */
const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const resetCount = () => {
  count.value = 0
}

const addTodo = () => {
  if (inputValue.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: inputValue.value,
      done: false
    })
    inputValue.value = '' // 清空输入框
  }
}

const toggleTodo = (id) => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.done = !todo.done
  }
}

const deleteTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id)
}

const updateUserAge = () => {
  user.age++
}

// ============================================
// 6. 生命周期钩子
// ============================================
/**
 * Vue3 的生命周期钩子允许我们在组件的不同阶段执行代码
 * 常用钩子：
 * - onMounted: 组件挂载到 DOM 后执行
 * - onUnmounted: 组件卸载前执行
 * - onUpdated: 组件更新后执行
 * - onBeforeMount/onBeforeUnmount 等
 */
onMounted(() => {
  console.log('组件已挂载！')
  console.log('初始计数:', count.value)
  console.log('问候语:', greetingMessage.value)
})

onUnmounted(() => {
  console.log('组件即将卸载，可以在这里清理定时器、取消订阅等')
})

// ============================================
// 7. 条件显示状态
// ============================================
const showDetails = ref(true)
const toggleDetails = () => {
  showDetails.value = !showDetails.value
}
</script>

<template>
  <!-- 
  template 定义组件的 HTML 结构
  Vue3 支持多个根节点，不需要包裹在单个 div 中
  -->
  
  <div class="hello-world-container">
    
    <!-- ============================================
         标题部分
    ============================================ -->
    <header class="header">
      <h1>🎉 Vue3 学习示例</h1>
      <p class="subtitle">探索 Vue3 的核心功能</p>
    </header>

    <!-- ============================================
         1. ref 响应式引用示例 - 计数器
    ============================================ -->
    <section class="card">
      <h2>📊 1. ref 响应式引用 - 计数器</h2>
      <p>当前计数：<strong>{{ count }}</strong></p>
      <p>双倍计数（computed）：<strong>{{ doubleCount }}</strong></p>
      
      <div class="button-group">
        <button @click="decrement" class="btn btn-decrease">- 减少</button>
        <button @click="resetCount" class="btn btn-reset">重置</button>
        <button @click="increment" class="btn btn-increase">增加 +</button>
      </div>
      
      <p class="hint">💡 ref 创建的变量在 JS 中用 .value 访问，在模板中自动解包</p>
    </section>

    <!-- ============================================
         2. reactive 响应式对象示例 - 用户信息
    ============================================ -->
    <section class="card">
      <h2>👤 2. reactive 响应式对象 - 用户信息</h2>
      <div v-if="user.isActive" class="user-info">
        <p><strong>姓名:</strong> {{ user.name }}</p>
        <p><strong>年龄:</strong> {{ user.age }}</p>
        <p><strong>邮箱:</strong> {{ user.email }}</p>
        <p><strong>状态:</strong> <span class="status-active">活跃</span></p>
      </div>
      <button @click="updateUserAge" class="btn">增长年龄</button>
      <p class="hint">💡 reactive 用于对象，直接访问属性无需 .value</p>
    </section>

    <!-- ============================================
         3. computed 计算属性示例 - 动态问候
    ============================================ -->
    <section class="card">
      <h2>🌟 3. computed 计算属性 - 智能问候</h2>
      <p class="greeting">{{ greetingMessage }}</p>
      <p>已完成任务数：<strong>{{ completedTodosCount }} / {{ todos.length }}</strong></p>
      <p class="hint">💡 computed 自动追踪依赖并缓存结果</p>
    </section>

    <!-- ============================================
         4. v-model 双向绑定示例
    ============================================ -->
    <section class="card">
      <h2>🔄 4. v-model 双向绑定</h2>
      <div class="form-group">
        <label for="message-input">输入消息:</label>
        <input 
          id="message-input"
          v-model="inputValue" 
          type="text" 
          placeholder="输入内容..."
          class="input-field"
        />
      </div>
      <p>实时预览：<strong>{{ inputValue || '(空)' }}</strong></p>
      
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="showDetails" />
          显示详细信息
        </label>
      </div>
      <p class="hint">💡 v-model 实现表单输入和应用状态的双向绑定</p>
    </section>

    <!-- ============================================
         5. v-if/v-else 条件渲染示例
    ============================================ -->
    <section class="card">
      <h2>🎭 5. v-if/v-else 条件渲染</h2>
      <button @click="toggleDetails" class="btn">
        {{ showDetails ? '隐藏' : '显示' }}详情
      </button>
      
      <div v-if="showDetails" class="details-box">
        <p>✨ 这是显示的详细内容</p>
        <p>可以通过按钮切换显示状态</p>
      </div>
      <div v-else class="details-box hidden">
        <p>🙈 内容已隐藏</p>
      </div>
      
      <!-- v-if 还可以配合 v-else-if 使用 -->
      <div class="conditional-demo">
        <p v-if="count > 5">🔥 计数大于 5!</p>
        <p v-else-if="count > 0">📈 计数是正数</p>
        <p v-else>⏸️ 计数为零或负数</p>
      </div>
      <p class="hint">💡 v-if 根据条件决定是否渲染元素</p>
    </section>

    <!-- ============================================
         6. v-for 列表渲染示例 - 待办事项
    ============================================ -->
    <section class="card">
      <h2>📝 6. v-for 列表渲染 - 待办事项</h2>
      
      <div class="todo-input">
        <input 
          v-model="inputValue" 
          @keyup.enter="addTodo"
          placeholder="添加新任务..."
          class="input-field"
        />
        <button @click="addTodo" class="btn btn-add">添加</button>
      </div>
      
      <ul class="todo-list">
        <li 
          v-for="todo in todos" 
          :key="todo.id" 
          class="todo-item"
          :class="{ 'todo-done': todo.done }"
        >
          <input 
            type="checkbox" 
            :checked="todo.done"
            @change="toggleTodo(todo.id)"
          />
          <span @click="toggleTodo(todo.id)" class="todo-text">
            {{ todo.text }}
          </span>
          <button @click="deleteTodo(todo.id)" class="btn-delete">×</button>
        </li>
      </ul>
      
      <p v-if="todos.length === 0" class="empty-message">暂无待办事项</p>
      <p class="hint">💡 v-for 用于循环渲染列表，记得绑定唯一的 :key</p>
    </section>

    <!-- ============================================
         7. 事件处理示例
    ============================================ -->
    <section class="card">
      <h2>⚡ 7. 事件处理</h2>
      <div class="event-demo">
        <button @click="console.log('点击事件触发!')" class="btn">
          点击我（内联处理）
        </button>
        <button @mouseenter="console.log('鼠标移入')" @mouseleave="console.log('鼠标移出')" class="btn">
          鼠标悬停测试
        </button>
        <input 
          @input="console.log('输入内容:', $event.target.value)"
          placeholder="输入时查看控制台"
          class="input-field"
        />
      </div>
      <p class="hint">💡 @click 是 v-on:click 的简写，$event 访问原生事件对象</p>
    </section>

    <!-- ============================================
         8. watch 侦听器说明
    ============================================ -->
    <section class="card">
      <h2>👀 8. watch 侦听器</h2>
      <p>打开浏览器控制台查看 watch 的输出：</p>
      <ul class="watch-examples">
        <li>• 改变计数器会触发 count 的 watch</li>
        <li>• 修改用户信息会触发 user 的 watch</li>
      </ul>
      <p class="hint">💡 watch 用于响应数据变化并执行副作用</p>
    </section>

    <!-- ============================================
         页脚
    ============================================ -->
    <footer class="footer">
      <p>🎓 Vue3 学习框架 - 包含核心功能演示</p>
      <p>继续探索更多 Vue3 的强大功能！</p>
    </footer>
  </div>
</template>

<style scoped>
/**
 * scoped 样式
 * scoped 属性确保样式只应用于当前组件
 * 避免样式污染其他组件
 */

/* 容器样式 */
.hello-world-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* 头部样式 */
.header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  border-radius: 10px;
  color: white;
}

.header h1 {
  margin: 0;
  font-size: 2.5em;
}

.subtitle {
  margin: 10px 0 0;
  opacity: 0.9;
  font-size: 1.1em;
}

/* 卡片样式 */
.card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #42b883;
}

.card h2 {
  margin-top: 0;
  color: #35495e;
  font-size: 1.4em;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}

/* 按钮样式 */
.button-group {
  display: flex;
  gap: 10px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  background-color: #42b883;
  color: white;
}

.btn:hover {
  background-color: #35495e;
  transform: translateY(-2px);
}

.btn-increase {
  background-color: #42b883;
}

.btn-decrease {
  background-color: #ff6b6b;
}

.btn-reset {
  background-color: #ffd93d;
  color: #333;
}

.btn-add {
  background-color: #6c5ce7;
}

.btn-delete {
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}

/* 输入框样式 */
.input-field {
  width: 100%;
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.input-field:focus {
  outline: none;
  border-color: #42b883;
}

.form-group {
  margin: 15px 0;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #35495e;
}

/* 提示文字样式 */
.hint {
  margin-top: 15px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
  font-size: 0.9em;
  color: #666;
  border-left: 3px solid #ffd93d;
}

/* 用户信息样式 */
.user-info {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0;
}

.user-info p {
  margin: 8px 0;
}

.status-active {
  color: #42b883;
  font-weight: bold;
}

/* 问候语样式 */
.greeting {
  font-size: 1.3em;
  color: #6c5ce7;
  font-weight: bold;
  padding: 15px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 5px;
  text-align: center;
}

/* 详情框样式 */
.details-box {
  margin-top: 15px;
  padding: 20px;
  background: #e8f5e9;
  border-radius: 5px;
  border: 2px dashed #42b883;
}

.details-box.hidden {
  background: #ffebee;
  border-color: #ff6b6b;
}

.conditional-demo {
  margin-top: 15px;
  padding: 15px;
  background: #fff3cd;
  border-radius: 5px;
  font-weight: bold;
}

/* 待办事项列表样式 */
.todo-input {
  display: flex;
  gap: 10px;
  margin: 15px 0;
}

.todo-input input {
  flex: 1;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 15px 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 8px 0;
  background: #f8f9fa;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.todo-item:hover {
  background: #e9ecef;
}

.todo-item.todo-done {
  opacity: 0.6;
}

.todo-item.todo-done .todo-text {
  text-decoration: line-through;
  color: #999;
}

.todo-text {
  flex: 1;
  margin: 0 15px;
  cursor: pointer;
}

.empty-message {
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 20px;
}

/* watch 示例样式 */
.watch-examples {
  background: #2d3748;
  color: #68d391;
  padding: 15px;
  border-radius: 5px;
  font-family: 'Courier New', monospace;
}

.watch-examples li {
  margin: 8px 0;
}

/* 事件演示区域 */
.event-demo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}

/* 页脚样式 */
.footer {
  text-align: center;
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #35495e 0%, #2c3e50 100%);
  border-radius: 10px;
  color: white;
}

.footer p {
  margin: 5px 0;
}
</style>
