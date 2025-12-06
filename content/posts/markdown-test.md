---
title: "Markdown Test"
date: "2019-03-11"
categories: ["media", "expositions", "essays", "prose", "poems", "journals", "archives", "stories", "notes", "reviews", "projects"]
tags: ["math", "philosophy", "music", "films", "video-games", "anime", "magic-tricks", "coding", "number-theory", "algebraic-geometry", "algebra", "existentialism", "epistemology", "logic", "linguistics", "french-learning", "novels"]
---

In this post we test markdown syntax. 

<!--more-->


## Paragraph

_Xerum, quo qui aut unt expliquam qui dolut labo_. **Aque venitatiusda cum**, **_voluptionse latur_** "sitiae dolessi aut parist" `aut dollo` enim qui `voluptate ma` dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? 

中文段落测试。_君不见黄河之水天上来_，**奔流到海不复回**。
**_君不见高堂明镜悲白发，朝如青丝暮成雪_**。
人生得意须尽欢，`莫使金樽空对月`。
天生我材必有用，千金散尽还复来。
烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。

## Blockquotes

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.
> > **Note** that you can put a blockquote inside a blockquote

### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — Rob Pike[^1]

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports them out-of-the-box.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

### Inline Markdown within tables

| Italics   | Bold     | Code   | Strikethrough     | Underline            | Highlight              |
| --------  | -------- | ------ | ----------------- | -------------------- | ---------------------- |
| *italics* | **bold** | `code` | ~~strikethrough~~ | <ins>underline</ins> | <mark>highlight</mark> |

## Code Blocks

### Code block with backticks

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Code block with Hugo's internal highlight shortcode
{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## List Types

### Ordered List

1. Item 1
   1. Sub-item 1.1
   2. Sub-item 1.2
   3. Sub-item 1.3
2. Item 2
3. Item 3

### Unordered List

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

### Checklist

- [x] Item 1
- [ ] Item 2
  - [x] Sub-item 2.1
  - [ ] Sub-item 2.2 
- [ ] Item 3 


## Symbols

You can use the HTML entity for whatever symbol you want to use. For example, if you want to display the copyright sign (©), you can copy and paste the HTML entity for copyright `(&copy;)` into your Markdown document.

```markdown
Copyright (©) — &copy;
Registered trademark (®) — &reg;
Trademark (™) — &trade;
Euro (€) — &euro;
Left arrow (←) — &larr;
Up arrow (↑) — &uarr;
Right arrow (→) — &rarr;
Down arrow (↓) — &darr;
Degree (°) — &#176;
Pi (π) — &#960;
```

For a complete list of available HTML entities, refer to Wikipedia’s page on [HTML entities](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references).

## Other Elements — abbr, sub, sup, kbd, mark

[This is a comment that will be hidden.]: #

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.


## YouTube Privacy Enhanced Shortcode

{{< youtube ZJthWmvUzzc >}}

<br>

---

## Twitter Simple Shortcode

{{< x user="SanDiegoZoo" id="1453110110599868418" >}}

<br>

---

## Vimeo Simple Shortcode

{{< vimeo_simple 48912912 >}}

<br>

---


## Wenkai paragraph

{{< wenkai >}}

　　_列位看官_，**你道此书**从何而来？说起根由***虽近荒唐***，细谙则深有趣味。待在下将此来历注明，方使闻者了然不惑。

　　原来，当年女娲氏炼石补天之时，于大荒山无稽崖炼成高经十二丈，方经二十四丈顽石三万六千五百零一块。娲皇氏只用了三万六千五百块，只单单剩了一块未用，便弃在此山青埂峰下。谁知此石自经煅炼之后，灵性已通，因见众石俱得补天，独自己无材不堪入选，遂自怨自嗟，日夜悲号惭愧。

　　一日，正当嗟悼之馀，俄见一僧一道远远而来，生得骨骼不凡，丰神迥异，说说笑笑来至峰下，坐于石边高谈快论。先是说些云山雾海神仙玄幻之事，后便说到红尘中荣华富贵。此石听了，不觉打动凡心，也想要到人间去享一享这荣华富贵，但自恨粗蠢，不得已，便口吐人言，向那僧道说道：“大师，弟子蠢物，不能见礼了。适闻二位谈那人世间荣耀繁华，心切慕之。弟子质虽粗蠢，性却稍通，况见二师仙形道体，定非凡品，必有补天济世之材，利物济人之德。如蒙发一点慈心，携带弟子得入红尘，在那富贵场中，温柔乡里受享几年，自当永佩洪恩，万劫不忘也。”二仙师听毕，齐憨笑道：“善哉，善哉！那红尘中有却有些乐事，但不能永远依恃。况又有美中不足、好事多魔八个字紧相连属，瞬息间则又乐极悲生，人非物换，究竟是到头一梦，万境归空，倒不如不去的好。”这石凡心已炽，那里听得进这话去，乃复苦求再四。二仙知不可强制，乃叹道：“此亦静极思动，无中生有之数也。既如此，我们便携你去受享受享，只是到不得意时，切莫后悔。”石道：“自然，自然。”那僧又道：“若说你性灵，却又如此质蠢，并更无奇贵之处。如此也只好踮脚而已。也罢，我如今大施佛法助你助，待劫终之日，复还本质，以了此案。你道好否？”石头听了，感谢不尽。那僧便念咒书符，大展幻术，将一块大石登时变成一块鲜明莹洁的美玉，且又缩成扇坠大小的可佩可拿。那僧托于掌上，笑道：“形体倒也是个宝物了！还只没有实在的好处，须得再镌上数字，使人一见便知是奇物方妙。然后携你到那昌明隆盛之邦，诗礼簪缨之族，花锦繁华之地，温柔富贵之乡去安身乐业。”石头听了，喜不能禁，乃问：“不知弟子那几件奇处，又不知携了弟子到何处？望乞明示，使弟子不惑。”那僧笑道：“你且莫问，日后自然明白的。”说着，便袖了那石，同那道人飘然而去，竟不知投奔何方何舍。

{{< /wenkai >}}


## Palatino Paragraph

{{< palatino >}}

　　_Call me Ishmael_. **Some years** **_ago—never_** mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.

　　There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.

　　Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. What do you see?—Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Some leaning against the spiles; some seated upon the pier-heads; some looking over the bulwarks of ships from China; some high aloft in the rigging, as if striving to get a still better seaward peep. But these are all landsmen; of week days pent up in lath and plaster—tied to counters, nailed to benches, clinched to desks. How then is this? Are the green fields gone? What do they here?


{{< /palatino >}}