# CSS FLEXBOX - FLEX WRAP
---

* Basic html, css setup files for learning flex wrap and demonstrating..
```html
<div class="parent">
    <div class="child child__1"></div>
    <div class="child child__2"></div>
    <div class="child child__3"></div>
    <div class="child child__4"></div>
</div>
```
```css
.parent{
    height: 100vh;
    border: 20px solid black;
    display: flex;
}

.child{
    width: 200px;
    height: 200px;
}

.child__1{
    background: rgb(31, 61, 134);
}
.child__2{
    background: rgb(172, 57, 53);
}

.child__3{
    background: rgb(149, 43, 140);
}

.child__4{
    background: rgb(34, 3, 121);
}
```
<img src="./images/flexbox-1.png"
    alt="flex-box"
    style="display: block; margin-right: 10px; width: 400px" />

if the flex wrap is set using `flex-wrap: wrap;`, on parent. when shrinks the child items doesn't
try to adjust on but moves down like,
<img src="./images/flexbox-2.png"
    alt="flex-box"
    style="display: block; margin-right: 10px; width: 400px" />

1. How can one adjust contents individually?

- Use the `align-content` property, for **vertical alignment** of individual items,
```css
.parent{
    height: 100vh;
    border: 20px solid black;
    display: flex;
    align-content: flex-start;
}
```
<img src="./images/flexbox-3.png"
    alt="flex-box"
    style="display: block; margin-right: 10px; width: 400px" />

there is also `center`, `space-around`..etc options.\

2. How to align text in the flexbox inline?
* USe the `align-items: baseline;`, in the parent.

3. What is `flex-flow`?
It is a shorthand property for the parent, that can specify the flex direction, wrapping setting at same time\
eg:  instead of setting, `flex-direction: column; flex-wrap: wrap;`
```css
.parent{
    height: 100vh;
    border: 20px solid black;
    display: flex;
    flex-flow: column wrap;
}
```

4. How to gain more control over individual items in flexbox?

* Till now all the properties are applied to parent, for child items there are
  1. `order` (numerical values, change the order of items)\
       Initially every element got an order 0, when we assigning order to child items the lower the number, the prior it gets, eg:
        ```css
        .child__1{
          background: rgb(31, 61, 134);
        }
        .child__2{
          background: rgb(172, 57, 53);
          order: 3;
        }

        .child__3{
          background: rgb(149, 43, 140);
          order: 1;
        }

        .child__4{
          background: rgb(34, 3, 121);
          order: 2;
        }
        ```
        <img src="./images/flexbox-4.png"
            alt="flex-box"
            style="display: block; margin-right: 10px; width: 400px" />

       See how just changing the order alters the base order, child-1 still stays first because it got the initial order of 0. The higher the number its going to push to last.

  2. flex-grow (numerical, Change the size of each child)
       for eg, we got three children, and
       ```css
        .child__1{
          background: rgb(31, 61, 134);
          /* Give a flex-grow */
          flex-grow: 1;
        }
        .child__2{
          background: rgb(172, 57, 53);
        }

        .child__3{
          background: rgb(149, 43, 140);
        }
        ```
        <img src="./images/flexbox-5.png"
            alt="flex-box"
            style="display: block; margin-right: 10px; width: 400px" />

          It takes all the space left or available (the empty space), if put `flex-grow: 2` on the second child,
          <img src="./images/flexbox-6.png"
               alt="flex-box"
               style="display: block; margin-right: 10px; width: 400px" />

          It basically divides the remaining space and first one takes `1/3` part and 2nd child takes `2/3` part,
          and it is responsive, better suited for responsive design.\
          If I give `flex-grow: 1` to all, all items takes up equal space.
  3. flex-shrink (opposite to flex-grow)
  4. flex-basis (defines a basic width for individual item, can use instead of width)

       One can combine this all in a single property, `flex:`, like
       ```css
        .child__1{
          background: rgb(31, 61, 134);
        }
        .child__2{
          background: rgb(172, 57, 53);
          /* specifies flex-grow, flex-shrink, flex-basis (shorthand) */
          flex: 1 0 auto;
        }

        .child__3{
          background: rgb(149, 43, 140);
        }
        ```

       The auto is the default value. The overall default flex value is `flex: 0 1 auto;`, so if it just applies
       `flex: 1`(means `flex-grow: 1`, rest default), the rest is going to get defaulted, to display

        ```css
        .child__1{
           background: rgb(31, 61, 134);
           flex: 1 1 300px;
        }
        .child__2{
           background: rgb(172, 57, 53);
           flex: 1 1 300px;
        }
        .child__3{
           background: rgb(149, 43, 140);
           flex: 1 1 300px;
        }
        ```
        So each element is given a flex grow of 1 and min width of 300px,
        <img src="./images/flexbox-7.png"
            alt="flex-box"
            style="display: block; margin-right: 10px; width: 400px" />

        So when the viewport width shrinks down and reaches, 3 * 300 = 900px,\
        The last item gets down and takes the whole area,
        <img src="./images/flexbox-8.png"
            alt="flex-box"
            style="display: block; margin-right: 10px; width: 400px" />

    5. align-self property

        Lets one align the individual items, rather than the global flex arrangement
        ```css
        .child__1{
             background: rgb(31, 61, 134);
         }
         .child__2{
             background: rgb(172, 57, 53);
             align-self: center;
         }
         .child__3{
             background: rgb(149, 43, 140);
             align-self: flex-end;
         }
        ```
        <img src="./images/flexbox-9.png"
            alt="flex-box"
            style="display: block; margin-right: 10px; width: 400px" />