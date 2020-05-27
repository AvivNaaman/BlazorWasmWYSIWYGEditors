/**
 * Initializes CKEditor editor
 * @param {string} selector The TinyMCE selector
 */
function startCKEditor(selector) {
/* Remove existing instances */
    var paras = document.querySelectorAll(".ck-editor");
    for (var i = 0; i < paras.length; i++) paras[i].parentNode.removeChild(paras[i]);

    ClassicEditor.create(document.querySelector(selector))
        .then(editor => {
            editor.model.document.on('change:data', () => {
                var ta = document.querySelector(selector);
                /* Set the value */
                ta.value = editor.getData();
                /* and trigger the event */
                var event = document.createEvent("Events");
                event.initEvent("change", true, true);
                ta.dispatchEvent(event);
            });
            console.log(editor);
        })
        .catch(err => console.error(err));
}
/**
 * Initializes all textareas decrated with tinymce-editor-textarea class as tinymce editors.
 * @param {string} selector The TinyMCE selector
 */
function startTinyMCE(selector) {

    console.info(`Initializing TinyMCE for ${selector}`);

    removeTinyMceEditors();

    /* delay re-initialization */
    setTimeout(() =>
        tinymce.init({
            selector: selector,
            setup: editor => {
                /* on editor content change event */
                editor.on('change', e => {
                    var ta = document.querySelector(selector);
                    /* set the value */
                    ta.value = editor.getContent();
                    /* and trigger onchange event */
                    var event = document.createEvent("Events");
                    event.initEvent("change", true, true);
                    ta.dispatchEvent(event);
                });
            }
        }), 50);
}

/**
 * Removes all the existing TinyMCE editors
 */
function removeTinyMceEditors() {
    /* Remove leftover if such one exists */
    if (typeof (tinyMCE) !== 'undefined') {
        var length = tinyMCE.editors.length;
        for (var i = length; i > 0; i--) {
            tinyMCE.editors[i - 1].remove();
        };
    }
}