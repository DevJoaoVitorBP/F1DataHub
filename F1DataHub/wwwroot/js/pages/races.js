function selectOne(selector, root = document) { return root.querySelector(selector); }
function selectAll(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }

export function initRacesPage() {
  const chips = selectOne('#raceStatusChips');
  const rows = selectAll('[data-race-row]');
  const dropdown = selectOne('.races-season-dropdown');

  if (!chips || rows.length === 0) {
    return;
  }

  chips.addEventListener('click', e => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;

    chips.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    rows.forEach(row => {
      const status = row.getAttribute('data-status');
      const visible = filter === 'all' || status === filter;
      row.classList.toggle('d-none', !visible);
    });
  });

  if (dropdown) {
    const menu = dropdown.querySelector('.dropdown-menu');
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (menu && toggle) {
      menu.addEventListener('click', e => {
        const item = e.target.closest('a[data-year]');
        if (!item) return;
        e.preventDefault();
        toggle.textContent = item.getAttribute('data-year');
      });
    }
  }
}
