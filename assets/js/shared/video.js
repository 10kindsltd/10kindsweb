// Click-to-play videos: hide the overlay and show controls on play, restore the poster when the video ends.
document.querySelectorAll('[data-video]').forEach((wrap) => {
  const video = wrap.querySelector('video');
  const overlay = wrap.querySelector('[data-video-play]');
  if (!video || !overlay) return;

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    video.controls = true;
    video.play();
  });

  video.addEventListener('ended', () => {
    video.controls = false;
    video.load();
    overlay.style.display = '';
  });
});
