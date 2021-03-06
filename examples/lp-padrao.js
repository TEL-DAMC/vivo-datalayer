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
  },
  /**
   * The regionalization selected by the user, in case it exists
   */
  userInput: {
    location: {
      city: string, // ex.: 'sao-paulo', 'teresina'
      state: string, // ex.: 'AC', 'RS'
      ddd: string // ex.: '85', '47'
    }
  }
})

/**
 * Regionalização
 * - Bússola
 * - Momento do disparo: Quando a página exibe a bússola
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'bussola',
    type: 'regionalization',
    step: {
      name: 'choose-your-city',
      index: 1,
      type: 'initial',
      success: false
    }
  }
})

/**
 * Regionalização
 * - Bússola
 * - Momento do disparo: Quando o usuário seleciona uma cidade
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'bussola',
    type: 'regionalization',
    step: {
      name: 'choose-your-city',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'choose-your-city',
    value: regionalName
  },
  userInput: {
    location: {
      city: string, // ex.: 'sao-paulo', 'teresina'
      state: string, // ex.: 'AC', 'RS'
      ddd: string // ex.: '85', '47'
    }
  }
})

/**
 * Regionalização
 * - Bússola
 * - Momento do disparo: Quando a página responde à regionalização correta do usuário
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'bussola',
    type: 'regionalization',
    step: {
      name: 'city-chosen-successfully',
      index: 2,
      type: 'completion',
      success: true
    }
  },
  userInput: {
    location: {
      city: string, // ex.: 'sao-paulo', 'teresina'
      state: string, // ex.: 'AC', 'RS'
      ddd: string // ex.: '85', '47'
    }
  }
})

/**
 * Regionalização
 * - Bússola
 * - Momento do disparo: Quando a página exibir algum erro ou aviso na bussola
 */
