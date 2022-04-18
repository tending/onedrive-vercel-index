import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <meta name="description" content="OneDrive Vercel Index" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
