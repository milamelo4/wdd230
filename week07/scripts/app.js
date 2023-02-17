// Get all images with data-src attribute. The 'img[data-src]' will look at ever img that has the data-src attribute. Anything inside a bracket means is looking for a attribute.
const imagesToLoad = document.querySelectorAll("[data-src]");

//Optional parameter for IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src")
    };
};

// Check if Intersection Observer is supported
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(img => {
        observer.observe(img)
    });
}else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    })
}
