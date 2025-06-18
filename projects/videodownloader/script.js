document.getElementById('downloadBtn').addEventListener('click', () => {
  const url = document.getElementById('videoUrl').value.trim();
  const messageEl = document.getElementById('message');

  if (!url) {
    messageEl.textContent = 'Please enter a video URL.';
    return;
  }

  if (!url.startsWith('http')) {
    messageEl.textContent = 'Please enter a valid URL.';
    return;
  }

  messageEl.textContent = 'Starting download for: ' + url;

  // Simulate download by opening URL in new tab
  window.open(url, '_blank');
});
