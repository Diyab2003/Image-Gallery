const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
  
  const images = ['fullmoon.jpeg', 'bluemoon.jpeg', 'strawberrymoon.jpeg', 'bloodmoon.jpeg', 'sturgeonmoon.jpeg'];
const alts = {
  'fullmoon.jpeg': 'Icon of 1',
  'bluemoon.jpeg': 'Icon of 2',
  'pinkmoon.jpeg': 'Icon of 3',
  'bloodmoon.jpeg': 'Icon of 4',
  'sturgeonmoon.jpeg': 'Icon of 5',
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
