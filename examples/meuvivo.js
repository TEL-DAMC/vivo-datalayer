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
    name: 'form-submission',
    value: 'cpf' | 'email' | 'msisdn'
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})

/**
 * FEATURE DE EXTRATO
 */

/**
 * Extrato Screen
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Extrato Screen
 * ON: After load Lightbox "Extrato Completo Mensal"
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'select-month',
      index: 2,
      type: 'intermediary'
    }
  }
})

/**
 * Extrato Screen
 * ON: After user clicks 'Consultar' in lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      name: 'select-month',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'consult',
    value: 'next' | 'back' | 'cancel' |
  }
})
/**
 * Extrato Screen
 * ON: After load Screen "Extrato Completo Mensal"
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'complete',
      index: 3,
      type: 'intermediary'
    }
  }
})

/**
 * Extrato Screen
 * ON: After user clicks 'Consultar' in lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      name: 'complete-statement',
      index: 3,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'choose-export-action',
    value: 'to-print'| 'salve-to-pdf' | 'send-by-email'
  }
})

/**
 * Extrato Screen
 * * ON: After load lightbox to email confirmation
 */


dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'send-email',
      index: 4,
      type: 'intermediary'
    }
  }
})

/**
 * Extrato Screen
 * ON: After user clicks 'Cancelar' or 'Enviar' in lightbox to email confirmation
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      name: 'statement',
      index: 4,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'send-email',
    value: 'next' |'cancel' |
  }
})

/**
 * Extrato Screen
 * ON: After user clicks 'Enviar' or 'Cancelar' in lightbox to email confirmation
 */


dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.

       */
      name: 'confirm-email',
      index: 5,
      type: 'intermediary'
    }
  }
})

/**
 * Extrato Screen
 * * ON: After uploading the email sending confirmation lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      name: 'confirm-email',
      index: 5,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm-email',
    value: 'next' | 'cancel' |
  }
})


/**
 * Extrato Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      name: 'success',
      index: 6,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Extrato Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Extrato Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})




---------------------------------------------------

/**
 * FEATURE DE CONTROLE DE CONSUMO - JORNADA DE ATIVAÇÃO
 */


/**
 * Controle de Consumo Screen
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consumption-control-activation',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Controle de Consumo Screen
 * ON: After user clicks 'Ativar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'consumption-control-activation',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'to-active',
    value: 'next' | 'cancel'
  }
})



/**
 * Controle de Consumo Screen
 * ON: Loading the confirmation box

 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consumption-control-activation',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'confirm',
      index: 2,
      type: 'intermediary'
    }
  }
})

/**
 * Controle de Consumo Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'consumption-control-activation',
    type: 'consumption',
    step: {
      name: 'confirm',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next' | 'cancel'
  }
})


/**
 * Controle de Consumo Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consumption-control-activation',
    type: 'consumption',
    step: {
      name: 'success',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Controle de Consumo Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Controle de Consumo Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})
---------------------------------------------------------

/**
 * FEATURE DE CONTROLE DE CONSUMO - JORNADA DE DESATIVAÇÃO
 */


