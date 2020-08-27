
export default function BlogPage ({ locale, title, value }) {
  return (
    <>
      <p>Locale: {locale}</p>
      <p>Title: {title}</p>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      locale: params?.locale,
      title: params?.title,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [
        { params: { locale: 'en', title: 'test' } },
        { params: { locale: 'pt', title: 'teste' } },
    ],
    fallback: false,
  };
}