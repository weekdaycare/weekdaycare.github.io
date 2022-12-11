---
layout: wiki
wiki: Python
order: 30
title: 元组
date: 2022-12-10 15:54:07
updated: 2022-12-10 17:54:07
---

## 差异

元组与列表类似，能够同时容纳多种类型的对象，不同之处在于元组的元素不能修改，以及元组用的是括号 `()` 而列表用的是方括号 `[]`。

```python
rhyme = (1, 2, 3, 4, 5)
```

{% ablock 由于元组是不可变的，所以任何修改元组的操作都是不可取的 %}

{% folding rhyme[1]=1 child:codeblock %}

```python
Traceback (most recent call last):
  File "<pyshell#1>", line 1, in <module>
    rhyme[1] =1
TypeError: 'tuple' object does not support item assignment
```

{% endfolding %}

{% endablock %}

元组也支持切片操作，因为切片的含义是将目标对象中的元素以某种特定的组合导出而非修改对象本身

```python
rhyme[:]
(1, 2, 3, 4, 5)

rhyme[::-1]
(5, 4, 3, 2, 1)
```

## 查

同时由于元组的不可修改性质，元组无法进行增删改这些操作，只有一个查字可用，元组只支持 `count` 和 `index` 方法，和列表使用方法一致。

```python
nums = (1, 3, 4, 3, 5, 3, 2, 7, 4)
nums.count(3)
# 输出
3

nums.index(4)
# 输出
2
```

## 运算符

虽说元组不支持修改，但是却也能够使用 `+` 与 `*` 运算符构成新的元组

```python
s = (1, 2, 3)
t = (4, 5, 6)
s + t
# 输出
(1, 2, 3, 4, 5, 6)

s * 3
# 输出
(1, 2, 3, 1, 2, 3, 1, 2, 3)
```

## 嵌套

元组也可以套娃，直接加逗号就是了

```python
w = s,t
w = ((1, 2, 3),(4, 5, 6))
```

## 迭代

元组也支持迭代

```python
for each in s:
    print(each)
```

当然，对于嵌套的元组就需要使用嵌套的循环

```python
for i in w:
    for each in i:
        print(each)
        
# 输出
1 2 3 4 5 6
```

列表推导式也同样可以对元组进行数据转化

```python
s = (1, 2, 3, 4, 5)
[each * 2 for each in s]
# 输出
[2,4,6,8,10]
```

{% ablock 不存在元组推导式！ color:orange %}

`(each*2 for each in s)` 这种写法是错误的，我们所指的是元组可以作为可迭代对象转化成列表，这个写法生成的并不是元组推导式，叫做生成器。

{% folding 如果你这么写了 child:codeblock color:orange %}

```python
<generator object <genexpr> at 0x0000017223DC39E0>
```

{% endfolding %}

{% endablock %}

## 只有一个元素

要是让你生成只有一个元素的元组，你会怎么写？

```python
x = (520)
```

是这样的吧，好，我们用 `type` 函数看一下 `x` 的数据类型

```python
type(x)
# 输出
<class 'int'>
```

欸嘿，看到没有，给出的类型是 `int` 整形的，说明我们的写法是错误的，要生成一个元素的元组你得这样写

```python
x = (520,)

# type检测一次
type(x)
<class 'tuple'>
```

可以看到这次控制台输出的是元组了

## 打包和解包

生成一个元组我们有时候也称之为元组的打包

```python
t = (123, "啊巴巴", 3.14)
```

这就叫做把整数123，字符串“啊巴巴”，浮点型3.14打包到了一起。那么对应的，将他们一次性赋值给三个变量名的行为称之为解包

```python
x, y, z = t

x = 123
y = "啊巴巴"
z = 3.14
```

{% ablock %}

这种行为不仅适用于元组，也适用于任何的序列类型，比如列表，字符串

```python
a, b, c, d = "cook"
```

{% endablock %}

但无论使用哪一种序列解包，都需要注意一点：**赋值号左边的变量名数量必须跟右侧序列的元素数量一致，有一种情况除外**

{% folding 若数量不等则报错 child:codeblock %}

```python
Traceback (most recent call last):
  File "<pyshell#28>", line 1, in <module>
    a,b,c="cook"
ValueError: too many values to unpack (expected 3)
```

{% endfolding %}

除外的那种是什么情况呢？

```python
a, b, *c = "cook" 
```

这种情况是 `a='c'`，`b='o'`，`c=['o','k']`，后面的值全部赋给了 `c` ，这个之后再讲。

Python引以为傲的多重赋值就是使用的元组的打包与解包的逻辑

```python
x, y = 10, 20
```

## 可变性

元组中的元素虽然是不可变的，但如果元组中的元素是指向一个可变的列表，那么我们依然是可以修改列表里面的内容的

```python
s = [1, 2, 3]
t = [4, 5, 6]
w = (s, t)
w[0][0] = 0

# 输出
w = ([0, 2, 3], [4, 5, 6])
```

