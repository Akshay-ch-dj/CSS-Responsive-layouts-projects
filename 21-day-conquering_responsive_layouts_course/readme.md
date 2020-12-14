# CONQUERING RESPONSIVE LAYOUTS

---

* [NOTES ON CSS FLEXBOX.](NOTES-flexbox.md)
* [NOTES ON CSS GRID.](../CSS_Study_Projects_Notes/CSS_grid_learn/readme.md)
* [NOTES ON CSS CUSTOM PROPERTIES.](NOTES-css_custom_properties.md)
* [NOTES ON CSS Before and After](../CSS_Study_Projects_Notes/css_before_after_learn/readme.md)
* [NOTES ON CSS min, max & clamp.](../CSS_Study_Projects_Notes/CSS_min_max_clamp_learn/readme.md)

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

  ### Using `max-width`
  ---
    * Can use a combination of min-width and max-width to simply tackle awkward growing of things.
    * To control the text length, can use the max-width property with the ch unit\
    ```css
    p{
        max-width: 45ch; /* Limits the paragraph length to 45 characters */
    }
    ```

  ### Using VS code emmet to wrap up a div/html element.
  * Use the `shift + ctrl + p` to go to command pallette, then search for the `emmet`, pick the\
  `wrap with abbreviation`, then enter the element(with class if needed eg: `div.container`).

  * Limiting a container Size.
  ```css
  .container{
    width: 80%;     /* Actual Width */
    max-width: 750px;   /* max-width */
    margin: 0 auto;    /* Align horizontally */
  }
  ```
### DAY 5 project outs
---
1. Do only this in the root, `body` margin can be set to zero after
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```
2. Adding `padding` to the inner content. your method is to make absolute position to the children, it is\
an enemy to responsive design. The approach is to add padding top and bottom, make the child container width in\
%s, and use a `max-width` always.
3. Thinking in a responsive way, the more organized things are, the more easy to control them, simply more divs
for each particular element, it is easy to place or control them (for eg, adding padding to them makes good spacing from the relatives), so adding an extra container div for getting more control.
4. Using the BEM(Block Element Modifier) naming convention, when it comes to child elements, use `__` to represent their names.So it can be easily identified which one is child element, of which one.
5. For buttons to get a perfect match to the height give the border radius a higher value, like `100px`.
6. Understanding your faults,
    * Specifying height in vh, this must be avoided
    * Don't add absolute positioning without sheer necessity, this 2 things are mainly failing you,
    * Keep a max width for your elements, you don't need to go, one end to other for every screen.
    * Your design is same as your way of life, you let out all control and trying to handle all yourself,\
    remember the original boilerplate is actually responsive, your design philosophy is first restrict it, then
    you trying to make it responsive.
* **NESTING THINGS IS BAD IDEA, GIVE IT A CLASS POSSIBLE**, you are writing more nested things in sass, you badly need  good training in frontend..so literally add a class on everything possible... make it as a habit
---

## What is block-element-modifier(BEM) naming convention in CSS
---

* The classes for child elements assigned with double underscore, for eg: if there is a parent `card` class and
child image inside it the image class naming convention is like `card__image`.
<img src="./images/BEM_convention.png"
    alt="BEM-convention"
    style="display: block; margin-right: 10px; width: 600px" />

* Similarly for title and text..etc, `card__title`, `card__text` like that.
* Then there is modifiers, `--` ones which are used to remodify the things(modifying the original css) like one that gonna added with js, etc..\
eg: If there is a light card and a black card, or like the css in that class makes the card light or black..
name them as `card--light`, `card--black`.
* If there is only single class, one need to modify the things on both class that is more css any day,
always stick with base class + modifier class concept for that.
* like, `card card--light` and `card card--black`, the basic things can be set in the card class.. Then do specific things in the modifier class..
* With scss, there is nice feature like you only need to add the second part, for eg, `&__body`, like,
```scss
.card{
    margin: 2em;
    max-width: 300px;
    padding: 2em;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.45);

    &__body{
        color: red;
    }
}
```
* it just compile normally no weird nesting happening.
---

## What is box-sizing = border-box?
---
* To understand box-sizing, one need to understand the box-model in css. lets do it with an example\
It is the sample html,
```html
<body>
    <div class="content-box"></div>
    <div class="scale"></div>
    <div class="border-box"></div>
