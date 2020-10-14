import toggleBookmark from './bookmarks';

const home = document.querySelector('.js-home');
const bookmarksPage = document.querySelector('.js-bookmarks');
const createPage = document.querySelector('.js-create');
const profilePage = document.querySelector('.js-profile');

const homeButton = document.querySelector('.home');
const bookmarksButton = document.querySelector('.bookmarks');
const createButton = document.querySelector('.create');
const profileButton = document.querySelector('.profile-btn');

homeButton.addEventListener('click', () => {
  home.classList.remove('hidden');
  bookmarksPage.classList.add('hidden');
  createPage.classList.add('hidden');
  profilePage.classList.add('hidden');
});

bookmarksButton.addEventListener('click', () => {
  home.classList.add('hidden');
  bookmarksPage.classList.remove('hidden');
  createPage.classList.add('hidden');
  profilePage.classList.add('hidden');
});

createButton.addEventListener('click', () => {
  home.classList.add('hidden');
  bookmarksPage.classList.add('hidden');
  createPage.classList.remove('hidden');
  profilePage.classList.add('hidden');
});

profileButton.addEventListener('click', () => {
  home.classList.add('hidden');
  bookmarksPage.classList.add('hidden');
  createPage.classList.add('hidden');
  profilePage.classList.remove('hidden');
});

const bookmarks = document.querySelectorAll('.card__bookmark');
bookmarks.forEach(toggleBookmark);
