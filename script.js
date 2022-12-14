const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
    }
    container.appendChild(row);
}

const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
    pixel.addEventListener('click', (e) => {
        
        if (pixel.classList[1] === 'activated') {
            pixel.classList.remove('activated')
        } else {
            pixel.classList.add('activated');
        }
    });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        pixel.classList.remove('activated');
    });
});