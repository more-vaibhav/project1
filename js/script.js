// -----------------
// my js
// -----------------
//Get the button:
mybutton = document.getElementById('flotingBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// Mobile dropdown toggle script
if (window.matchMedia('(max-width: 767px)').matches) {
  const dropdownToggles = document.getElementsByClassName('dropdown-toggle');
  for (const toggle of dropdownToggles) {
    toggle.setAttribute('data-bs-toggle', 'dropdown');
  }
}

// Desktop dropdown hover script
if (window.matchMedia('(min-width: 768px)').matches) {
  const dropdownMenus = document.getElementsByClassName('dropdown-menu');
  for (const menu of dropdownMenus) {
    menu.parentNode.addEventListener('mouseenter', function () {
      menu.classList.add('show');
    });
    menu.parentNode.addEventListener('mouseleave', function () {
      menu.classList.remove('show');
    });
  }
}

// cursor
// Get all elements that match the selector
const cursors = document.querySelectorAll('.cursor');
const anchors = document.querySelectorAll('a');

// Add event listeners to each element
cursors.forEach((cursor) => {
  document.addEventListener('mousemove', (e) => {
    setTimeout(function () {
      requestAnimationFrame(function () {
        cursor.style.top = e.clientY + 2 + 'px';
        cursor.style.left = e.clientX + 2 + 'px';
      });
    }, 200); // delay of 100 milliseconds
  });
});
anchors.forEach((anchor) => {
  anchor.addEventListener('mouseenter', function () {
    cursors.forEach((cursor) => {
      cursor.classList.add('large');
    });
  });
  anchor.addEventListener('mouseleave', function () {
    cursors.forEach((cursor) => {
      cursor.classList.remove('large');
    });
  });
});

// $('.loop').owlCarousel({
//   center: true,
//   items: 2,
//   loop: true,
//   margin: 30,
//   autoplay: true,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     },
//     1000: {
//       items: 4,
//     },
//   },
// });
// $('.tool-lean').owlCarousel({
//   center: true,
//   items: 2,
//   loop: true,
//   margin: 30,
//   dots: false,
//   autoplay: true,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 2,
//     },
//     600: {
//       items: 2,
//     },
//     1000: {
//       items: 4,
//     },
//   },
// });
// $('.testo-carousel').owlCarousel({
//   center: true,
//   items: 1,
//   dots: true,
//   loop: true,
//   margin: 30,
//   autoplay: true,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//   },
// });
// $('.projects').owlCarousel({
//   center: true,
//   items: 3,
//   dots: true,
//   loop: true,
//   margin: 30,
//   autoplay: true,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//   },
// });

// $('.nonloop').owlCarousel({
//   center: true,
//   items: 2,
//   autoplay: true,
//   mouseDrag: true,
//   dots: true,
//   autoplayHoverPause: true,
//   loop: false,
//   margin: 20,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//   },
// });

// $('#portfolio-carousel').owlCarousel({
//   loop: true,
//   margin: 10,
//   animateOut: 'fadeOut',
//   // autoplay: true,
//   autoplayTimeout: 5000,
//   // autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });
