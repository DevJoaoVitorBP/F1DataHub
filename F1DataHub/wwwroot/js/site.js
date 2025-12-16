(function () {
    const key = 'theme';
    const body = document.body;
    const saved = localStorage.getItem(key);

    if (saved === 'dark') {
        body.classList.add('theme-dark');
    }

    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            const isDark = body.classList.toggle('theme-dark');
            localStorage.setItem(key, isDark ? 'dark' : 'light');
        });
    }
})();