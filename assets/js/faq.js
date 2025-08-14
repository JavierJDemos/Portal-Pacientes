document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Cierra todas las respuestas excepto la que se clicó
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // Alterna la visibilidad de la respuesta
        faqItem.classList.toggle('active');
    });
});