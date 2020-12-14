# CSS CUSTOM PROPERTIES
---

## CSS VARIABLES/CUSTOM PROPERTIES: PART 1
---
From a wide perspective, CSS variables just makes the whole css more manageable, can define custom colors, in a professional design that will got a color theme, we don't need to use multiple colors, on a project, so the custom colors in the design are specified as css variable along with other custom properties..

* The basic [learning boilerplate](https://codepen.io/kevinpowell/pen/KyEXwx) from KP yt channel.
* The [forked copy](https://codepen.io/akshaych/pen/abZLreY?editors=1100) for learning.

1. ### How to write one?
   Unlike SASS variables, the css custom variables need to be defined inside of a selector. Just like a property (eg: `font-size:` ), but the difference is browser knows this property and doesn't know our custom property, so it needed to defined before using.\
   They are defined in the `:root` of the html, the reason is because it got higher specificity than putting it in `html`, keep all the custom properties together in the root.\
   In the form
   ```css
       --name: value;
   ```
   * The two dashes let css know tht it is a custom property.
   ```css
   :root{
     --primary-clr: #456;

   }
   ```
2. ### How to use it?
   To use the above defined `primary-clr` css variable,
   ```css
    body{
        background-color: var(--primary-clr);
    }
   ```
3. ### Local application of css variables.
   If It is defined inside a particular class selector, it is only applicable to that class styles and not outside(ie, cz to use them globally, it is defined inside the `:root`)\
    ```css
    .intro {
    --secondary-color: #333;
    }
    ```
    If we use it outside in other class it wont work\
   *With sass if you made a mistake it just ignores it without breaking the site..*\
    can also add secondary option if the first one didn't work..(helps in debugging)
    ```css
    .sales-points {
     color: var(--secondary-color, gray);
   }
   ```
4. ### Overwriting variables.
   ```css
   :root{
      --primary-clr: #456;
      --secondary-color: #333;
   }

   h1, h2, h3{
       color: var(--secondary-clr);
   }

    /* Overwriting the variable*/
   .intro{
       --secondary--clr: green;
       color: var(--secondary-clr);
   }
   ```
   Now, the color of intro will be different although they are using the same variable.\
   But it is not a recommended practice, if you are gonna redefine them it actually defeating the original purpose of css variables.\
   Just understand they `cascade` just like any other property in css.

## CSS VARIABLES/CUSTOM PROPERTIES: PART 2
---
### Application..
* The [original boilerplate](https://codepen.io/kevinpowell/pen/OOKywZ) for learning.
* [Forked one](https://codepen.io/akshaych/pen/wvWPpzr)

    In the code, by just redefining the primary color at one place, with very much less css, the middle card can be made special, and stand out (also can think enormous, JS effects with that).\
    It is a very good example to follow and easy way to change colors on a system ie, already existing.\
    Anything not gonna repeating.

## CSS VARIABLES/CUSTOM PROPERTIES: PART 3
---
### Usage inside media queries and Differences with SASS variables.
In the very basic level, the SASS variables and CSS variables look the same but inside they are not
* The SASS is a pre-processor, it replaces the variables with what you want in the pre-processing phase. In the end the CSS just looks like normal css.
* But with custom properties(CSS variables), they are not replaced with the actual value, the browser looks it as the variable. When inspecting it shows as actual variables. (It is more useful with JS and can be used for theaming and stuff, not possible with SASS variables)
* The CSS variables can be redefined thats not the case with SASS, the [learning boilerplate 1](https://codepen.io/kevinpowell/pen/b3988c73816404c8da79ac7a0a663fa6) and [learning boilerplate 2](https://codepen.io/kevinpowell/pen/979bb8daa5c3fbdde61e03aa7c0f2385)
* In [learning boilerplate 1](https://codepen.io/kevinpowell/pen/b3988c73816404c8da79ac7a0a663fa6), the font-change doesn't work, to make that work.
  ```scss
  $h1-fs-small: 45px;
  $h1-fs-large: 100px;

  h1{
      font-size: $h1-fs-small;
  }

  @media(min-width: 800px) {
      h1{
          font-size: $h1-fs-large;
      }
  }
  ```
  The sass variables cannot be redefined,
* But with css variables.
    ```css
    :root{
        --h1-fs: 45px;
    }
    @media (min-width: 800px) {
        :root{
            --h1-fs: 100px;
        }
    }

    h1{
        font-size: var(--h1-fs);
    }
    ```
    Look the [sample](https://codepen.io/kevinpowell/pen/RxNKeW?editors=0110) for a large project that minimizes the number of variables required.
    ```css
    /* The CSS variable way */

    :root {
      /* body, h1, h2 */
      --fs-b: .8rem;
      --fs-h1: 2rem;
      --fs-h2: 1.2rem;
    }

    @media(min-width: 800px) {
      :root {
        --fs-b: 1rem;
        --fs-h1: 3rem;
        --fs-h2: 1.5rem;
      }
    }

    h1 {
      font-size: var(--fs-h1);
    }

    h2 {
      font-size: var(--fs-h2);
    }

    h3 {
      font-size: var(--fs-h3);
    }
    ```
## CSS VARIABLES/CUSTOM PROPERTIES: PART 4
---
### FALLBACK HELL
* As of 2020, [95%](https://caniuse.com/?search=custom%20variables) browser support is there for the css variables,
* But to use in older browsers like in IE, use the prefix original styles as a fallback.
* Look at these [awesome effect](https://codepen.io/kevinpowell/pen/jYEGNR/) by KP
```css
h1{
  color: #333;
  color: var(--primary-color);
}
```
### Fallbacks made easier with SASS.
---
* Look at the [forked pen](https://codepen.io/akshaych/pen/WNxdjQa?editors=0100)
* switching from `:root` to `$vars` with sass, like
  ```css
  :root{
    --yellow: #ff0;
  }
  ```
  ```scss
  $vars: (
    yellow: #ff0,
  );
  ```
* This is a `sass map`, with all variables (more like a dictionary or maps)
* Then in :root use a sass function to turn them into css variable
  ```scss
  :root{
    @each $prop, $value in $vars{
      // Interpolation in SASS
      --#{$prop}: #{$value};
    }
  }
  ```
* This compiles back the original root, it is simple, use a map and turn it in to css custom properties
* Creating a `@mixin` with SASS,
  ```scss
  @mixin var($property, $variable) {
    // the fallback
    #{$property}: map-get($vars, $variable);
    // custom property
    #{$property}: var(--#{$variable});
  }

  // To include and use the mixin
  body{
    @include var(background, yellow)
  }
  ```
* To automate all the fall back get property value from the map, using `map-get()`

## CSS VARIABLES/CUSTOM PROPERTIES: PART 5
---

### CSS variables with JavaScript
---
* Using JS to manipulate CSS variables,
* Add a button on that button press change the background color to green.
```javascript
const colorButton = document.querySelector("button");
// Selecting the variable yellow which is set as the background color.
const colorVariable = "--yellow";

// Change color when button clicked
colorButton.addEventListener('click', _ => {
  //Variable is in root
  document.documentElement.style.setProperty(colorVariable, "green");
});

```
* Using an HTML color selector(`<input type="color">`) to select and apply background,
```javascript
const colorInput = document.querySelector("input[type=color]");

colorInput.addEventListener('change', e => {
   document.documentElement.style.setProperty(colorVariable, e.target.value);
})
```
Now the background color is the value selected.