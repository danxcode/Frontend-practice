document.addEventListener('DOMContentLoaded', () => {

    const toggles = document.querySelectorAll('.dropdown-toggle');

    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const dropdown = btn.parentElement;
            const isOpen = dropdown.classList.contains('open');

            // برای ری‌استارت شدن انیمیشن ورود آیتم‌ها هر بار که باز می‌شود
            if (!isOpen) {
                const items = dropdown.querySelectorAll(
                    ':scope > .dropdown-content > .dropdown-inner > ul > li'
                );
                items.forEach(li => {
                    li.style.animation = 'none';
                    // فورس ری‌فلو تا انیمیشن دوباره اجرا بشه
                    void li.offsetWidth;
                    li.style.animation = '';
                });
            }

            dropdown.classList.toggle('open');
            btn.setAttribute('aria-expanded', String(!isOpen));
        });
    });

});
