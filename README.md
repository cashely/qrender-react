# qrender-react

##### 安装方式

```shell
npm i -S qrender-react
```

##### 使用方式

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import QRender from 'qrender-react'

function App(props) {
  return (
    <div>
      <QRender text="1212"/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#app'))
```



##### Props

| 属性名       | 类型                       | 必填 | 默认值 | 描述                                   |
| ------------ | -------------------------- | ---- | ------ | -------------------------------------- |
| text         | `String`                   | 是   |        | 二维码内容，支持url                    |                                    |
| padding      | `Number`                   | 否   | 10px   | 二维码边距，防止存储图片的时候没有留边 |
| width        | `Number`                   | 否   | 256px  | 宽度                                   |
| height       | `Number`                   | 否   | 256px  | 高度                                   |
| src          | `String`                   | 否   |        | 二维码需要显示图标                     |
| imgWidth     | `Numebr`                   | 否   | 60px   | 图标宽度                               |
| imgHeight    | `Number`                   | 否   | 60px   | 图标宽度                               |
| typeNumber   | `Number`                   | 否   | -1     |                                        |
| correctLevel | `Number`                   | 否   | 2      | 二维码清晰度，数值越大渲染越清晰       |
| backgroud    | `String`                   | 否   | #fff   | 背景颜色                               |
| foreground   | `String`                   | 否   | #000   | 二维码点的颜色                         |

