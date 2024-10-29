// elements with this class will perform the suggested animation
const targetClassName = 'animate'
// when an element has this class, animation is performed
const animatingClassName = 'text-animation';

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

// iterate over all target elements to add them the animating class
function intersectionCallback(intersectingEntries) {
  for (let j = 0; j < intersectingEntries.length; j++) {
    if (intersectingEntries[j].isIntersecting && intersectingEntries[j].intersectionRatio > observerOptions.threshold) {
      if (intersectingEntries[j].target && intersectingEntries[j].target.classList) {
        let animationClassName = intersectingEntries[j].target.dataset.animationclass;
        intersectingEntries[j].target.classList.add(animatingClassName, animationClassName);
      }
    }
  }
}

// when DOM is fully loaded, set intersection observer to observe elements with targetClassName
document.addEventListener('DOMContentLoaded', function() {
  let observer = new IntersectionObserver(intersectionCallback, observerOptions);
  let elementsAnimatedOnVisibility = document.getElementsByClassName(targetClassName);
  for (let i = 0; i < elementsAnimatedOnVisibility.length; i++) {
    observer.observe(elementsAnimatedOnVisibility[i]);
  }
});