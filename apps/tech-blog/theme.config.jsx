export default {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  editLink: {
    text: 'Edit!',
    // component: null,
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

  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ko', text: '한국어' },
  ],
  // ... other theme options
};
