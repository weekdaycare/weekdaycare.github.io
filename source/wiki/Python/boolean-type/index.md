---
layout: wiki
wiki: Python
order: 10
title: 布尔类型
date: 2022-11-11 15:54:07
updated: 2022-11-11 17:54:07
---

1. 定义为False的对象：`None` 和`False`
2. 值为`0`的数字类型：`0`, `0.0`, `0j`, `Decimal(0)`, `Fraction(0, 1)`
3. 空的序列和集合： `''`, `()`, `[]`, `{}`, `set()`, `range(0)`
4. 布尔类型其实就是特殊的整数类型

```python
1 == True
#输出
True

0 == False
#输出
True

True + False
#输出
1

True - False
#输出
1

# True / False (0不能为除数)
```

