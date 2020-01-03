const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach(bar => {
    const {size} = bar.dataset;
    bar.style.width = `${size}%`;
});