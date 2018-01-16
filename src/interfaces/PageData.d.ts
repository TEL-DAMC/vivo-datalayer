export interface PageData {
    /**
     * A descriptive name for the page in a dasherized form
     * e.g.: 'segunda-via-de-conta-passo-2'
     */
    'name': string,
    /**
     * The current page hierarchy, with each level separated by the '>' symbol
     * e.g.: 'fixa>assine>novas_cidades>teresina'
     */
    'hierarchy': string,
    /**
     * The current version for the page, if available. Ideally in the SemVer format
     * e.g.: '1.2.10'
     */
    'version'?: string,
    /**
     * The name of the template used for the current page
     * e.g.: 'ProductPage', 'SearchResults', 'RegistrationForm'
     */
    'template': string,
    /**
     * The name of the feature/journey/funnel in use
     * e.g.: 'segunda-via-fatura', 'troca-aparelho', 'ouvidoria', 'migracao-controle-giga'
     */
    'journey'?: string,
    /**
     * The current step of the journey/funnel the user is in
     */
    'step'?: number,
    'area': 'b2b' | 'b2c' | 'institutional',
    'segment': 'ecommerce' | 'ecare' | 'brand'
}