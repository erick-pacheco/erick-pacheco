const global = "animate__animated ";
const mixin = (classes, fade) => classes + global + fade;

// return an animated function that takes in classes of the user and the animation class
export const animated = (classes, fade) => mixin(classes, fade);
