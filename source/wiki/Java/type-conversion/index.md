---
layout: wiki
wiki: Java
order: 15
title: 类型转化
date: 2022-09-11 15:54:07
updated: 2022-09-11 17:54:07
---

## 自动类型转化

把一个表示**数据范围小的数值**或者变量赋值给另一个表示**数据范围大的变量**

## 强制类型转化

把一个表示数据**范围大的数值**或者变量赋值给另一个表示**数据范围小的变量**

格式：目标数据类型变量名=(目标数据类型)值或者变量；

```java
public static void main(String[] args){
    //自动类型转化
    double a = 10;
    System. out. println(a);

    //定义byte类型变量
    byte b = 10;
    short s = b;
    int i = b;

    //这是不行的，类型不兼容
    //char c = b;

    //强制类型转化
    int k = (int)88.88;//数据丢失
}
```