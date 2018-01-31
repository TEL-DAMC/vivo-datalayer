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
/*
------------------------------------------
--------------------------------------------
-------------------------------------------
**/
/**
 * FEATURE DE CONTAS - CONSUMO DE INTERNET - DESKTOP
 */

/**
 * Consumo de Internet Screen - Desktop
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'internet-consumption',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Consumo de Internet Screen - Desktop
 * ON: After user clicks 'Contratar Pacotes' 
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'internet-consumption',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'to-hire',
    value: 'next'
  }
})


/*
------------------------------------------------------
------------------------------------------------------
*/


/**
 * FEATURE DE CONTAS - PEDIR INTERNET - MOBILE
 */

/**
 * Pedir Internet Screen - Mobile
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'ask-internet',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Pedir Internet Screen - Mobile
 * ON: After user clicks 'Confirmar' 
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'ask-internet',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next'
  }
})

/**
 * Pedir Internet Screen - Mobile
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'ask-internet',
    type: 'consumption',
    step: {
      name: 'success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Pedir Internet Screen - Mobile
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
 * Pedir Internet Screen - Mobile
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

/*
------------------------------------------------------
------------------------------------------------------
*/
/**
 * FEATURE DE CONTAS - COMPARTILHAR INTERNET - MOBILE
 */

/**
 * Compartilhar Internet Screen - Mobile
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'share-internet',
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
 * Compartilhar Internet Screen - Mobile
 * ON: After user clicks 'Continuar' 
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'share-internet',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'choose',
    value: 'confirm-number'|'log-view'
  }
})

/**
 * Compartilhar Internet Screen - Mobile
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'share-internet',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'shared-amount'|'log-view',
      index: 2,
      type: 'intermediary'
    }
  }
})

/**
 * Compartilhar Internet Screen - Mobile
 * ON: After user click on any quantity
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'share-internet',
    type: 'consumption',
    step: {
      name: 'shared-amount',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'choose-quantity',
    value: 'confirm'
  }
})

/**
 * Compartilhar Internet Screen - Mobile
 * ON: Page load
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'share-internet',
    type: 'consumption',
    step: {
      /**
       * The step's name in a dasherized form.
       *
       * Example: 'product-selection', 'address-input', etc.
       */
      name: 'confirms-shared-amount',
      index: 3,
      type: 'intermediary'
    }
  }
})

/**
 * Compartilhar Internet Screen - Mobile
 * ON: After user click on any quantity
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'share-internet',
    type: 'consumption',
    step: {
      name: 'confirms-shared-amount',
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
 * Compartilhar Internet Screen - Mobile
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'share-internet',
    type: 'consumption',
    step: {
      index: 4,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Compartilhar Internet Screen - Mobile
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
 * Compartilhar Internet Screen - Mobile
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



/*
------------------------------------------
--------------------------------------------
-------------------------------------------
**/

/**
 * FEATURE DE CONTAS - EXTRATO
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
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Extrato Screen
 * ON: After user clicks 'Entenda seus saldos'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'understand-your-balances',
    value: 'next'
  }
})

/**
 * Extrato Screen
 * ON: After click "Exportar por mês" load Lightbox "Selecionar o Mês"
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'statement',
    type: 'consumption',
    step: {
      
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
    value: 'next' | 'cancel'
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
      name: 'complete-statement',
      index: 3,
      type: 'intermediary'
    }
  }
})

/**
 * Extrato Screen
 * ON: After user choose option - "To print", "Salve to pdf" or "Send by email"
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
      type: 'send-email'
    }
  },
  interaction: {
    name: 'to-send',
    value: 'next' |'cancel'
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
    value: 'next' | 'cancel'
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

/**
---------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/
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
      name: 'confirm',
      index: 2,
      type: 'intermediary'
    }
  }
})
/**
* Controle de Consumo Screen
 * ON: Loading the confirmation box */
  
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
/**---------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/
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

/**
---------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/
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
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Detalhamento de Consumo por e-mail Screen
 * ON: After user clicks 'Confirmar' ou 'Cancelar'
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
 * ON: Page select data load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'detailing-email-consumption-activation',
    type: 'consumption',
    step: {
      
      name: 'select-date',
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
      name: 'select-date',
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
/**
-------------------------------------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/
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
      name: 'confirm-deactivation',
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
      name: 'confirm-deactivation',
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
 * ON: Success in deactivating the email
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'detailing-email-consumption-deactivation',
    type: 'consumption',
    step: {
      name: 'deactivation-success',
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

/**
--------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/

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
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Lançamentos Futuros Screen
 * ON: After user clicks 'Ver extrato completo' ou 'Cancelar algum sva'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'select-option',
    value: 'item-details' | 'cancel-sva' | 'complete-statement'
  }
})


/**
 * Lançamentos Futuros Screen
 * ON: Load lightbox to cancel sva
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'cancel-sva',
      index: 2,
      type: 'intermediary'
    }
  }
})

/**
 * Lançamentos Futuros Screen
 * ON: After user clicks 'Confirmar' or "Cancelar" cancellation sva in lightbox
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'schedules',
    type: 'consumption',
    step: {
      name: 'cancel-sva',
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
 * Lançamentos Futuros Screen
 * ON: Success in cancellation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'schedules',
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

/**
---------------------------------------------------------
------Meu Consumo (Móvel - pós, controle e beatrix)---------
------------------------------------------------------------
*/

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
    value: 'next' | 'back' | 'cancel'
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
    value: 'next' | 'back' | 'cancel'
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
    value: 'next' | 'cancel'
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