</body>
```
and CSS
```css
body{
    background: #efefef;
    color: #333;
    font-family: basic-sans, sans-serif;
}

.scale{
    width: 500px;
    height: 50px;
    background: #615756;
}

.content-box{
    width: 500px;
    background: #4dfff3;
}

.border-box{
    width: 500px;
    background: #52ffb8;
}
```
<img src="./images/border-box.png"
    alt="border-box"
    style="display: block; margin-right: 10px; width: 600px" />

* Now increase the padding and add a border to the `content-box`, and observe how the overall size \
gets affected.
```css
.content-box{
    width: 500px;
    padding: 25px;
    border: 5px solid red;
    background: #4dfff3;
}
```
<img src="./images/border-box1.png"
    alt="border-box"
    style="display: block; margin-right: 10px; width: 600px" />

* It adds an extra of 25px+25px ie 50px padding total + (5 + 5)px border width on each side\
So a total of 60ox added to the initial 500px making width now 560px.
* It is the default behavior, to examine the changes lets add `box-sizing: border-box` to the `.border-box`\
container, add add the same styling as above and observe the differences with reference to the `scale` container with the same width.
```css
.border-box{
    box-sizing: border-box;
    width: 500px;
    padding: 25px;
    border: 5px solid red;
    background: #52ffb8;
}
```
<img src="./images/border-box2.png"
    alt="border-box"
    style="display: block; margin-right: 10px; width: 600px" />

* So by changing box-sizing to border box, all the things happening on the inside, it makes things lot more\
predictable and easier to control,

### Day 9 project-sol comparison
---
* Always use `main` tags if applicable.(more semantic html). Everything not needed to be a div.
* moved from div to `header` -> `main` -> `section`.
* If the information to be displayed is different from the main it can be set in a `aside` tag.
* Organizing styles in css, kevin keeps his typography stuffs on the top section.

* [My solution:- ](https://codepen.io/akshaych/full/jOryEbV)

#### Making a `nav` using flexbox

* Done my soln, crosschecking with kevin's
* changing the margin to individual items.
* Adding a move to right, nav__link--right, class to some nav items to move them to right.
* The `margin-left: auto`,pushes things all the way to left, which is a good approach, another common approaches
* Using the `justify-content: space-between`, avoiding unnecessary margin on the last item using the, adjacent sibling selector.

* [My solution:- ](https://codepen.io/akshaych/full/abZOELy)

#### Adding a nav logo
* Don't add it to the nav, if it is a link, then there will be two links,to the home section.
* To solve the spacing issues in navbar using the flexbox.
```html
<header class="navbar">
    <div class="container row">
        <a href="#" class="nav__logo">
            <img class="img-nav" src="./images/Avengers-Logo-transparent-PNG-Image.png" alt="loge conquering">
        </a>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a class="nav__link" href="#">home</a></li>
                <li class="nav__item"><a class="nav__link" href="#">About</a></li>
                <li class="nav__item"><a class="nav__link" href="#">Contact</a></li>
            </ul>
            <ul class="nav__list">
                <li class="nav__item"><a class="nav__link" href="#">Sign In</a></li>
                <li class="nav__item"><a class="nav__link nav__link--btn" href="#">Sign Up</a></li>
            </ul>
        </nav>
    </div>
</header>
```
```css
.nav{
    display: flex;
    justify-content: space-between;

    border: 2px solid red;
}

.nav__list{
    display: flex;
    align-items: center;

    border: 2px solid red;
}

.nav__logo{
    width: 60px;
    border: 2px solid orange;
}

.container{
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
}

.row{
    display: flex;
    justify-content: space-between;

    border: 2px solid yellow;
}

