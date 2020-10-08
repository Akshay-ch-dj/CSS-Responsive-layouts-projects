# CONQUERING RESPONSIVE LAYOUTS
---
## Get Better each day.
Thanks to this amazing man: [Kevin Powell](https://www.kevinpowell.co/)
<img src="./images/kevinpowell.png"
    alt="paragraph-plain"
    style="display: block; margin-right: 10px; width: 400px" />

### Introduction
* To blackout solutions(to mark it as a spoiler), use the "||" character to start and end a covered out text\
in Discord.


By default everything is responsive, ie if there is only html and there is no CSS bounded everything is responsive, \
we are the ones adding rules in the form of CSS, which eventually breaks the responsiveness,

So to keep the responsiveness with you, play it wisely, choose each decisions(rules/units) as wise as you can.


## Day 1
***

* Use the `overflow: hidden` wisely on the `parent` elements.
* ### Why Should you avoid using heights.
    * The general idea is it cause more issues than they solve.
    * When there is a fixed height to an element, and the display shrinks to mobile, then a major part of whats inside will be not visible.
    * If you start that fixing with media queries, you need a whole lot of 'em.
    * If you need more background, instead of fixing a height, try to add more padding to it, that makes it nicer.
    * like `padding: 5em` [5em is actually, 16 * 5 = 80px, the default font size is 16px, that is what used for the em unit.]
* ### The `em`s and the `rem` s
    * `1 em` is `16px`, which is the default font size of the html, if you specify font-size in em's, you are using your parents font size as a base and do the stuffs.
      ```html
      <div class="parent">
          <div class="child">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae repudiandae asperiores ratione
                  eius ipsam.</p>
          </div>
      </div>
      ```
    * if the "parent" `font-size: 10px` and the child set to
      ```css
      .child p{
          font-size: 2em;
      }
      ```
        Now the p elements have a font size of `2 * 10px = 20px`, ie it is always based on the nearest parent.
        It is compounding
    * `rem`s are invented with fixing the problems with the compounding of `em`s, rem stands for "root em", (em expands to ephemeral unit), it always going to be looking at the roots elements body ie the (`html` font size.)
    * `rem` units are more consistent.
    * It can be used for all padding, margins, width other than just font size.
    * The other properties also behave differently,
        ```css
        .parent{
            font-size: 10px;
        }
        .child p{
            font-size: 2em;

            margin-bottom: 1em;
        }
        ```
        This time the `em` is based on the present font size,(not the very prv. parent font size), ie the bottom margin now will be 20px(2em(base) * 1em),
    * But here also these don't apply for `rem`s, which are always looking at the root- html element,
        ```css
        .child p{
            font-size: 2em;

            margin-bottom: 1rem;
        }
        ```
        Here the margin will be, 1 * 16px = 16px.

    * The `em` gets super useful in many areas for example in case of a button,
        ```css
        .child .btn{
            display: inline-block;
            background: black;
            font-weight: 700;
            letter-spacing: 5px;
            color: white;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 1.6em;

            padding: 1em 3em;
        }
        ```
        Here the padding adapts to the font-size, ie if the font size of the parent decreased, all things that is based on the em will gets affected similarly.

        In short, The `em`'s are more useful where things need to be more adaptive, and use `rem`s if it needs more consistent.
    * When you see in others code the html, font size is set to `62.5%`, what it is - {`10px * 100/ 16` = 62.5}, it is basically setting the root to 10px, and when it is in percentages, it allows more scalability from there too.


## Day 2
***

* ### Don't set font size using `em`s
    If you got a html, which is weird as like in below,
    ```html
    <ul class="main-list"> <!-- font-size: 1.125 -->
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
      <ul class="sub-list"> <!-- font-size: 1.125 * 1.125 -->
          <li class="items">Lorem ipsum dolor sit amet consectetur.</li>
          <li class="items">Lorem ipsum dolor sit amet consectetur.</li>
          <li class="items">Lorem ipsum dolor sit amet consectetur.</li>
          <ul class="sub-sub-list"> <!-- font-size: 1.125 * 1.125 * 1.125 -->
              <li class="super-childs">Lorem ipsum dolor sit amet consectetur.</li>
              <li class="super-childs">Lorem ipsum dolor sit amet consectetur.</li>
              <li class="super-childs">Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </ul>
    </ul>
    ```

    And if you set the font size using em like this,
    ```css
    ul, li{
        font-size = 1.125em;
    }
    ```

    It is gonna compound as in the comments, so stick to `em` only to add paddings and margins to
    whichever element, need it.

    