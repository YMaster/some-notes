# 移动端神奇flex的使用

## flex是什么？

-   Flex是Flexible Box的缩写，意味"弹性布局"，用来为盒模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。
```css
.box{
    display: flex;
}
```

-   行内元素也可以使用Flex。
```css
.box{
    display: inline-flex;
}
```

webkit内核的浏览器需要加上-webkit前缀。
```css
.box{
    display: -webkit-flex;  /* Safari */
    display: flex;
}
```
-   注意点，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效


## 基本概念
-   采用flex布局的元素，简称flex容器，简称"容器"，他的所有子元素自动成为容器成员，简称flex项目（flex item），简称"项目"
-   容器默认存在两根轴，结束为止叫做main end：交叉轴的开始位置叫做cross start，结束位置叫做cross end。
-   项目默认主轴沿主轴排列。单个项目占据的主轴叫做main size，占据的交叉轴叫做cross size。

## 容器的属性
-   以下6个属性设置在容器上
    >flex-direction
    >flex-wrap
    >flex-flow
    >justify-content
    >align-item
    >align-content

-   flex-direction属性
    -   flex-direction属性决定主轴方向
    ```css
        .box{
            flex-direction: row | row-reverse | column-reverse;
        }
    ```

    -   row (默认值)：主轴水平方向，起点在左端
    -   row-reverse：主轴为水平方向，起点在右端
    -   column：主轴为垂直方向，起点在上演。
    -   column-reverse：主轴为垂直方向，起点在下沿。

-   flex-wrap属性
    -   默认情况下，项目都排在一条线上，(又称"轴线")上。flex-wrap属性定义，如果一条轴线拍不限，如何换行，就需哟啊用到了wrap了
    -   wrap可以让你的排不下的项目自动换行

    ```css
        .box{
            flex-wrap: nowrap | wrap | wrap-reverse;
        }
    ```
    -   他可能取三个值
        >nowrap :不换行
        >wrap : 换行
        >wrap-reverse :换行，第一行在下方

-   flex-flow属性
    -   flex-flow属性是flex-direction属性和flex-wrap属性的简写形似，默认值为row nowrap。
    ```css
        .box{
            flex-flow: <flex-direction> | <flex-wrap>
        }
    ```

-   justify-content属性
    -   justify-content属性定义了项目在主轴上的对齐方式
    ```css
        .box{
            justify-content: flex-start | flex-end | cnter | space-between | space-around;
        }
    ```
-   align-item属性
    -   align-item属性定义项目在交叉轴上如何对齐。
    ```css
        .box{
            align-item: flex-start | flex-end | center | baseline | stretch;
        }
    ```

-   align-content属性
    -   align-content属性定义了许多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
    ```css
        .box{
            align-content: flex-start | flex-end | center | space-between | space-around | strech;
        }
    ```
    flex-start: 与交叉轴的起始点对齐
    flex-end: 与交叉轴的终点对齐
    center：与交叉轴的终点对齐
    space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
    space-around：没跟轴线两侧的间距都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
    strech（默认值）：轴线占满整个叉轴

## 以下6个属性设置在项目上
    -   order
    -   flex-grow
    -   flex-shrink
    -   flex-basis
    -   flex
    -   align-self

-   order属性
    -   order属性定义项目的排序顺序。数值越小，排列越靠前，默认为0;
    ```css
        .item{
            order: <整数>;
        }
    ```

-   flex-grow属性
    -   flex-grow属性定义项目的放大比例，默认为0，计时存在剩余空间，也不放大
    ```css
        .item{
            flex-grow: <number>;
        }
    ```

-   flex-shrink属性
    -   flex-shrink属性定义了项目的缩小比例，默认值为1，计时空间不足，该项目将缩小
    ```css
        .item{
            flex-shrink: <number>;
        }
    ```

-   flex-basis属性
    -   flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性计算主轴是否有多余空间。默认值为auto，即项目的本来大小
    ```css
        .item {
            flex-basis: <length> | auto;
        }
    ```

-   align-self属性
    -   align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值auto，
    -   表示继承父元素的alig-items属性，如果没有父元素，等同于stretch。
    ```css
        .item{
            align-self: auto | flex-start | flex-end | center | baseline | stretch;
        }
    ```
    -   该属性的6个值除了 auto之外，其他都与align-items完全一致