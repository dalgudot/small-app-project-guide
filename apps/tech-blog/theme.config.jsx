export default {
  logo: <strong style={{ fontSize: '19px' }}>Small App Tech Blog</strong>,

  project: {
    link: 'https://github.com/dalgudot/small-app-project',
  },

  search: {
    placeholder: 'Search',
  },

  editLink: {
    // text: 'Edit!',
    component: null,
  },

  feedback: {
    content: null,
  },

  sidebar: {
    defaultMenuCollapseLevel: 3,
    autoCollapse: false,
    toggleButton: false,
  },

  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href='https://github.com/dalgudot/small-app-project' target='_blank'>
          KyungHwan Kim
        </a>
      </span>
    ),
  },

  toc: {
    backToTop: true,
  },

  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ko', text: '한국어' },
  ],
  // ... other theme options
};
