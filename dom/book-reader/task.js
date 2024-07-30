document.querySelectorAll('.font-size').forEach(fontSizeControl => {
    fontSizeControl.addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем переход по ссылке

        // Убираем класс активного элемента у всех элементов управления
        document.querySelectorAll('.font-size').forEach(link => {
            link.classList.remove('font-size_active');
        });

        // Добавляем класс активному элементу
        this.classList.add('font-size_active');

        // Получаем размер шрифта из атрибута data-size
        const size = this.getAttribute('data-size');
        const book = document.getElementById('book');

        // Удаляем все классы размера шрифта
        book.classList.remove('book_fs-small', 'book_fs-big');

        // В зависимости от выбранного размера добавляем соответствующий класс
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});
