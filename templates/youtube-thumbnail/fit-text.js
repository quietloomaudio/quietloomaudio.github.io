(() => {
  const fitLine = (line) => {
    const container = line.parentElement;
    const maxWidth = container.clientWidth;
    const minimum = Number.parseFloat(line.dataset.fitMin || '32');
    let size = Number.parseFloat(getComputedStyle(line).fontSize);

    line.style.width = 'max-content';
    line.style.maxWidth = 'none';

    while (line.getBoundingClientRect().width > maxWidth && size > minimum) {
      size = Math.max(minimum, size - 0.5);
      line.style.fontSize = size + 'px';
    }

    line.style.maxWidth = '100%';
  };

  document.fonts.ready.then(() => {
    document.querySelectorAll('[data-fit-text]').forEach(fitLine);
  });
})();
