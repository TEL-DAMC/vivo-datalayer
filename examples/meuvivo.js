/**
 * Evento de 'page-init' deve ser disparado em todas as mudanças de página.
 */
dataLayer.push({
  event: 'page-init',
  environment: {
    name: 'meu-vivo-movel-desktop',
    platform: 'desktop'
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
      'isLoggedIn': boolean,
      /**
       * How the user loggd-in
       */
      'type': 'cpf' | 'email' | 'msisdn' | 'cookie' | 'facebook' | 'mobile-connect'
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
 * FLUXO DE LOGIN
 */

/**
 * Login Screen
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'login',
    type: 'admin',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'main-login',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Login Screen
 * ON: After user changes a field
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'login',
    type: 'admin',
    step: {
      name: 'main-login',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'field-change',
    /**
     * Name of the field that was changed
     */
    value: string
  }
})

/**
 * Login Screen
 * ON: After user tries to submit the form
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'login',
    type: 'admin',
    step: {
      name: 'main-login',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'form-submission'
  }
})

/**
 * Login Screen
 * ON: After user tries to login with the alternative logins (Facebook or Mobile Connect)
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'login',
    type: 'admin',
    step: {
      name: 'main-login',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'alternative-login',
    value: 'facebook' | 'mobile-connect'
  }
})

/**
 * Login Screen
 * ON: After user clicks 'Esqueci a senha', 'esqueci email' or 'cadastro'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'login',
    type: 'admin',
    step: {
      name: 'main-login',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'registration-admin',
    value: 'forgot-password' | 'forgot-email' | 'create-account'
  }
})

/**
 * Login Screen
 * ON: Login success
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'login',
    type: 'admin',
    step: {
      name: 'login-success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Login Screen
 * ON: Interface warning when user tries to send form incorrectly, when a field is filled incorrectly, etc.
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning',
    /**
     * Name of the warning.
     * Please try to consider including the field that showed the error.
     */
    name: string,
    /**
     * Warning code, if available
     */
    code: string
  }
})

/**
 * Login Screen
 * ON: Server errors and unavailabilities
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'error',
    /**
     * Name of the warning.
     * Please try to consider including the field that showed the error.
     */
    name: string,
    /**
     * Warning code, if available
     */
    code: string
  }
})
