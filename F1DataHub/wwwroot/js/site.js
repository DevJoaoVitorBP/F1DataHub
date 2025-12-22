import { initTheme } from './core/theme.js';
import { initRacesPage } from './pages/races.js';
import { initDriversPage } from './pages/drivers.js';

initTheme();

const currentPath = window.location.pathname.toLowerCase();
if (currentPath.includes('/races')) {
    initRacesPage();
}

if (currentPath.includes('/drivers')) {
    initDriversPage();
}