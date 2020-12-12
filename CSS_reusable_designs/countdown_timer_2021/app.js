'use strict';

// tilt the card

// eslint-disable-next-line no-undef
VanillaTilt.init(document.querySelector('.card'), {
  max: 15,
  speed: 400,
  glare: true,
  'max-glare': 0.5,
});
