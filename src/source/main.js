const compose = (f, g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;

const angry = compose(exclaim, toUpperCase);

angry("stop this");