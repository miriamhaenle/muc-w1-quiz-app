export function toggleBookmark(bookmark) {
  bookmark.addEventListener('click', () =>
    bookmark.classList.toggle('card__bookmark--bmrkd')
  );
}
