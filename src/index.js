const bookmarks = document.querySelectorAll('.card__bookmark');

bookmarks.forEach(toggleBookmark);

function toggleBookmark(bookmark) {
  bookmark.addEventListener('click', () =>
    bookmark.classList.toggle('card__bookmark--bmrkd')
  );
}
