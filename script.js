document.addEventListener("DOMContentLoaded", () => {

    const toggles = document.querySelectorAll(".dropdown-toggle");

    toggles.forEach(button => {

        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const dropdown = this.parentElement;
            const isOpen = dropdown.classList.contains("open");

            // بستن دراپ‌داون‌های هم‌سطح
            const siblings = dropdown.parentElement.children;

            [...siblings].forEach(item => {

                if (item !== dropdown.parentElement) {

                    const childDropdown = item.querySelector(":scope > .dropdown");

                    if (childDropdown) {

                        childDropdown.classList.remove("open");

                        const btn = childDropdown.querySelector(":scope > .dropdown-toggle");

                        if (btn) {
                            btn.setAttribute("aria-expanded", "false");
                        }

                    }

                }

            });

            // ری‌استارت انیمیشن آیتم‌ها
            if (!isOpen) {

                const items = dropdown.querySelectorAll(
                    ":scope > .dropdown-content > .dropdown-inner > ul > li"
                );

                items.forEach(item => {

                    item.style.animation = "none";

                    void item.offsetWidth;

                    item.style.animation = "";

                });

            }

            dropdown.classList.toggle("open");

            this.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        });

    });

    // جلوگیری از بسته شدن والد هنگام کلیک داخل زیرمنو
    document.querySelectorAll(".dropdown-content").forEach(content => {

        content.addEventListener("click", e => {

            e.stopPropagation();

        });

    });

    // بستن همه Dropdownها با کلیک بیرون
    document.addEventListener("click", () => {

        document.querySelectorAll(".dropdown.open").forEach(dropdown => {

            dropdown.classList.remove("open");

            const button = dropdown.querySelector(":scope > .dropdown-toggle");

            if (button) {

                button.setAttribute("aria-expanded", "false");

            }

        });

    });

    // بستن با کلید Escape
    document.addEventListener("keydown", e => {

        if (e.key !== "Escape") return;

        document.querySelectorAll(".dropdown.open").forEach(dropdown => {

            dropdown.classList.remove("open");

            const button = dropdown.querySelector(":scope > .dropdown-toggle");

            if (button) {

                button.setAttribute("aria-expanded", "false");

            }

        });

    });

});