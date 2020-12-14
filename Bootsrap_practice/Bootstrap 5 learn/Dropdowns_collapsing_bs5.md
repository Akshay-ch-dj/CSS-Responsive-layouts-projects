# Dropdowns and Collapse in Bootstrap 5

Collapse:- [Collapse elements in bootstrap 5](https://getbootstrap.com/docs/5.0/components/collapse/)

## Dropdowns in Bootstrap 5

* Dropdowns can be triggered from `<a>` or `<button>` element.
* To use a link as a dropdown,

  ```html
  <div class="btn-group dropdown">
    <a
      class="btn btn-secondary btn-sm dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Profile
    </a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  ```

* To add a divider between dropdown links use, an empty div with class `dropdown-divider`.
* A split button can be added by,

  ```html
  <div class="dropdown btn-group">
  <button type="button" class="btn btn-danger">Click ME</button>
  <button
    class="btn btn-danger dropdown-toggle dropdown-toggle-split"
    id="dropDownBtn"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropDownBtn">
    <a class="dropdown-item" href="#">kdskjdsb</a>
    <a class="dropdown-item" href="#">kdskjdsb</a>
    <a class="dropdown-item" href="#">kdskjdsb</a>
  </div>
  ```

* The direction of arrow can be changed using the, `dropup`, `dropright`,..

## Collapse in Bootstrap 5

* The collapse is used to show and hide content. Collapsing an element will animate the height from its current value to 0.
* Can work with buttons(via `data-target`) and links(via `href`).
* `data-bs-toggle="collapse"` is required in both cases.
* class `.collapse` hides, `.collapsing` is applied during transitions, `.collapse.show` shows content.

Eg:-

 ```html
  <a class="btn btn-lg btn-warning" href="#mylink" role="button" aria-expanded="false" data-bs-toggle="collapse" aria-controls="collapseExample"> thurakk saami</a>

  <div class="collapse" id="mylink"><p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea officia minus! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  </p></div>
 ```

* Single target, can add any elements inside the second targeted link like cards etc.
* To set multiple targets, use classes instead of id's.(anywhere in the page.)