const bookmarks = document.querySelectorAll('.card__bookmark');

console.log(bookmarks);

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('card__bookmark--bmrkd');
  });
});
