document.addEventListener("DOMContentLoaded", () => {
    const includeElements = document.querySelectorAll("[include-html]");

    includeElements.forEach(async (el) => {
        const file = el.getAttribute("include-html");
        try {
            const response = await fetch(file);
            const html = await response.text();
            el.innerHTML = html;
        } catch (error) {
            el.innerHTML = "<p>Error cargando " + file + "</p>";
        }
    });
});
