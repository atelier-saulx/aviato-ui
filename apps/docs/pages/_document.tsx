import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '@aviato/ui'
import { preloadFonts } from '../utils/font-names'

export default class Document extends NextDocument {
  render() {
    const PreloadFonts: any = () => {
      return preloadFonts.map((fontName, key) => {
        const splitFont = fontName.split('.')
        const fontType = splitFont[splitFont.length - 1]

        return (
          <link
            key={`FontName-${key}`}
            rel="preload"
            href={`/fonts/${fontName}`}
            as="font"
            type={`font/${fontType}`}
            crossOrigin="anonymous"
          />
        )
      })
    }

    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <PreloadFonts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
