jQuery.fn.flipAnimate = function(text) {
    var $o = $(this[0]); // It's your element
    $o.addClass("do-flip");
    $o.html = $($o.attr("data-flip"));
    $o.removeClass("do-flip");
    return this;
};

const content = document.querySelector(".content-container");
observer = new IntersectionObserver((entries) => {
    console.log(entries)
    let nav_title = document.querySelector("span.nav-blog-title")
    let nav_links = document.querySelector(".flipping-text")
    if (entries[0].intersectionRatio > 0) {
        nav_title.style.animation = `anim-title-in 1s forwards cubic-bezier(.19, 1, .22, 1)`;
        nav_links.style.animation = 'anim-links-out 1s forwards  cubic-bezier(.19, 1, .22, 1)';
    } else {
        nav_title.style.animation = `anim-title-out 1s forwards  cubic-bezier(.19, 1, .22, 1)`;
        nav_links.style.animation = 'anim-links-in 1s forwards  cubic-bezier(.19, 1, .22, 1)';
    }

})

observer.observe(content);





