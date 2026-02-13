const shareBtn = document.getElementById('shareBtn');
const shareBubble = document.getElementById('shareBubble');

shareBtn.addEventListener('click', () => {
  shareBubble.classList.toggle('active');
  shareBtn.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!shareBtn.contains(e.target) && !shareBubble.contains(e.target)) {
    shareBubble.classList.remove('active');
    shareBtn.classList.remove('active');
  }
});