---
layout: wiki
wiki: Java
order: 10
title: 变量&数据类型
---
## 变量

变量使用的注意事项：

1. 名字不能重复
2. 变量未赋值，不能使用
3. `long`类型的变量定义的时候，为了防止整数过大，后面要加`l`或`L`
4. `float`类型的变量定义的时候，为了防止类型不兼容，后面要加`f`或`F`

{% image https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/16-39-54.webp 和C有点像 %}

{% image https://cdn.jsdelivr.net/gh/wefoox/pic/2022/08/29/16-40-00.webp %}

> 注：`java`中默认整数为`int`型，浮点数默认为`double`型，见如下两个报错

## 整数太大

`long`定义变量后`javac`编译时遇到以下错误

```bash
HelloWorld.java:3: 错误: 整数太大
                long a = 999999999999;
                         ^
1 个错误
```

报错原因：在`java`中给出整数默认是`int`类型，导致数据越界

解决方案：定义`long`类型变量是要在数据之后加`l(L)`，例：

```java
long a = 999999999999l;
```

再次编译没有报错越界。

## 从double转换到float可能会有损失

`float`定义变量后编译报错

```bash
HelloWorld.java:4: 错误: 不兼容的类型: 从double转换到float可能会有损失
                float a = 13.14;
                          ^
1 个错误
```

报错原因：`java`中给出浮点数默认为`double`类型

解决方案：定义`double`类型变量要在数据后加`f(F)`，例：

```java
float a = 13.14f;
```