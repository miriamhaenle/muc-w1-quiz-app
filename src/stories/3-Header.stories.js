export default {
  title: 'components/Header',
};

export const Header = (args) => ` <header class="header">
<h1>${args.innerText}</h1>
</header>`;

export const HeaderProfile = (args) => ` <header class="header">
<h1>${args.innerText}</h1>
</header>`;

Header.args = { innerText: 'Bookmarks' };
HeaderProfile.args = { innerText: 'Profile' };
