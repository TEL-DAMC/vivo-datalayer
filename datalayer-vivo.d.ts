/**
 * These are the datalayer definitions for the page level.
 * It MUST be created
 */
interface VivoDatalayerPageinit {
    event: 'page-init',
    environment: {
        /**
         * A descriptive name for the environment in a dasherized form
         * e.g.: 'meu-vivo-mais'
         */
        name: string,
        platform: 'app-webview' | 'desktop' | 'mobile' | 'responsive'
    },
    page: {
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
    },
    /**
     * Optional field containing data about the currently logged-in user.
     */
    'user'?: {
        'info'?: {
            'cpf'?: string,
            'email'?: string,
            'msisdn'?: string
        },
        'location'?: {
            'state'?: string,
            'city'?: string,
            'zipcode'?: string,
            'availableTechnology'?: {
                'fiber': boolean,
                'DTH': boolean,
                'DSL': boolean
            }
        },
        'loyalty': {
            'category': 'silver' | 'gold' | 'platinum' | 'vivo-v',
            'monthsAsMember': number
        },
        'login': {
            'isLoggedIn': boolean,
            'type': 'cpf' | 'email' | 'msisdn' | 'cookie' | 'facebook'
        }
    },
}

declare namespace dataLayer {
    function push(obj: VivoDatalayerPageinit)
}