```

<img src="./images/challenge-site1.png"
    alt="border-box"
    style="display: block; margin-right: 10px; width: 600px" />

* Here the one with yellow borders are the `row` class, having full width and it need the last two timem way up to left and other nav items close to the logo, to do this
* One method is to give nav a `width: 100%`, then the available space will all taken by the nav, now a lot of `space-between` elements.\
A flex-grow of 1 (`flex: 1 1 auto;`) gives the same results.

<img src="./images/challenge-site2.png"
    alt="border-box"
    style="display: block; margin-right: 10px; width: 600px" />

* To arrange the first set of nav link in the center give it a class and use `margin: 0 auto;`.
  I use `flex-grow: 1` on logo too that is awkward, but possible.\
  auto margins are too much capable.

* [My solution:- ](https://codepen.io/akshaych/full/yLJKKzN)

## Media Queries
---
* Focussing all media queries, use specific (`screen`, `only screen`, to use with other queries)
* min - 600px or bigger, mobile first: The basic styles kicks only in smaller screens.

```css
@media (min-width: 600px) {
  .example {
    background-color: olivedrab;
  }
}
```
* max - 600px or smaller: Desktop First, whats in is for smaller screens.

```css
@media (max-width: 600px) {
  .example {
    background-color: orangered;
  }
}
```
* Order is important in media queries.
* Use this lines always in html to use media queries,
  ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

### Selecting the Breakpoint
***

* Breakpoint is the point when the layout starts to fail, General cases, that one need to use media queries, mobile first or desktop first at the point there initial design starts to fail.
* Don't target specific parts only with a breakpoint, choose a general one.
* Here in the course, where the bottom area gets narrower(hard to read), take it as the breakpoint,
Change the hero part too.
* No actual one is going to look at all possible widths: your site looks OK, It only needs for the general devices, the site needed to look good. The more things you put in it is more harder to maintain.
* General small screen: **600px**/ **700px**, mid screens: up to **900px**/**960px**, (around 900ish px get in to full grown site.)
* Use minimum media queries as possible.
* Visit this [link](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/) to get an idea about the general breakpoints.
* Use SASS and mixins like [these](https://codepen.io/davidgilbertson/pen/aBpJzO) for meaningful declarations and easy communication of CSS codes.

```scss
@mixin for-phone-only {
  @media (max-width: 599px) { @content; }
}
@mixin for-tablet-portrait-up {
  @media (min-width: 600px) { @content; }
}
@mixin for-tablet-portait-only {
  @media (min-width: 600px) and (max-width: 899px) { @content; }
}
@mixin for-tablet-landscape-up {
  @media (min-width: 900px) { @content; }
}
@mixin for-tablet-landscape-only {
  @media (min-width: 900px) and (max-width: 1199px) { @content; }
}
@mixin for-desktop-up {
  @media (min-width: 1200px) { @content; }
}
@mixin for-desktop-only {
  @media (min-width: 1200px) and (max-width: 1799px) { @content; }
}
@mixin for-big-desktop-up {
  @media (min-width: 1800px) { @content; }
}

// To use
.phone-only {
  @include for-phone-only { background: purple; }
}

// If we add these classes to respective elements the styles applied accordingly.
```


### **CHALLENGE SOLUTION COMPARISON**
---
My [challenge solution](https://codepen.io/akshaych/pen/jOryEbV?editors=1100)

* Going for the mobile first design.
* Always set the breakpoint according to the complexity of the site.

### **DAY 19 NAVBar challenge.**
---
* Comparing Kevins solution.
* Not much difference as usual kevins, code is compact.

### **DAY 21 the final challenge**
---

#### DESIGN CONSIDERATIONS
---
1. Mobile first approach.
2. Write semantic html, with all img alts, aria tags etc..
3. Use BEM for naming html elements.
4. 2 breakpoints(as per the design provided).
5. Use CSS custom properties.
6. Use sass, with css fallback using sass and mixins for the viwports..
7. Use reusable classes and targeted functional classes.
8. Use flexbox more.
9. Get familiar with Firefox developer tools.
10. At last as bonus, make a day/night theme switcher.

* [My challenge solution:-](https://codepen.io/akshaych/full/rNLveBr)
