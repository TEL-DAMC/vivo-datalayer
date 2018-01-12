interface EnvironmentData {
    /**
     * A descriptive name for the environment in a dasherized form
     * e.g.: 'meu-vivo-mais'
     */
    name: string,
    platform: 'app-webview' | 'desktop' | 'mobile' | 'responsive'
}

interface PageData {
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

interface UserData {
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
        /**
         * How the user loggd-in
         */
        'type': 'cpf' | 'email' | 'msisdn' | 'cookie' | 'facebook' | 'mobile-connect'
    }
}


interface LeadData {
}

interface UserInputData {
}

declare namespace dataLayer {
    /**
     *  Pageview Event
     *  MUST be triggered on EVERY pageload and on EVERY page change, even on single-page applications
     * @param pageInitObject IMPORTANT: The `event` key  must be set to `"page-init"`
     */
    function push(pageInitObject: {
        event: 'page-init',
        environment: EnvironmentData,
        page: PageData,
        user?: UserData,
    })

    /**
     *  Lead Generation Event
     *  MUST be triggered on EVERY lead generation
     * @param leadObject IMPORTANT: The `event` key  must be set to `"lead-generated"`
     */
    function push(leadObject: {
        event: 'lead-generated',
        lead: LeadData,
        userInput?: UserInputData
    })
}

