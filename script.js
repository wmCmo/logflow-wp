const icons = document.querySelectorAll('img');

const mouseLeave = (icon) => {
    icon.classList.remove('up');
    icon.classList.remove('big');
}

icons.forEach(icon => icon.addEventListener('mouseenter', () => icon.classList.add('up')));
icons.forEach(icon => icon.addEventListener('mouseleave', () => mouseLeave(icon)));

icons.forEach(icon => icon.addEventListener('mousedown', () => icon.classList.add('big')));
icons.forEach(icon => icon.addEventListener('mouseup', () => mouseLeave(icon)));
