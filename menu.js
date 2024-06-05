window.addEventListener("scroll", function() {
    let fre = document.querySelector('#jsj')
    jsj.classList.toggle('revu', window.scrollY > 0)
})




















// window.addEventListener("scroll", function() {
//     let vitor = Document.querySelector
// })

// const myObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show')
//         } else {
//             entry.target.classList.remove('show')
//         }
//     })
// })


// const elements = document.querySelectorAll('.link')

// elements.forEach((element) => myObserver.observe(element))

// const observerCallback = (entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// }

// const myObserver = new IntersectionObserver(observerCallback);

// const elements = document.querySelectorAll('.link, .meio');

// elements.forEach((element) => myObserver.observe(element));