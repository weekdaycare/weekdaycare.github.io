---
layout: wiki
wiki: Java
order: 1
title: 初上手
---

## 安装

第一步就踩坑，配置完环境变量之后报错，无法运行`JVM`

```bash
C:\Users\Sakura>java 
<JAVA_HOME>/lib/ext exists, extensions mechanism no longer supported; Use -classpath instead.
.Error: Could not create the Java Virtual Machine.
Error: A fatal exception has occurred. Program will exit.
```

一开始我以为是环境变量配置错了，结果实际上就是和报错说的一样，`<JAVA_HOME>/lib/ext exists`这个文件夹存在，去`java`安装目录中把`lib`文件夹中的`ext`文件夹删除即可

再次执行`java -version`没有报错了

```bash
C:\Users\weekdaycare>java -version
java version "17.0.3.1" 2022-04-22 LTS
Java(TM) SE Runtime Environment (build 17.0.3.1+2-LTS-6)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.3.1+2-LTS-6, mixed mode, sharing)
```

## Hello World！

编辑好初个`helloworld.java`文件后调用`javac`报错

```java
public class HelloWorld{
        public static void main(String[] args){
                System. out. println("Hello World!");
        }
}
```

报错（请把类名和文件名统一一下）

```java
helloworld.java:1: 错误: 类 HelloWorld 是公共的, 应在名为 HelloWorld.java 的文件中声明
public class HelloWorld{
       ^
1 个错误
```

把文件名改为`HelloWorld.java`再次运行就没有报错了

## 注释

编译`java`源程序时出现的错误： 编码 `GBK` 的不可映射字符 (0x80)的主要原因是，在编写`java`源程序代码时代码中添加了中文注释，且`java`文件的编码格式不是`ANSI`编码格式，导致在编译`java`源程序时报错，无法成功编译。

解决方案

编译的时候加上`-encoding utf-8`

```bash
javac -encoding utf-8 HelloWorld.java
```

或者直接把文件编码改为`ANSI`格式即可
