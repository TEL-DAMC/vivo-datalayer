/**
 * This event MUST be triggered on every new page.
 */
window.dataLayer.push({
    event: 'page-init',
    environment: {
        name: string,
        platform: 'app-webview' | 'desktop' | 'mobile' | 'responsive'
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
         * The current version for the page, if available. Ideally in the SemVer format
         * e.g.: '1.2.10'
         */
        version: string,
        /**
         * The name of the template used for the current page
         * e.g.: 'ProductPage', 'SearchResults', 'RegistrationForm'
         */
        template: string,

        area: 'b2b' | 'b2c' | 'institutional',
        segment: 'ecommerce' | 'ecare' | 'brand',
        /**
         * The `currentSubscription` must be present when the user is authenticated and
         * is currently viewing information about a plan (mobile, internet or landline)
         */
        currentSubscription: {
            /**
             * The subscription ID is the MSISDN or internal ID ofr the user's subscription
             */
            id: string,
            plan: {
                name: string,
                billing: 'postpaid' | 'prepaid' | 'control',
                type: 'mobile' | 'broadband' | 'landline' | 'tv',
                technology: '4g' | 'fiber' | 'dth' | 'dsl'
            }
        }
    },
    /**
     * The `user` property must only be filled when the user is AUTHENTICATED.
     * User input MUST NOT be entered on this property unless it is previously verified by a trusted service.
     */
    user: {
        info: {
            /**
             * The user's CPF (brazilian Natural Persons Register)
             * https://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
             */
            cpf: string,
            email: string,
            /**
             * The user's phone number in the MSISDN format CC + NDC + SN, where:
             * CC = Country Code
             * NDC = National Destination Code
             * SN = Subscriber Number
             *
             * Example: '5511987654321', where '55' is Brazil's Country Code,
             * '11' is the Destination Code for São Paulo and '987654321' is the user's Subscriber Number
             *
             */
            msisdn: string
        },
        location: {
            /**
             * The official state code in uppercase.
             *
             * Example: 'SP', 'RJ', 'BA'
             *
             */
            state: string,
            /**
             * The official city name without any diacritics, i.e. all special characters should be replaced by
             * their simplified version.
             *
             * Example: 'Sao Paulo', 'Sao Joao da Barra', 'Vitoria da Conquista'
             */
            city: string
        },
        loyalty: {
            'category': 'silver' | 'gold' | 'platinum' | 'vivo-v',
            'monthsAsMember': number
        },
        login: {
            isLoggedIn: boolean,
            /**
             * How the user loggd-in
             */
            type: 'cpf' | 'email' | 'msisdn' | 'cookie' | 'facebook' | 'mobile-connect'
        },
        /**
         * An array of every subscription the user has
         */
        subscriptions: [{
            /**
             * The subscription ID is the MSISDN or internal ID ofr the user's subscription
             */
            id: string,
            plan: {
                name: string,
                billing: 'postpaid' | 'prepaid' | 'control',
                type: 'mobile' | 'broadband' | 'landline' | 'tv',
                technology: '4g' | 'fiber' | 'dth' | 'dsl'
            }
        }]
    }
})

/**
 * This event MUST be triggered on every lead generated.
 * A LEAD is any business opportunity, such as a costumer giving us their phone number to call them about an offer
 */
window.dataLayer.push({
    event: 'lead-generated',
    lead: {
        /**
         *
         * Each of these leads happens at a specific moment that is different for each website.
         * Please consult the website data collection document or your contact at Vivo.
         *
         */
        type: 'click-to-call' | 'click-to-receive-a-call' | 'request-form' | 'chat',
        /**
         * The page element that initiated the lead, such as the 'hero-banner', the 'product-card',
         * 'contact-floater-bar', etc.
         */
        sourceCallToAction: string,
        /**
         * If the lead contains data about the user's technology coverage, we must include that
         */
        coverage: {
            status: boolean,
            location: {
                /**
                 * The official state code in uppercase.
                 *
                 * Example: 'SP', 'RJ', 'BA'
                 *
                 */
                state: string,
                /**
                 * The official city name without any diacritics, i.e. all special characters should be replaced by
                 * their simplified version.
                 *
                 * Example: 'Sao Paulo', 'Sao Joao da Barra', 'Vitoria da Conquista'
                 */
                city: string,
                /**
                 * The brazilian zipcode, also known as 'CEP'.
                 *
                 * Example: '04123-123'
                 *
                 */
                zipcode: string,
                /**
                 * The list of technologies available to the requested address.
                 * Some possible values are 'fiber', 'dth' and 'dsl'
                 *
                 * Example: ['fiber', 'dth']
                 *
                 */
                availableTechnology: [string]
            }
        }
    }
})

/**
 *  The Step EventMUST be triggered on EVERY step of each feature.
 *
 */
