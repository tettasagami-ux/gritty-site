import site from '../data/site.json';

/** 会社の構造化データ（検索結果で会社名と公式サイトを結びつけるため）。トップと会社概要で使う */
export const orgLd = {
  '@type': 'Organization',
  '@id': 'https://gritty.co.jp/#organization',
  name: site.company_name,
  legalName: site.company_name,
  alternateName: ['ＧＲＩＴＴＹ株式会社', 'グリッティ株式会社', 'GRITTY', 'GRITTY Inc.'],
  url: 'https://gritty.co.jp/',
  logo: 'https://gritty.co.jp/images/logo-mark.png',
  image: 'https://gritty.co.jp/images/logo-mark.png',
  email: site.email,
  telephone: '+81-' + site.tel.replace(/^0/, ''),
  foundingDate: '2026-05',
  founder: { '@type': 'Person', name: '大下 佑馬', jobTitle: '代表取締役' },
  address: {
    '@type': 'PostalAddress',
    postalCode: '183-0006',
    addressRegion: '東京都',
    addressLocality: '府中市',
    streetAddress: '緑町1-16-3',
    addressCountry: 'JP',
  },
  sameAs: [site.line_url],
};
