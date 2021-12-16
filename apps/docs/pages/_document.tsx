import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { globalStylesText, getCssText } from '@aviato/ui'
import { PreloadFonts } from '../utils/fonts'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <PreloadFonts />
          <style
            id="global-styles"
            dangerouslySetInnerHTML={{
              __html: globalStylesText(),
            }}
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{
              __html: getCssText(),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