dataLayer.push({
  event: 'interface-message',
  feature: {
    name: 'bussola',
    type: 'regionalization',
  },
  message: {
    type: string,
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
 * CTAs
 * - CTA Principal (hero)
 * - Momento do disparo: Quando o usuário clica nos CTAs principais do Hero Banner
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'main-cta',
    type: 'cta',
    step: {
      name: 'hero-cta',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'hero-cta',
    value: ctaPlacement + ':' + ctaAction + ':' + ctaName
  }
})

/**
 * CTAs
 * - CTA Card Produto
 * - Momento do disparo: Quando o usuário clica no CTA de um card de produto
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'product-card-cta',
    type: 'cta',
    step: {
      name: 'product-card-cta',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'product-card-cta',
    value: ctaPlacement + ':' + ctaAction ':' +ctaName
  }
})

/**
 * CTAs
 * - CTA Sticky Lateral
 * - Momento do disparo: Quando o usuário clica no CTA de um elemento fixo na lateral da página
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'lateral-sticky-cta',
    type: 'cta',
    step: {
      name: 'lateral-sticky-cta',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'lateral-sticky-cta',
    value: ctaPlacement + ':' + ctaAction ':' +ctaName
  }
})

/**
 * CTAs
 * - CTA Barra Horizontal
 * - Momento do disparo: Quando o usuário clica no CTA de uma barra horizontal
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'horizontal-bar-cta',
    type: 'cta',
    step: {
      name: 'horizontal-bar-cta',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'horizontal-bar-cta',
    value: ctaPlacement + ':' + ctaAction ':' +ctaName
  }
})

/**
 * CTAs
 * - CTA Secundário
 * - Momento do disparo: Quando o usuário clica em um CTA secundário
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'secondary-cta',
    type: 'cta',
    step: {
      name: 'secondary-cta',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'secondary-cta',
    value: ctaPlacement + ':' + ctaAction ':' +ctaName
  }
})

/**
 * Leads diretos
 * - Consulta de disponibilidade Modal, barra ou box
 * - Momento do disparo: Quando a página exibe um formulário de consulta de cobertura (visibilidade = mais de 50% do elemento visível na página)
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'availability-check',
    type: 'lead',
    step: {
      name: 'user-info-input',
      index: 1,
      type: 'initial',
      success: false
    },
    placement: {
      name: string,
      type: string
    }
  }
})

/**
 * Leads diretos
 * - Consulta de disponibilidade Modal, barra ou box
 * - Momento do disparo: Quando o usuário tenta enviar o formulário, clicando em "Assine Já" ou pressionando Enter
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'availability-check',
    type: 'lead',
    step: {
      name: 'user-info-input',
      index: 1,
      type: 'initial',
      success: false
    },
    placement: {
      name: string,
      type: string
    }
  },
  interaction: {
    name: 'form-send',
    value: 'ok' | 'error'
  },
  userInput: {
    location: {
      city: string, // ex.: 'sao-paulo', 'teresina'
      state: string, // ex.: 'AC', 'RS'
      ddd: string // ex.: '85', '47'
    },
    info: {
      email: string, // ex.: 'person@domain.com'
      msisdn: string // ex.: '5511987654321' (user's phone number)
    }
  }
})

/**
 * Leads diretos
 * - Consulta de disponibilidade Modal, barra ou box
 * - Momento do disparo: Quando houver o retorno do resultado da consulta de disponibilidade
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'availability-check',
    type: 'lead',
    step: {
      name: 'availability-result' + '-' + availabilityResult + ':' + availabilityType,
      index: 2,
      type: 'completion',
      success: true
    },
    placement: {
      name: string,
      type: string
    },
    userInput: {
      location: {
        city: string, // ex.: 'sao-paulo', 'teresina'
        state: string, // ex.: 'AC', 'RS'
        ddd: string // ex.: '85', '47'
      },
      info: {
        email: string, // ex.: 'person@domain.com'
        msisdn: string // ex.: '5511987654321' (user's phone number)
      }
    }
  }
})

/**
 * Leads diretos
 * - Consulta de disponibilidade Modal, barra ou box
 * - Momento do disparo: Quando a página exibir algum erro ou aviso no formulário de consulta de disponibilidade
 */
dataLayer.push({
  event: 'interface-message',
  feature: {
    name: 'availability-check',
    type: 'lead',
    placement: {
      name: string,
      type: string
    }
  },
  message: {
    type: string,
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
 * Leads diretos
 * - Chat
 * - Momento do disparo: Quando o uuário inicia um chat
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'chat',
    type: 'lead',
    step: {
      name: 'chat-start',
      index: 1,
      type: 'initial',
      success: false
    }
  }
})

/**
 * Leads diretos
 * - Chat
 * - Momento do disparo: Quando o chat é finalizado com uma contratação
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'chat',
    type: 'lead',
    step: {
      name: 'chat-success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Leads diretos
 * - Chat
 * - Momento do disparo: Quando o chat é finalizado SEM uma contratação
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'chat',
    type: 'lead',
    step: {
      name: 'chat-ended',
      index: 2,
      type: 'completion',
      success: false
    }
  }
})

/**
 * Leads indiretos
 * - Revelar o número
 * - Momento do disparo: Quando o usuário clica para revelar o número de telefone
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'reveal-phone-number',
    type: 'lead',
    step: {
      name: 'reveal-phone-number',
      index: 1,
      type: 'completion',
      success: true
    }
  },
  interaction: {
    name: 'reveal-phone-number',
    value: phneNumber
  }
})

/**
 * Leads indiretos
 * - Click to Call
 * - Momento do disparo: Quando o usuário clica para ligar para o call center
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'c2c',
    type: 'lead',
    step: {
      name: 'c2c',
      index: 1,
      type: 'completion',
      success: string
    }
  },
  interaction: {
    name: 'c2c',
    value: phneNumber
  }
})

/**
 * Visualização de conteúdo
 * - Conteúdo em Vídeo
 * - Momento do disparo: Quando o vídeo inicia
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'video-view',
    type: 'content',
    step: {
      name: videoName + ':' + 'video-play',
      index: 1,
      type: 'initial',
      success: false
    }
  }
})

/**
 * Visualização de conteúdo
 * - Conteúdo em Vídeo
 * - Momento do disparo: Quando o usuário vê um vídeo até 50%
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'video-view',
    type: 'content',
    step: {
      name: videoName + ':' + 'video-50',
      index: 1,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Visualização de conteúdo
 * - Conteúdo em Vídeo
 * - Momento do disparo: Quando o usuário vê um vídeo até 95%
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'video-view',
    type: 'content',
    step: {
      name: videoName + ':' + 'video-95',
      index: 1,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Visualização de conteúdo
 * - Conteúdo em abas
 * - Momento do disparo: Quando a página exibe uma aba da conteúdo
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'tab-view',
    type: 'content',
    step: {
      name: nomeDaSecao + ':' + nomeDaAba,
      index: 1,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Visualização de conteúdo
 * - FAQ
 * - Momento do disparo: Quando a página exibe um item do FAQ
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'faq-view',
    type: 'content',
    step: {
      name: nomeDaSecao + ':' + nomeDoItemDoFaq,
      index: 1,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Visualização de conteúdo
 * - Conteúdo em Scroll
 * - Momento do disparo: Quando a página exibe uma seção de conteúdo (após menu ou scroll)
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'scroll-content-view',
    type: 'content',
    step: {
      name: nomeDaSecao,
      index: number,
      type: 'initial' | 'intermediary' | 'completion',
      success: true
    }
  }
})
