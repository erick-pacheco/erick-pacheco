// see: https://animate.style/
const global = "animate__animated";

// mixin the class of the object and the animation
const mixin = (classes, fade) => classes + ' ' + global + ' ' + fade;
const animations = {
    animate__backInDown: 'animate__backInDown',
    animate__backInLeft: 'animate__backInLeft',
    animate__backInRight: 'animate__backInRight',
    animate__backInUp: 'animate__backInUp',
    animate__fadeInDown: 'animate__fadeInDown',
    animate__fadeInLeft: 'animate__fadeInLeft',
    animate__fadeInRight: 'animate__fadeInRight',
    animate__fadeInUp: 'animate__fadeInUp'
}

// return an animated function that takes in classes of the user and the animation class
const animated = (classes, animation) => mixin(classes, animation);

export { animated, animations }