/**
---------------------------------------------------------
---------------------------------------------------------
---------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/

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
/**
-------------------------------------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/

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

/**
--------------------------------------------------------
---------------------------------------------------------
---------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/
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

/**
-------------------------------------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/
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

/**
--------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/

/** FEATURE DE CONTAS - SEGUNDA VIA DE CONTAS - JORNADA DE ATIVAÇAO
*/
  /**
 * 2° Via de Contas Screen - 
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'bill-duplicate',
    type: 'bills',
    step: {
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
    name: 'bill-duplicate',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'options',
    value: 'detail-bill-duplicate'| 'paid' | 'send-by-email'
  }
})

  /**
 * 2° Via de Contas Screen
 * ON: Page load detail duplicate bill
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'bill-duplicate',
    type: 'bills',
    step: {
      name: 'detail-bill-duplicate',
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
    name: 'bill-duplicate',
    type: 'bills',
    step: {
      name: 'detail-bill-duplicate',
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
    name: 'bill-duplicate',
    type: 'bills',
    step: {
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
    name: 'bill-duplicate',
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
    name: 'bill-duplicate',
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

/**
--------------------------------------------------------
--------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/

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
    name: 'bill-duplicate',
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
    name: 'bill-duplicate',
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

/**
--------------------------------------------------------
---------------------------------------------------------
---------------------------------------------------------
------------------------------------------------------------
                         -----------------
------------------------------------------------------------*/

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
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})


/**
 * Desbloqueio de linha Screen
 * ON: After user clicks 'Confirmar Pagamento'
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
    name: 'confirm',
    value: 'next'
  }
})

/**
  * Desbloqueio de linha Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
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

/**
  ---------------------------------------------
-------------------------------------------------
  ---------------------------------------------

---------------------------------------------------------
---------------------------------------------------------
*/
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
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
  ---------------------------------------------
---------------------------------------------------------
---------------------------------------------------------
*/

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
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**----------------------------------------------------
-----------------------------------------------------
                     --------------
*/
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
    value: 'next'| 'cancel'
  }
})

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
      name: 'receive-option',
      index: 2,
      type: 'intermediary'
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
      name: 'receive-option',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next'| 'cancel'
  }
})

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
      name: 'reference-year',
      index: 3,
      type: 'intermediary'
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
      name: 'reference-year',
      index: 3,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next'| 'cancel'
  }
})


/**
 * Termo de Quitação Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'acquittance',
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
 * Termo de Quitação Screen - E-mail options 
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'acquittance',
    type: 'bills',
    step: {
      name: 'confirm-email',
      index:  2,
      type: 'intermediary'
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
      name: 'confirm-email',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'confirm',
    value: 'next'| 'cancel'
  }
})


/**
 * Termo de Quitação Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'acquittance',
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


/**--------------------------------------------------
-------------------EXCLUSIVO FIXA--------------------
-----------------------------------------------------
*/
/** FEATURE DE CONTAS - ACORDOS
*/
  /**
 * Acordos Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'agreements',
    type: 'billS',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Acordos Screen
 * ON: After clicking on one of the options("Visualizar", "Imprimir", "Enviar para o e-mail")
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'agreements',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'to-choose',
    value: 'to-print'| 'to-view'|'to-send'
  }
})


 /**
 * Acordos Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'agreements',
    type: 'bills',
    step: {
      name: 'send-by-email',
      index: 2,
      type: 'intermediary'
    }
  }
})

/**
 * Acordos Screen
 * ON: After user clicks 'Confirmo o pagmento'
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'agreements',
    type: 'bills',
    step: {
      name: 'home',
      index: 2,
      type: 'intermediary'
    }
  },
  interaction: {
    name: 'send-by-email',
    value: 'next'
  }
})

/**
 * Acordos Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'agreements',
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
 * Acordos Screen
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
 * Acordos Screen
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


/** FEATURE DE CONTAS - ALTERAR VENCIMENTO
*/
  /**
 * Alterar Vencimento Screen
 * ON: Page load
 */

dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'change-due',
    type: 'billS',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Alterar Vencimento Screen
 * ON: After clicking on one of the options("Visualizar", "Imprimir", "Enviar para o e-mail")
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'change-due',
    type: 'bills',
    step: {
      name: 'home',
      index: 1,
      type: 'initial'
    }
  },
  interaction: {
    name: 'to-choose',
    value: 'access-chat'| 'save-change-due'
  }
})


/**
 * Acordos Screen
 * ON: Success in sending email confirmation
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'change-due',
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
 * Acordos Screen
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
 * Acordos Screen
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

