---
layout: wiki
wiki: Python
order: 20
title: 分支与循环
---

## 分支

### 基本if语句格式

```python
if condition1:
    statement(s)
elif condition2:
    statement(s)
elif condition3:
    statement(s)
···
else:
    statement(s)
```

### if条件表达式

```python
#原来的写法
if condition:
    条件成立时执行的语句
else:
    条件不成立时执行的语句

#条件表达式
条件成立时执行的语句 if condition else 条件不成立时执行的语句

#示例
if age < 18:
    print("禁止访问")
else:
    print("坚持访问")
#上述代码与下面代码等价
print("禁止访问") if age < 18 else print("坚持访问")
```

## 循环

### while循环

和C语言差不多，直接举个栗子：打印99乘法表

```python
i = 1
while i <= 9:
    j = 1
    while j <= i:
        print(j,"*",i,"=",j*i,end=" ")
        j += 1
    print()
    i += 1
```

### for循环的语法结构

```python
for 变量 in 可迭代对象:
    statement(s)

#例如
for each in "python"
    print(each)
```

`for`的好兄弟`range`，有三种用法

```python
range(stop)
range(start,stop)
range(start,stop,step)

start默认值为0，step默认值为1
#这里给一下类似于C的解释，比较好懂
#C:for(i=1;i<n;i++)
start即为i的初始值(i = start)
stop即为i的结束值(不包含stop)(n = stop)
step即为i步径的跨度(step = i+=)
```

{% note 不论使用哪种`range`，它的参数只能是**整型** color:warning %}

栗子时间到

```python
#找出10以内的所有素数
for n in range(2,10):
    for x in range(2,n):
        if n % x ==0:
            print(n,"=",x,"*",n//x)
            break
    else:
        print(n,"是一个素数")
```
