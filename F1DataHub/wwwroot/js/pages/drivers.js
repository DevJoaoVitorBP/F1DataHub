function selectOne(selector, root = document) { return root.querySelector(selector); }
function selectAll(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }

export function initDriversPage() {
  const search = selectOne('#driverSearch');
  const rows = selectAll('[data-driver-row]');
  const dropdown = selectOne('.drivers-season-dropdown');

  if (dropdown) {
    const menu = dropdown.querySelector('.dropdown-menu');
    const toggle = dropdown.querySelector('.dropdown-toggle');
    menu?.addEventListener('click', e => {
        const dataYear = e.target.closest('a[data-year]');
        if (!dataYear) return;
        e.preventDefault();
        if (toggle) toggle.textContent = dataYear.getAttribute('data-year');
    });
  }

  if (search && rows.length) {
    search.addEventListener('input', () => {
      const term = search.value.trim().toLowerCase();
      rows.forEach(row => {
          const dataName = row.getAttribute('data-name') || '';
          const visible = !term || dataName.includes(term);
        row.classList.toggle('d-none', !visible);
      });
    });
  }
}
