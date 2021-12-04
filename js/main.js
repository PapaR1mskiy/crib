/**
 * Універсальний код для вставки src у iframe
 */
$('.js-call-iframe').click(function (e) {
	e.preventDefault();

	// Витягуємо data атрибути
	const forIframe = $(this).data('for-iframe');
	const iframeSrc = $(this).data('iframe-src');

	// Вставляємо у потрібний нам iframe атрибут src
	$(forIframe).attr('src', iframeSrc);

	// Приховуємо картинку і показуємо iframe
	$(forIframe).addClass('d-block');
	$(this).addClass('d-none');
});
