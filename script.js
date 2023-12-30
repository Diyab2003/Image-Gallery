const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
  
  const images = ['fullmoon.jpeg', 'bluemoon.jpeg', 'strawberrymoon.jpeg', 'bloodmoon.jpeg', 'sturgeonmoon.jpeg' 'pinkmoon.jpeg', 'wolfmoon.jpeg',  ];
const alts = {
  'fullmoon.jpeg': '1st Icon',
  'bluemoon.jpeg': '2nd Icon',
  'strawberrymoon.jpeg': '3rd Icon',
  'bloodmoon.jpeg': '4th Icon',
  'sturgeonmoon.jpeg': '5th Icon',
  'pinkmoon.jpeg': '6th Icon',
  'wolfmoon.jpeg': '7th Icon',
};


for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.getAttribute('src');
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
