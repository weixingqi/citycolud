# 2018/12/19 在城云开始学习vue

## 回顾一下之前零散的学习

* >>vue比jquery好，很核心的一个原因是修改网页消耗的性能比较小，因为有一个虚拟dom和内部的diff算法。v-on，v-if，v-show,v-bind这几个指令，具体干啥的记不清了。
* >>v-if和v-show都可以让一个元素消失，不过v-if是直接删除掉元素，v-show是添加display：none。
* >>单项绑定是修改moudle网页自动变化，双向绑定是修改网页moudle也会变化
  
## 属性含义

* el 选择元素  这个选择器只可以选择一个元素，css选择器可以用多种，如果选择多个元素。只会绑定第一个元素。
  
## 前端工具的使用

>> 练习的时候发现一直刷新太烦了，想起来之前被安利过的插件Browsersync，就又配置了一下。  有个问题是html文件名要改成index才会有效果。不然就一直cannot get。

* [Browsersync使用和安装教程](https://www.cnblogs.com/yesyes/p/6156102.html)
* [webpack的使用和安装教程](https://www.jianshu.com/p/42e11515c10f)
  
## vue语法

### 生命周期钩子

* created
* mounted
* updated
* destoryed

### 2018/12/24对于vue一点新的的认识

> 前两天看了一些vue语法，本来想在这里记录一些命令的，就像上面的生命周期钩子，然后发现好像不太行，vue和git是不一样的学习方法。不像git很多命令的意思都很清楚明白，容易理解。只是单纯的看和记录，没那么容易明白。vue需要更多的写案例。然后一句一句分析。才能比较好的理解语法。

## 在vue中使用echarts

>之前在项目中有使用过简单的echarts，但是在vue中使用又是不一样的场景。
百度一下在vue中使用echarts基本都用到了vue-cli。[在vue中使用echarts](https://blog.csdn.net/mr_wuch/article/details/70225364)
到了vue-cli官网看了一会发现又是基于webpack的，所以还是再了解一下webpack。
简单按照官网的教程简单打包了一次。好多博客都是webpack123的版本，所以就官网上简单的看一下，以后再了解。