window.dataLayer.push({
    event: 'feature-step',
    feature: {
        /**
         * A descriptive name and type for the feature in a dasherized form.
         * The feature name and type will be given on the website data collection document
         * e.g.: 'segunda-via'
         */
        name: string,
        type: string,
        step: {
            /**
             * The step's name in a dasherized form.
             *
             * Example: 'product-selection', 'address-input', etc.
             */
            name: string,
            index: number,
            type: 'initial' | 'intermediary' | 'completion',
            success: boolean
        }
    }
})

/**
 *  The Step Interaction Event MUST be triggered on EVERY interaction with each feature.
 *
 */
window.dataLayer.push({
    event: 'feature-interaction',
    interaction: {
        name: string,
        value: 'next' | 'back' | 'cancel' | string
    },
    feature: {
        /**
         * A descriptive name and type for the feature in a dasherized form.
         * The feature name and type will be given on the website data collection document
         * e.g.: 'segunda-via'
         */
        name: string,
        type: string,
        step: {
            /**
             * The step's name in a dasherized form.
             *
             * Example: 'product-selection', 'address-input', etc.
             */
            name: string,
            index: number,
            type: 'initial' | 'intermediary' | 'completion',
            success: boolean
        }
    }
})

/**
 * The interface message event MUST BE triggered every time a message box is shown to the user.
 *
 */
window.dataLayer.push({
        event: 'interface-message',
        message: {
            type: 'warning' | 'success' | 'info' | 'error',
            name: string,
            code: string
        },
        /**
         * The `element` property is the HTMLElement that contains the message displayed to the user
         */
        element: HTMLElement
    }
)


/**
 * The ecommerce impressions event MUST BE triggered every time a page is
 * loaded with product cards and everytime product cards are dinamically added to the page
 *
 */
window.dataLayer.push({
    event: 'ecommerce-impressions',
    ecommerce: {
        currencyCode: 'BRL',
        /**
         * The `impressions` key is an ARRAY of products.
         * All keys are described on the website data collection document for each specific website
         */
        impressions: [{
            list: string,
            position: number,
            name: string,
            'id': string,
            /**
             * Product price must be in the format '00.00', always represented as a string
             */
            price: string,
            brand: string,
            category: string,
            variant: string,
            custom: {
                metrics: object,
                dimensions: object
            }
        }]
    }
})

/**
 * The ecommerce click event MUST BE triggered every time a product is clicked leading to a product detail page.
 *
 */
window.dataLayer.push({
    event: 'ecommerce-product-click',
    ecommerce: {
        click: {
            actionField: {
                /**
                 * Name of the list where the product was clicked on.
                 * Same as the 'list' field on an impression.
                 */
                list: string
            },
            /**
             * The `products` key is an ARRAY of products.
             * All keys are described on the website data collection document for each specific website
             */
            products: [{
                list: string,
                position: number,
                name: string,
                'id': string,
                /**
                 * Product price must be in the format '00.00', always represented as a string
                 */
                price: string,
                brand: string,
                category: string,
                variant: string,
                custom: {
                    metrics: object,
                    dimensions: object
                }
            }]
        }
    }
})

/**
 * The ecommerce product detail event MUST BE triggered every time a product detail page is displayed to the user.
 *
 */
window.dataLayer.push({
    event: 'ecommerce-product-detail',
    ecommerce: {
        detail: {
            /**
             * Here the `products` key is an ARRAY of ONE SINGLE product.
             * All keys are described on the website data collection document for each specific website
             */
            products: [{
                name: string,
                id: string,
                /**
                 * Product price must be in the format '00.00', always represented as a string
                 */
                price: string,
                brand: string,
                category: string,
                variant: string,
                custom: {
                    metrics: object,
                    dimensions: object
                }
            }]
        }
    }
})


/**
 * The ecommerce add-to-cart event MUST BE triggered every time one or more products are added to the cart at once.
 *
 */
window.dataLayer. push( {
    event: 'ecommerce-add-to-cart',
        ecommerce: {
        currencyCode: 'BRL',
        add: {
            /**
             * Here the `products` key is an ARRAY of products.
             * All keys are described on the website data collection document for each specific website
             */
            products: [{
                name: string,
                id: string,
                /**
                 * Product price must be in the format '00.00', always represented as a string
                 */
                price: string,
                brand: string,
                category: string,
                variant: string,
                custom: {
                    metrics: object,
                    dimensions: object
                },
                quantity: number
            }]
        }
    }
})
/**
 * The ecommerce remove-from-cart event MUST BE triggered every time one or more products are removed the cart at once.
 *
 */
window.dataLayer. push({
    event: 'ecommerce-remove-from-cart',
        ecommerce: {
        currencyCode: 'BRL',
        remove: {
            /**
             * Here the `products` key is an ARRAY of products.
             * All keys are described on the website data collection document for each specific website
             */
            products: [{
                name: string,
                id: string,
                /**
                 * Product price must be in the format '00.00', always represented as a string
                 */
                price: string,
                brand: string,
                category: string,
                variant: string,
                custom: {
                    metrics: object,
                    dimensions: object
                },
                quantity: number
            }]
        }
    }
})