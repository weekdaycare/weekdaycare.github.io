---
layout: wiki
wiki: Java
order: 25
title: 数据输入
date: 2022-09-11 15:54:07
updated: 2022-09-11 17:54:07
---

我一开始还天真的以为它跟C一样用`scanf`，但其实`Java`里根本没有`scanf`，倒是有个`Scanner`，`Scanner`类位于`java.util.Scanner`包中，因此在程序前面要加上此包

1. 导包
   
   ```java
   import java.until.Scanner;
   //导包的动作必须出现在类定义的上边(扔最上边)
   ```

2. 创建对象
   
   ```java
   Scanner sc = new Scanner(System.in);
   //上面这个格式里面，只有sc是变量名，可以变，其他的都不允许变
   ```
   
   其中`Scanner sc = new Scanner(System.in);`这一句是关键。这一句的意思是：通过`new Scanner(System.in)`创建一个`Scanner`，控制台会一直等待输入，直到敲回车键结束，把所输入的内容传给`Scanner`，作为扫描对象

3. 接受数据
   然后如果想要获取输入的内容，就需要调用`Scanner`的`nextLine()`方法，因此就用到了`String name = in.nextLine()`，`int age = in.nextInt()`，`double height = in.nextDouble()`这三句来获取输入的内容
   
   ```java
   String name = sc.nextLine();//输入一整行，中间可以有空格
   int age = sc.nextInt();//整形
   double height = sc.nextDouble();//浮点型
   ```

{% folding 具体代码示例 %}

```java
public static void main(String[] args) {
    Scanner in = new Scanner(System.in);//定义scanner，等待输入

    System.out.println("请输入你的姓名:");
    String name = in.nextLine();//字符(串)类型的输入方式
    System.out.println(name);

    System.out.println("请输入你的年龄：");
    int age = in.nextInt();//整数类型的输入方式
    System.out.println(age);

    System.out.println("请输入你的身高：");
    double height = in.nextDouble();//浮点类型的输入方式
    System.out.println(height);
}
```

{% endfolding %}

> 但是这里面有一点需要注意一下，就是`nextLine()`方法会**吃回车符**，比如以下代码

```java
public static void main(String[] args) {
    Scanner in = new Scanner(System.in);//定义scanner，等待输入
    System.out.println("请输入你的姓名:");
    String name = in.nextLine();//字符类型的输入方式
    System.out.println(name);

    System.out.println("请输入你的年龄：");
    int age = in.nextInt();//整数类型的输入方式
    System.out.println(age);

    System.out.println("请输入苹果的英文：");
    //String s = in.next();
    String s = in.nextLine();
    System.out.println(s);

    System.out.println("请输入你的身高：");
    double height = in.nextDouble();//小数类型的输入方式
    System.out.println(height);
}
```

运行一下就会发现程序并没有让你输入苹果的英文，而是直接回车了，那是因为你输入完年龄之后的那个回车被`nextLine()`吃掉了，因此它并没有输出什么，但如果你用`in.next()`的话，它是可以输入的

两种运行结果：

1. `in.nextLine()`
   
   ```bash
   请输入你的姓名:
   WO
   WO
   请输入你的年龄:
   12
   12
   请输入苹果的英文:
   ```

请输入你的身高:
134
134.0

```
2. `in.next()`
```bash
请输入你的姓名:
WO
WO
请输入你的年龄:
12
12
请输入苹果的英文:
apple
apple
请输入你的身高:
134
134.0
```

如果要输入带空格的字符串的话，可以添加 `in.nextLine();` 语句吃掉回车符，如下

```java
public static void main(String[] args) {
    Scanner in = new Scanner(System.in);//定义scanner，等待输入
    System.out.println("请输入你的姓名:");
    String name = in.nextLine();//字符类型的输入方式
    System.out.println(name);

    System.out.println("请输入你的年龄：");
    int age = in.nextInt();//整数类型的输入方式
    System.out.println(age);

    System.out.println("请输入苹果的英文：");
    //String s = in.next();
    in.nextLine(); //吃掉回车符
    String s = in.nextLine();
    System.out.println(s);

    System.out.println("请输入你的身高：");
    double height = in.nextDouble();//小数类型的输入方式
    System.out.println(height);
}
```

{% ablock 补充一下`nextLine()`和`next()`的区别： %}

1. `nextLine()`方法返回的是`Enter`键之前的所有字符，它是可以得到带空格的字符串的
2. `next()`会自动消去有效字符前的空格，只返回输入的字符，不能得到带空格的字符串

{% endablock %}