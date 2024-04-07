export default {
  logo: <strong>Small App Dev Blog</strong>,

  project: {
    icon: null,
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
    autoCollapse: true,
    toggleButton: true,
  },

  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        {/* <a href='https://nextra.site' target='_blank'> */}
        KyungHwan Kim
        {/* </a> */}
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
