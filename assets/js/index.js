debugger;
var simplemde = new SimpleMDE({
  element: document.querySelector('.editor'),
  uploadImageCgi: location.pathname.replace('/index', '/uploadImg'),
  includeTOC: true,
  tocHeadings: 'h2,h3'
});

simplemde.toggleSideBySide();

setTimeout(function () {
  document.body.style.display = '';
});

document.title = 'Markdown编辑器';