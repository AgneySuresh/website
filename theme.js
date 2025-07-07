const themes = [
    'gruvbox-dark', 'gruvbox-light',
    'catppuccin-dark', 'catppuccin-light',
    'everforest-dark', 'everforest-light'
];

let idx = 0;

function applyTheme(i) {
    document.body.className = themes[i];
    document.getElementById('theme-name').textContent =
        themes[i].replace('-', ' ').replace(/(^\w)/, c => c.toUpperCase());
    localStorage.setItem('selectedTheme', i); // Save theme index
}

function cycleTheme() {
    idx = (idx + 1) % themes.length;
    applyTheme(idx);
}

// On load: restore saved theme
const savedIdx = localStorage.getItem('selectedTheme');
if (savedIdx !== null && themes[savedIdx]) {
    idx = parseInt(savedIdx);
    applyTheme(idx);
} else {
    applyTheme(0); // default
}