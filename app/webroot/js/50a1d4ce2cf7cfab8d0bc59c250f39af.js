window.addEvent("domready", function (event) {tinyMCE.init({
mode : "specific_textareas",
editor_selector : "tinymce",
theme : "advanced",
language : "nl",
theme_advanced_buttons1 : "bold,italic,underline,seperator,strikethrough,
				justifyleft,justifycenter,justifyright,justifyfull,
				bullist,numlist,undo,redo,link,unlink",
theme_advanced_toolbar_location : "top",
theme_advanced_toolbar_align : "left",
theme_advanced_statusbar_location : "bottom",
});
});