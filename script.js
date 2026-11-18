document.addEventListener('DOMContentLoaded', () => {
    // 1. Alternância de Modo Claro / Escuro
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    const label = themeToggle.querySelector('span');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        label.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
    });

    // 2. Botão Copiar E-mail
    const copyBtn = document.getElementById('copy-email');
    const emailText = document.getElementById('email-text').textContent;
    const copyFeedback = document.getElementById('copy-feedback');

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emailText).then(() => {
            copyFeedback.style.display = 'inline-block';
            setTimeout(() => {
                copyFeedback.style.display = 'none';
            }, 2000);
        });
    });

    // 3. Filtro Interativo por Área (Todos, TI, Administrativo)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Atualiza botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedFilter = button.getAttribute('data-filter');

            filterItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                if (selectedFilter === 'all' || categories.includes(selectedFilter)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});