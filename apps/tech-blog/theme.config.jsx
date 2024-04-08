import { useRouter } from 'next/router';

export default {
  useNextSeoProps() {
    const { asPath, locale } = useRouter();

    if (asPath !== '/') {
      return {
        titleTemplate:
          locale === 'ko' ? '%s – 작은 앱 프로젝트' : '%s – Small App Project',
      };
    }
  },

  logo: () => {
    const { locale } = useRouter();

    return (
      <strong style={{ fontSize: '19px' }}>
        {locale === 'ko' ? '작은 앱 기술 블로그' : 'Small App Tech Blog'}
      </strong>
    );
  },

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

  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ko', text: '한국어' },
  ],
  // ... other theme options
};