/**
 * Controle de Consumo Screen
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consumption-control-deactivation',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Controle de Consumo Screen
 * ON: After user clicks 'Desativar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'consumption-control-deactivation',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'to-disable',
    value: 'next'|'cancel'
  }
})



/**
 * Controle de Consumo Screen
 * ON: Loading the confirmation box

 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consumption-control-deactivation',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'confirm',
      index: 2,
      type: 'intermediary'
    }
  }
})

/**
 * Controle de Consumo Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'consumption-control-deactivation',
    type: 'consumption',
    step: {
      name: 'confirm',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next' | 'cancel'
  }
})


/**
 * Controle de Consumo Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consumption-control-deactivation',
    type: 'consumption',
    step: {
      name: 'success',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Controle de Consumo Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Controle de Consumo Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})


---------------------------------------------------------
/** FEATURE DE DETALHAMENTO DE CONSUMO POR E-MAIL - JORNADA DE ATIVAÇAO
*/
  /**
 * Detalhamento de Consumo por e-mail Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'detailing-email-consumption-activation',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Detalhamento de Consumo por e-mail Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'detailing-email-consumption-activation',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next' | 'cancel'
  }
})

  /**
 * Detalhamento de Consumo por e-mail Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'detailing-email-consumption-activation',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'select-data',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * Detalhamento de Consumo por e-mail Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'detailing-email-consumption-activation',
    type: 'consumption',
    step: {
      name: 'home',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'confirm' | 'cancel'
  }
})

/**
 * Detalhamento de Consumo por e-mail Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'detailing-email-consumption-activation',
    type: 'consumption',
    step: {
      name: 'success',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Detalhamento de Consumo por e-mail Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Detalhamento de Consumo por e-mail Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})

-------------------------------------------------------------------------------------

/** FEATURE DE DETALHAMENTO DE CONSUMO POR E-MAIL - JORNADA DE DESATIVAÇAO
*/
  /**
 * Detalhamento de Consumo por e-mail Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'detailing-email-consumption-deactivation',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Detalhamento de Consumo por e-mail Screen
 * ON: After user clicks 'Desativar' ou 'Alterar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'detailing-email-consumption-deactivation',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'options',
    value: 'disable'|'change'
  }
})

  /**
 * Detalhamento de Consumo por e-mail Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'detailing-email-consumption-deactivation',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'confirm',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * Detalhamento de Consumo por e-mail Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'detailing-email-consumption-deactivation',
    type: 'consumption',
    step: {
      name: 'confirm',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next' | 'cancel'
  }
})

/**
 * Detalhamento de Consumo por e-mail Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'detailing-email-consumption-deactivation',
    type: 'consumption',
    step: {
      name: 'success',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Detalhamento de Consumo por e-mail Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Detalhamento de Consumo por e-mail Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})


--------------------------------------------------------
/** FEATURE DE LANÇAMENTOS FUTUROS
*/
/**
 * Lançamentos Futuros Screen
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Lançamentos Futuros Screen
 * ON: After user clicks 'Consultar' in lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'select-month',
      index: 1,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'consult',
    value: 'next' | 'back' | 'cancel' |
  }
})


/**
 * Lançamentos Futuros Screen
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * Lançamentos Futuros Screen
 * ON: After load Lightbox "Extrato Completo Mensal"
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'select-month',
      index: 3,
      type: 'intermediary'
    }
  }
})

/**
 * Lançamentos Futuros Screen
 * ON: After user clicks 'Consultar' in lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'select-month',
      index: 3,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'consult',
    value: 'next' | 'back' | 'cancel' |
  }
})
/**
 * Lançamentos Futuros Screen
 * ON: After load Screen "Extrato Completo Mensal"
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'complete',
      index: 4,
      type: 'intermediary'
    }
  }
})

/**
 * Lançamentos Futuros Screen
 * ON: After user clicks 'Consultar' in lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'complete-statement',
      index: 4,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'choose-export-action',
    value: 'to-print'| 'salve-to-pdf' | 'send-by-email'
  }
})

/**
 * Lançamentos Futuros Screen
 * * ON: After load lightbox to email confirmation
 */


dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'send-email',
      index: 5,
      type: 'intermediary'
    }
  }
})

/**
 * Lançamentos Futuros Screen
 * ON: After user clicks 'Cancelar' or 'Enviar' in lightbox to email confirmation
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'statement',
      index: 5,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'send-email',
    value: 'next' |'cancel' |
  }
})

/**
 * Lançamentos Futuros Screen
 * ON: After user clicks 'Enviar' or 'Cancelar' in lightbox to email confirmation
 */


dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.

       */
      name: 'confirm-email',
      index: 6,
      type: 'intermediary'
    }
  }
})

/**
 * Lançamentos Futuros Screen
 * * ON: After uploading the email sending confirmation lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'confirm-email',
      index: 6,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm-email',
    value: 'next' | 'cancel' |
  }
})


/**
 * Lançamentos Futuros Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'success',
      index: 7,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Lançamentos Futuros Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Lançamentos Futuros Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})

------------------------------------------------------------
/** FEATURE DE MEU CONSUMO 
*/
/**
 * Meu Consumo Screen
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'my-consumption',
    type: 'my-consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Meu Consumo Screen
 * ON: After user clicks 'Consultar' in lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'my-consumption',
    type: 'my-consumption',
    step: {
      name: 'select-month',
      index: 1,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'consult',
    value: 'next' | 'back' | 'cancel' |
  }
})


/**
 * Meu Consumo Screen
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'my-consumption',
    type: 'my-consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * Meu Consumo Screen
 * ON: After load Lightbox "Extrato Completo Mensal"
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'my-consumption',
    type: 'my-consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'select-month',
      index: 3,
      type: 'intermediary'
    }
  }
})

/**
 * Meu Consumo Screen
 * ON: After user clicks 'Consultar' in lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'my-consumption',
    type: 'my-consumption',
    step: {
      name: 'select-month',
      index: 3,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'consult',
    value: 'next' | 'back' | 'cancel' |
  }
})

/**
 * Meu Consumo Screen
 * ON: After user clicks 'Enviar' or 'Cancelar' in lightbox to email confirmation
 */


dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'my-consumption',
    type: 'my-consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.

       */
      name: 'confirm-email',
      index: 4,
      type: 'intermediary'
    }
  }
})

/**
 * Meu Consumo Screen
 * * ON: After uploading the email sending confirmation lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'my-consumption',
    type: 'my-consumption',
    step: {
      name: 'confirm-email',
      index: 4,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm-email',
    value: 'next' | 'cancel' |
  }
})


/**
 * Meu Consumo Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'success',
      index: 5,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Meu Consumo Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Meu Consumo Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})
---------------------------------------------------------
---------------------------------------------------------
---------------------------------------------------------

/** FEATURE DE CONTAS - CONTA DIGITAL -JORNADA DE ATIVAÇAO
*/
  /**
 * Conta Digital Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Conta Digital Screen
 * ON: After user clicks 'Ativar Conta Digital'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'to-active',
    value: 'next'
  }
})

  /**
 * Conta Digital Screen
 * ON: Page load in e-mail confirmation
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'confirm-email',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * Conta Digital Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      name: 'home',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm-email',
    value: 'confirm' | 'cancel'
  }
})



/**
 * Conta Digital Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      name: 'success',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Conta Digital Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Conta Digital Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})

-------------------------------------------------------------------------------------

/** FEATURE DE DETALHAMENTO DE DÉBITO AUTOMÁTICO - JORNADA DE DESATIVAÇAO
*/
  /**
 * Conta Digital Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Conta Digital Screen
 * ON: After user clicks 'Desativar' ou 'Alterar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'options',
    value: 'disable'|'change'
  }
})

  /**
 * Conta Digital Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'to-disable',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * Conta Digital Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      name: 'to-disable',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'to-disable',
    value: 'next' | 'cancel'
  }
})

  /**
 * Conta Digital Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'confirm',
      index: 3,
      type: 'intermediary'
    }
  }
})


/**
 * Conta Digital Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      name: 'confirm',
      index: 3,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next' | 'cancel'
  }
})


/**
 * Conta Digital Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'digital-bill',
    type: 'bills',
    step: {
      name: 'success',
      index: 4,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Conta Digital Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Conta Digital Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})


--------------------------------------------------------
---------------------------------------------------------
---------------------------------------------------------

/** FEATURE DE CONTAS - DÉBITO AUTOMÁTICO -JORNADA DE ATIVAÇAO
*/
  /**
 * Débito Automático Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'direct-debt',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home-select-bank',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Débito Automático Screen
 * ON: After user clicks 'Ativar Conta Digital'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'direct-debt',
    type: 'bills',
    step: {
      name: 'home-select-bank',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'to-active',
    value: 'next'
  }
})

/**
 * Débito Automático Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'direct-debt',
    type: 'bills',
    step: {
      name: 'success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Débito Automático Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Débito Automático Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})

-------------------------------------------------------------------------------------

/** FEATURE DE DETALHAMENTO DÉBITO AUTOMÁTICO - JORNADA DE DESATIVAÇAO
*/
  /**
 * Débito Automático Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'direct-debt',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Débito Automático Screen
 * ON: After user clicks 'Desativar débito automático'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'direct-debt',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'disable',
    value: 'next'
  }
})

  /**
 * Débito Automático Screen
 * ON: Load lightbox automatic debit deactivation page
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'direct-debt',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'to-disable',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * Débito Automático Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'adress-change',
    type: 'bills',
    step: {
      name: 'to-disable',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'to-disable',
    value: 'next' | 'cancel'
  }
})


/**
 * Débito Automático Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'direct-debt',
    type: 'bills',
    step: {
      name: 'success',
      index: 4,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Débito Automático Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Débito Automático Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})


--------------------------------------------------------

/** FEATURE DE CONTAS - SEGUNDA VIA DE CONTAS - JORNADA DE ATIVAÇAO
*/
  /**
 * 2° Via de Contas Screen -  PEDIR PRA CAROL INSERIR
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'duplicate-bill',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * 2° Via de Contas Screen
 * ON: After user clicks 'Ativar Conta Digital'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'duplicate-bill',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'options',
    value: 'detail-duplicate-bill'| 'paid' | 'send-by-email'
  }
})

  /**
 * 2° Via de Contas Screen
 * ON: Page load detail duplicate bill
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'duplicate-bill',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'detail-duplicate-bill',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * 2° Via de Contas Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'duplicate-bill',
    type: 'bills',
    step: {
      name: 'detail-duplicate-bill',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'options',
    value: 'to-print'| 'salve-to-pdf'| 'send-by-email'
  }
})

  /**
 * 2° Via de Contas Screen
 * ON: Page load detail duplicate bill
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'duplicate-bill',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'send-by-email',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * 2° Via de Contas Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'duplicate-bill',
    type: 'bills',
    step: {
      name: 'send-by-email',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'send-email',
    value: 'next'
  }
})




/**
 * 2° Via de Contas Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'duplicate-bill',
    type: 'bills',
    step: {
      name: 'success',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})

/**
 * 2° Via de Contas Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * 2° Via de Contas Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})
--------------------------------------------------------
--------------------------------------------------------

/** FEATURE DE CONTAS - ENDEREÇO DE ENVIO - JORNADA DE ATIVAÇAO
*/
  /**
 * Endereço de Envio Screen  
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'adress-change',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Endereço de Envio Screen
 * ON: After user clicks 'Atterar endereço'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'adress-change',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'change-adress',
    value: 'next'
  }
})

  /**
 * Endereço de Envio Screen
 * ON: Page load detail duplicate bill
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'adress-change',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'change-adress',
      index: 2,
      type: 'intermediary'
    }
  }
})


/**
 * Endereço de Envio Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'duplicate-bill',
    type: 'bills',
    step: {
      name: 'change-adress',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next'
  }
})

/**
 * Endereço de Envio Screen
 * ON: Page load detail duplicate bill
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'adress-change',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'confirm-adress',
      index: 3,
      type: 'intermediary'
    }
  }
})


/**
 * Endereço de Envio Screen
 * ON: After user clicks 'Confirmar'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'duplicate-bill',
    type: 'bills',
    step: {
      name: 'confirm-adress',
      index: 3,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next'
  }
})


/**
 * Endereço de Envio Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'adress-change',
    type: 'bills',
    step: {
      name: 'success',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Endereço de Envio Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Endereço de Envio Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})

--------------------------------------------------------
---------------------------------------------------------
---------------------------------------------------------

/** FEATURE DE CONTAS - Desbloqueio de linha
*/
  /**
 * Desbloqueio de linha Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'line-unlock',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home-select-bank',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Desbloqueio de linha Screen
 * ON: After user clicks 'Confirmo o pagmento'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'line-unlock',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'to-active',
    value: 'next'
  }
})

/**
  * Desbloqueio de linha Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'line-unlock',
  feature: {
    name: 'line-unlock',
    type: 'bills',
    step: {
      name: 'success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Desbloqueio de Linha Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Desbloqueio de Linha Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})


  ---------------------------------------------
-------------------------------------------------
  ---------------------------------------------

---------------------------------------------------------
---------------------------------------------------------

/** FEATURE DE CONTAS - ENTENDA SUA CONTA
*/
  /**
 * Entenda sua Conta Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'understand-your-bill',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


  ---------------------------------------------
---------------------------------------------------------
---------------------------------------------------------

/** FEATURE DE CONTAS - BANCOS CONVENIADOS
*/
  /**
 * Bancos Conveniados Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'affiliated-companies',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})
----------------------------------------------------
-----------------------------------------------------
                     --------------

/** FEATURE DE CONTAS - TERMO DE QUITAÇÃO
*/
  /**
 * Termo de Quitação Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'acquittance',
    type: 'bills',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Termo de Quitação Screen
 * ON: After user clicks 'Confirmo o pagmento'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'acquittance',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'to-active',
    value: 'next'
  }
})

/**
 * Termo de Quitação Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'line-unlock',
  feature: {
    name: 'acquittance',
    type: 'bills',
    step: {
      name: 'success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Termo de Quitação Screen
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
  },
  /**
   * The element that diplays the warning, when available
   */
  element: HTMLElement
})

/**
 * Termo de Quitação Screen
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
  },
  /**
   * The element that diplays the error, when available
   */
  element: HTMLElement
})

