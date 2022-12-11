---
layout: wiki
wiki: Java
order: 20
title: 运算符
date: 2022-09-11 15:54:07
updated: 2022-09-11 17:54:07
---

## 算数运算符

- 运算符：对常量或者变量进行操作的**符号**
- 表达式：用**运算符**把常量或者变量连接起来**符合java语法的式子**就可以称为表达式。不同运算符连接的表达式体现的是不同类型的表达式

> 整数相除只能得到整数，要想得到小数，必须有浮点数参与

字符的 `+` 操作：拿字符在计算机底层**对应的数值**来计算的

> 在`java`与`C语言`中都是将字符转化为`ASCII`编码

{% folding 常见的几种字符对应的ASCII编码 %}

|       字符       | 编码 |
| :--------------: | :--: |
| 'A'(A~Z是连续的) |  65  |
| 'a'(a~z是连续的) |  97  |
| '0'(0~9是连续的) |  48  |

{% endfolding %}

{% note 算术表达式中包含多个基本数据类型的值的时候，整个算术表达式的类型会自动进行提升。 %}

提升规则：`byte`类型， `short`类型和`char`类型将被提升到`int`类型
整个表达式的类型自动提升到表达式中最高等级操作数同样的类型

{% ablock 等级顺序 %}
`byte`,`short`,`char` → `int` → `long` → `float` → `double`
{% endablock %}

```java
public static void main(String[] args){
    //定义两个变量
    int i = 10;
    char c = 'A';//'A'的值是65
    c = 'a';//'a'的值是97
    c = '0';//'0'的值是48
    System. out. println(i + c);

    //char ch = i + c;
    //char类型会被自动提升为int类型
    int j = i + c;
    System. out. println(j);

    //int k = 10 + 13.14;
    double k = 10 + 13.14;
}
```

当 "+" 操作中出现字符串时，这个 "+" 是**字符串连接符**，而不是算术运算

```java
public static void main(String[] args){
    System. out. println("hei"+"tui");
    System. out. println("heitui"+666);
    System. out. println(666+"heitui");
    System. out. println("heitui"+6+66);
    System. out. println(6+66+"heitui");
}
```

以上运行结果为

```java
heitui
heitui666
666heitui
heitui666
72heitui
```


## 赋值运算符

```java
public static void main(String[] args){
    //把10赋值给int类型的变量i
    int i = 10;
    System. out. println("i:" + i);

    // += 把左边和右边的数据做加法操作，结果赋值给左边
    i += 20;
    System. out. println("i:" + i);

    //注意：拓展的赋值运算符底层隐含了强制类型转化
    short s = 10;
    //s += 20;( += 操作默认强制类型转化)
    s = (short)(s + 20);
    System. out. println("s:" + s);
}
```

| 符号 |    作用    |          说明          |
| :--: | :--------: | :--------------------: |
|  =   |    赋值    | a=10，将10赋值给变量a  |
|  +=  |  加后赋值  |  a+=b，将a + b的值给a  |
|  -=  |  减后赋值  |  a-=b，将a - b的值给a  |
|  *=  |  乘后赋值  |  a*=b，将a × b的值给a  |
|  /=  |  除后赋值  |  a/=b，将a ÷ b的商给a  |
|  %=  | 取余后赋值 | a%=b，将a ÷ b的余数给a |

{% note 注：拓展的赋值运算符底层**隐含**了强制类型转化 color:error %}

## 逻辑运算符

| 符号 |   作用   |                             说明                             |
| :--: | :------: | :----------------------------------------------------------: |
|  &   |  逻辑与  | a&b，a和b都是true，结果为true，否则为false（有false则false） |
|  \|  |  逻辑或  | a\|b，a和b都是false，结果为false，否则为true（有true则true） |
|  ^   | 逻辑异或 |       a^b，a和b结果相异为true，相同为false（相异为一）       |
|  !   |  逻辑非  |                  !a，结果和a的结果正好相反                   |

## 短路逻辑运算符

| 符号 |  作用  |             说明             |
| :--: | :----: | :--------------------------: |
|  &&  | 短路与 | 作用和&相同，但是有短路效果  |
| \|\| | 短路或 | 作用和\|相同，但是有短路效果 |

**注意事项：**

- 逻辑与**\&**，无论左边真假，右边都要执行
  短路与**\&\&**，如果左边为真，右边执行；如果**左边为假，右边不执行**
- 逻辑或**\|**，无论左边真假，右边都要执行
  短路或**\|**，如果左边为假，右边执行；如果**左边为真，右边不执行**

```java
public static void main(String[] args){
    int i = 10;
    int j = 20; 
    //&&和&
    //System.out.println((i++>50)&(j++>50));//false & false
    System.out.println((i++>50)&&(j++>50));//false && false
    System.out.println("i:" + i);
    System.out.println("j:" + j);
}
```

运行结果为

```bash
false
i:11
j:20
```

可以发现`j++`没有执行，故为短路


## 三元运算符

- 格式：`关系表达式？表达式1：表达式2;`
- 范例：`a > b ? a : b;`（两个数据中的较大值）
- 计算规则：
  首先计算**关系表达式的值**
  如果值为**true，表达式1的值**就是运算结果
  如果值为**false，表达式2的值**就是运算结果

```java
//输出三个中的最大值
public static void main(String[] args){
    int a = 160;
    int b = 210; 
    int c = 180;
    int MaxHeight = (a>b?a:b)>c?(a>b?a:b):c;
    System.out.println(MaxHeight);
}
```
