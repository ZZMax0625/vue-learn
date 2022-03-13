# vue-learn

# 前端工程化开发

## 前端渐进式框架Vue基本概念

是一套用于构建用户界面的渐进式框架。Vue被设计为可以自底向上逐层应用。

渐进式框架:一开始不需要你完全掌握它的全部功能特性，可以后续逐步增加功能。没有多做职责之外的事情.

MVVM响应式编程模型，避免直接操作DOM，降低DOM操作的复杂性。

### 核心功能

#### 基础功能

页面渲染、表单处理提交、帮我们管理DOM(虚拟DOM)节点

#### 组件化开发

增强代码的复用能力，复杂系统代码维护更简单

#### 前端路由

更流畅的的用户体验、灵活的在页面切换
已渲染组件的显示，不需与后端做多余的交互

#### 状态集中管理

MVVM响应式模型基础上实现多组件之间的状态数据同步与管理。

#### 前端工程化

结合webpack等前端打包工具，管理多种静态资源，代码，测试，发布等，整合前端大型项目。

### 引入Vue3

```html
    <script src="https://unpkg.com/vue@next"></script>


```

### Hello world

```js
	// 初始化一个Vue实例
    var myDate = new Date();
    const app = new Vue({
        // 声明页面渲染的Vue实例的元素
        el:'#app',
        // 定义数据
        data:{
            message: 'hello vue',
            age: 13,
            time: myDate
        }
    })
```

### Vue3实现简单计数器

```html
    <div id="root">

    </div>
```

```javascript
    Vue.createApp({
        data(){
            return{
                content : 1
            };
        },
        mounted(){
            setInterval(()=>{
                this.$data.content +=1;
            },1000);
        },
        template: `<h2>{{content}}</h2>`,
    }).mount('#root');
```

### v-for&template 简单todolist