// JavaScript файлы не требуют явного указания кодировки, но для поддержки читаемости и совместимости, можно добавить комментарий с указанием кодировки.
// @charset "utf-8";
window.addEventListener('DOMContentLoaded', function() {
    var messageElement = document.getElementById('message');
    var changeBtn = document.getElementById('changeBtn');

    changeBtn.addEventListener('click', function() {
        messageElement.textContent = 'Привет, OpenAI!';
    });
});

