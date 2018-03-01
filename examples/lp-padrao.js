/**
 * This event MUST be triggered on every new page.
 */
window.dataLayer.push({
  event: 'page-init',
  environment: {
    name: string,
    platform: 'desktop' | 'mobile' | 'responsive'
  },
  campaign: {
    name: string,
    releaseDate: string, // e.g.: '2018-01-25'
    product: string // e.g.: 'Meu Vivo Movel', 'Vivo Fibra'
  },
  page: {
    /**
     * A descriptive name for the page in a dasherized form
     */
    name: string,
    /**
     * The current page hierarchy, with each level separated by the '>' symbol
     * e.g.: 'fixa>assine>novas_cidades>teresina'
     */
    hierarchy: string,
    /**
     * The current version for the page, if available. Ideally the release date
     * e.g.: '1.2.10' (SemVer) or '2018-01-25' (release date)
     */
    version: string,
    template: 'landing-page',
    area: 'b2c' | 'b2b' | 'brand',
    segment: 'ecommerce' | 'ecare' | 'brand'
  }
})
