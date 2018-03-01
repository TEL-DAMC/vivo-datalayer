/**
 * This event MUST be triggered on every new page.
 */
window.dataLayer.push({
  event: 'page-init',
  environment: {
    name: 'loja-online',
    platform: 'app-meuvivo' | 'desktop' | 'mobile' | 'responsive'
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

    area: 'b2c',
    segment: 'ecommerce',
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
      }
    }
  },
  cart: {
    plan: {
      name: string,
      transaction: 'portability' || 'new-line' || 'change-plan',
      billing: 'postpaid' || 'prepaid' || 'control'
    },
    phone: {
      name: string,
      id: string,
      brand: string,
      price: number
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
      }
    }]
  }
})

/**
 *  A product 'impression' is when the product is shown to the user.
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
      position: number, // starts on 1 (not on 0)
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
        dimensions: {
          availability: boolean
        }
      },
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
        id: string,
        /**
         * Product price must be in the format '00.00', always represented as a string
         */
        price: string,
        brand: string,
        category: string,
        variant: string,
        custom: {
          dimensions: {
            availability: boolean
          }
        },
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
          dimensions: {
            availability: boolean
          }
        },
      }]
    }
  }
})

/**
 * The ecommerce add-to-cart event MUST BE triggered every time one or more products are added to the cart at once.
 *
 */
window.dataLayer.push({
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
          dimensions: {
            availability: boolean
          }
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
window.dataLayer.push({
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
        quantity: number
      }]
    }
  }
})

/**
 * The ecommerce checkout step event MUST BE triggered on every checkout step.
 *
 */
window.dataLayer.push({
  event: 'ecommerce-checkout-step',
  ecommerce: {
    currencyCode: 'BRL',
    checkout: {
      sctionField: {
        /**
         * The stage of the checkout process in which the user currently is
         */
        step: number,
        /**
         * An optional field that may be requested in the
         * website data collection document. It it's not there, just ignore it ;)
         */
        option: string
      },
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
        quantity: number
      }]
    }
  }
})

/**
 * The ecommerce purchase event MUST BE triggered upon the transaction confirmation.
 *
 */
window.dataLayer.push({
  event: 'ecommerce-purchase',
  ecommerce: {
    purchase: {
      actionField: {
        /**
         * Transaction ID
         */
        id: string,
        /**
         * Affiliated store or substore
         */
        affiliation: string,
        /**
         * The revenue in the '00.00' format, always as a string
         */
        revenue: string,
        /**
         * The tax in the '00.00' format, always as a string
         */
        tax: string,
        /**
         * The shipping in the '00.00' format, always as a string
         */
        shipping: string,
        /**
         * Optional - coupon code used on the purchase
         */
        coupon: string
      },
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
        quantity: number,
        /**
         * Optional - coupon code used on the purchase of this specific product
         */
        coupon: string
      }]
    }
  }
})