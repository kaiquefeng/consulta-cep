import Document, { Head, Html } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&family=Poppins:wght@500&display=swap" rel="stylesheet"></link>

          <link rel="shortcut icon" href="/images/happy.svg" type="image/svg"/>

        </Head>
      </Html>
    )
  }
}