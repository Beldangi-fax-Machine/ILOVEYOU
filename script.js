function createGif() {
    const gif = document.createElement('div');
    gif.className = 'gif';
    gif.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(gif);
  }

  // Call createGif function to spawn GIFs every 500 milliseconds
  setInterval(createGif, 40);