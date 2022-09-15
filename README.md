## 使用React + Ts编写的在线画图工具![](https://camo.githubusercontent.com/475b49b04214dfa67c1ec8a2837888ae63003feb7b71fd45be30ff360148ad87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174)  ![](https://camo.githubusercontent.com/1698104e976c681143eb0841f9675c6f802bb7aa832afc0c7a4e719b1f3cf955/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d417061636865253230322e302d626c75652e737667)

React version `18.2.0`

React redux version 8.0.2

> 如果对您有帮助,欢迎star

### 指令

> npm install

> npm start

> npm run build

### 实现

* 矩形
* 三角形
* 圆形
* 线
* 文本
* 鼠标选区
* 更改颜色

> *ps 由于我没有找到能够实现三角形并且能保持三角形内部是可透明的办法,所以我使用了三个hr拼为三角形,从而形成内部可透明,如果你好的想法可以告诉* email:caro1xxxhv@gmail.com 或者 提issues

### 结构

```js
-src
		- borad //画板
		- compoents //shape
		- navbar //工具条
		- store //redux文件夹
		- style // 我使用了styled component,所以样式都写在了ts文件内,该文件下的样式都用于shape
		- utils //一些shape的共有逻辑 & 事件
```

### 效果图

初始化画板

![](https://github.com/caro1xxx/drawing-tools/blob/main/src/screenshot/%E6%88%AA%E5%B1%8F2022-09-16%2001.17.57.png?raw=true)

创建shape

![](https://github.com/caro1xxx/drawing-tools/blob/main/src/screenshot/%E6%88%AA%E5%B1%8F2022-09-16%2001.19.21.png?raw=true)

缩放与拖动

![](https://github.com/caro1xxx/drawing-tools/blob/main/src/screenshot/%E6%88%AA%E5%B1%8F2022-09-16%2001.19.39.png?raw=true)

选取

![](https://github.com/caro1xxx/drawing-tools/blob/main/src/screenshot/%E6%88%AA%E5%B1%8F2022-09-16%2001.20.05.png?raw=true)

改色

![](https://github.com/caro1xxx/drawing-tools/blob/main/src/screenshot/%E6%88%AA%E5%B1%8F2022-09-16%2001.20.22.png?raw=true)

### Licencing

>  [Apache 2.0 Licence](https://www.apache.org/licenses/LICENSE-2.0)
