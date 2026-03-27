document.getElementById('clickMe').addEventListener('click', () => {
  const pages = [
    'index.html',
    'about.html',
    'contact.html',
    'art.html',
    'edits.html'
  ];

  const randomIndex = Math.floor(Math.random() * pages.length);
  window.location.href = pages[randomIndex];
});