
document.addEventListener('DOMContentLoaded', function () {
const loginBox = document.querySelector('.loginBox');
const becomeSellerBox = document.querySelector('.becomeSellerBox');
const moreBox = document.querySelector('.moreBox');
const searchBox = document.querySelector('.searchBox');
const searchLogo = document.querySelector('.search-logo');
const searchInput = searchBox ? searchBox.querySelector('.input') : null;

if (moreBox) {
    moreBox.addEventListener('click', function () {
        this.classList.toggle('active');
    });
}

if (becomeSellerBox) {
    becomeSellerBox.addEventListener('click', function () {
        alert("Redirecting to seller registration page.");
    });
}

if (searchLogo && searchInput) {
    searchLogo.addEventListener('click', function () {
        if (searchInput.style.width === '300px') {
            searchInput.style.width = '200px';
        } else {
            searchInput.style.width = '300px';
        }
    });

    searchInput.addEventListener('focus', function () {
        this.style.width = '300px';
        searchLogo.classList.add('focused');
    });

    searchInput.addEventListener('blur', function () {
        if (this.value === '') {
            this.style.width = '200px';
            searchLogo.classList.remove('focused');
        }
    });
    
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
              
                fetch(`https://example.com/api/search?q=${encodeURIComponent(query)}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Search results:', data);
                    
                    })
                    .catch(error => console.error('There was a problem with the fetch operation:', error));

                
                this.value = ''; 
                this.style.width = '200px'; 
                searchLogo.classList.remove('focused'); 
            }
        }
    });
}


});

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-image');
  const totalSlides = slides.length;
  
  
  currentIndex = (index + totalSlides) % totalSlides;


  const offset = -currentIndex * 100; 
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}


setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000); 

