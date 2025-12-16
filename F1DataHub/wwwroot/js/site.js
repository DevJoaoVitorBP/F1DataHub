import { initTheme } from './core/theme.js';
import { initRacesPage } from './pages/races.js';

initTheme();

const currentPath = window.location.pathname.toLowerCase();
if (currentPath.includes('/races')) {
    initRacesPage();
}