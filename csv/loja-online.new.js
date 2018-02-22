/* eslint-disable no-undef */

/**
 * Aquisição de Plano
 * - Seleção de Plano
 * - Momento do disparo: No carregamento da página de seleção de planos
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'plan-selection',
      index: 1,
      type: 'initial',
      success: false
    }
  }
})

/**
 * Aquisição de Plano
 * - Seleção de Plano
 * - Momento do disparo: Ao selecionar "Continuar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'plan-selection',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'without-a-phone'
  }
})

/**
 * Aquisição de Plano
 * - Seleção de Plano
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano
 * - Carrinho (sem aparelho)
 * - Momento do disparo: No carregamento da página
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano
 * - Carrinho (sem aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano
 * - Carrinho (sem aparelho)
 * - Momento do disparo: Ao selecionar "Calcular"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'calculate-coupon',
    value: 'calculate-coupon'
  }
})

/**
 * Aquisição de Plano
 * - Carrinho (sem aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano
 * - Carrinho (sem aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano
 * - Identificação (sem aparelho)
 * - Momento do disparo: No carregamento da página
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'login',
      index: 3,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano
 * - Identificação (sem aparelho)
 * - Momento do disparo: Ao enviar o formulário de login (Clique em "Entrar", etc.)
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'login',
      index: 3,
      type: 'intermediary',
      success: true | false
    }
  },
  interaction: {
    name: 'login',
    value: 'login'
  }
})

/**
 * Aquisição de Plano
 * - Identificação (sem aparelho)
 * - Momento do disparo: Ao enviar o formulário de cadastro (Clique em "Cadastrar", etc.)
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'login',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'register',
    value: 'register'
  }
})

/**
 * Aquisição de Plano
 * - Identificação (sem aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano
 * - Cadastro (sem aparelho)
 * - Momento do disparo: No carregamento da página
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 3,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano
 * - Cadastro (sem aparelho)
 * - Momento do disparo: Ao prosseguir após a inserção de dados pessoais
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'form',
    value: 'id-info'
  }
})

/**
 * Aquisição de Plano
 * - Cadastro (sem aparelho)
 * - Momento do disparo: Ao prosseguir após a inserção de dados de cobrança
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'form',
    value: 'payment-info'
  }
})

/**
 * Aquisição de Plano
 * - Cadastro (sem aparelho)
 * - Momento do disparo: Ao prosseguir após a inserção de dados de login
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'form',
    value: 'login-info'
  }
})

/**
 * Aquisição de Plano
 * - Cadastro (sem aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano
 * - Endereço de entrega (sem aparelho)
 * - Momento do disparo: Ao ser exibido o passo de seleção do endereço
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 4,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano
 * - Endereço de entrega (sem aparelho)
 * - Momento do disparo: Ao selecionar a atualização de endereço
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'pick-address',
    value: 'new-address'
  }
})

/**
 * Aquisição de Plano
 * - Endereço de entrega (sem aparelho)
 * - Momento do disparo: Ao selecionar a entrega no endereço pré-cadastrado
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'pick-address',
    value: 'choose-address'
  }
})

/**
 * Aquisição de Plano
 * - Endereço de entrega (sem aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano
 * - Endereço de entrega (sem aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano
 * - Endereço de entrega (sem aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano
 * - Pagamento (sem aparelho)
 * - Momento do disparo: Ao ser exibido o passo de forma de pagamento
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'payment',
      index: 5,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano
 * - Pagamento (sem aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'payment',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano
 * - Pagamento (sem aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'payment',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano
 * - Pagamento (sem aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano
 * - Info da Linha (sem aparelho)
 * - Momento do disparo: Ao ser exibido o passo de informações da linha
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'line-info',
      index: 6,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano
 * - Info da Linha (sem aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'line-info',
      index: 6,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano
 * - Info da Linha (sem aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'line-info',
      index: 6,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano
 * - Info da Linha (sem aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano
 * - Concluir compra (sem aparelho)
 * - Momento do disparo: No carregamento da página de sumário
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'summary',
      index: 7,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano
 * - Concluir compra (sem aparelho)
 * - Momento do disparo: Ao selecionar "Concluir Compra"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'summary',
      index: 7,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano
 * - Concluir compra (sem aparelho)
 * - Momento do disparo: Ao selecionar "Quero cancelar minha compra"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'summary',
      index: 7,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'cancel'
  }
})

/**
 * Aquisição de Plano
 * - Concluir compra (sem aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano
 * - Confirmação do Pedido (sem aparelho)
 * - Momento do disparo: No carregamento da página de confirmação do pedido
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'order-confirmation',
      index: 8,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Aquisição de Plano
 * - Seleção de Plano
 * - Momento do disparo: No carregamento da página de seleção de planos
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'plan-selection',
      index: 1,
      type: 'initial',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Seleção de Plano
 * - Momento do disparo: Ao selecionar "Escolher Aparelho"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'plan-selection',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'with-a-phone'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Seleção de Aparelho
 * - Momento do disparo: No carregamento da página de seleção de aparelhos
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'phone-selection',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Seleção de Aparelho
 * - Momento do disparo: Ao selecionar o aparelho
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'phone-selection',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'select-phone',
    value: 'phone'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Seleção de Aparelho
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Detalhe do Aparelho
 * - Momento do disparo: No carregamento da página do aparelho
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'phone-details',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Detalhe do Aparelho
 * - Momento do disparo: Ao selecionar um plano (clicando em "Comprar")
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'phone-details',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'select-plan',
    value: 'plan'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Ofertas Adicionais (com aparelho)
 * - Momento do disparo: No carregamento da página de ofertas adicionais
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'additional-offers',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Ofertas Adicionais (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'additional-offers',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: No carregamento da página
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 3,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: Ao selecionar "Calcular"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'calculate-coupon',
    value: 'calculate-coupon'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Identificação (com aparelho)
 * - Momento do disparo: No carregamento da página
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'login',
      index: 4,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Identificação (com aparelho)
 * - Momento do disparo: Ao enviar o formulário de login (Clique em "Entrar", etc.)
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'login',
      index: 4,
      type: 'intermediary',
      success: true | false
    }
  },
  interaction: {
    name: 'login',
    value: 'login'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Identificação (com aparelho)
 * - Momento do disparo: Ao enviar o formulário de cadastro (Clique em "Cadastrar", etc.)
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'login',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'register',
    value: 'register'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Identificação (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: No carregamento da página
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 4,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: Ao prosseguir após a inserção de dados pessoais
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'form',
    value: 'id-info'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: Ao prosseguir após a inserção de dados de cobrança
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'form',
    value: 'payment-info'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: Ao prosseguir após a inserção de dados de login
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'form',
    value: 'login-info'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao ser exibido o passo de seleção do endereço
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao selecionar a atualização de endereço
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'pick-address',
    value: 'new-address'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao selecionar a entrega no endereço pré-cadastrado
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'pick-address',
    value: 'choose-address'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Pagamento (com aparelho)
 * - Momento do disparo: Ao ser exibido o passo de forma de pagamento
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'payment',
      index: 6,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Pagamento (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'payment',
      index: 6,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Pagamento (com aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'payment',
      index: 6,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Pagamento (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Info da Linha (com aparelho)
 * - Momento do disparo: Ao ser exibido o passo de informações da linha
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'line-info',
      index: 7,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Info da Linha (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'line-info',
      index: 7,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Info da Linha (com aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'line-info',
      index: 7,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Info da Linha (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Concluir compra (com aparelho)
 * - Momento do disparo: No carregamento da página de sumário
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'summary',
      index: 8,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Concluir compra (com aparelho)
 * - Momento do disparo: Ao selecionar "Concluir Compra"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'summary',
      index: 8,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Concluir compra (com aparelho)
 * - Momento do disparo: Ao selecionar "Quero cancelar minha compra"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'summary',
      index: 8,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'cancel'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Concluir compra (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Confirmação do Pedido (com aparelho)
 * - Momento do disparo: No carregamento da página de confirmação do pedido
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'order-confirmation',
      index: 9,
      type: 'completion',
      success: true
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Seleção de Aparelho
 * - Momento do disparo: No carregamento da página de seleção de aparelhos
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'phone-selection',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Seleção de Aparelho
 * - Momento do disparo: Ao selecionar o aparelho
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'phone-selection',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'select-phone',
    value: 'phone'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Seleção de Aparelho
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Detalhe do Aparelho
 * - Momento do disparo: No carregamento da página do aparelho
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'phone-details',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Detalhe do Aparelho
 * - Momento do disparo: Ao selecionar um plano (clicando em "Comprar")
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'phone-details',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'select-plan',
    value: 'plan'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Ofertas Adicionais (com aparelho)
 * - Momento do disparo: No carregamento da página de ofertas adicionais
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'additional-offers',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Ofertas Adicionais (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'additional-offers',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: No carregamento da página
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 3,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: Ao selecionar "Calcular"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'calculate-coupon',
    value: 'calculate-coupon'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'cart',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Carrinho (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Identificação (com aparelho)
 * - Momento do disparo: No carregamento da página
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'login',
      index: 4,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Identificação (com aparelho)
 * - Momento do disparo: Ao enviar o formulário de login (Clique em "Entrar", etc.)
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'login',
      index: 4,
      type: 'intermediary',
      success: true | false
    }
  },
  interaction: {
    name: 'login',
    value: 'login'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Identificação (com aparelho)
 * - Momento do disparo: Ao enviar o formulário de cadastro (Clique em "Cadastrar", etc.)
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'login',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'register',
    value: 'register'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Identificação (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: No carregamento da página
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 4,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: Ao prosseguir após a inserção de dados pessoais
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'form',
    value: 'id-info'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: Ao prosseguir após a inserção de dados de cobrança
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'form',
    value: 'payment-info'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: Ao prosseguir após a inserção de dados de login
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'registration',
      index: 4,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'form',
    value: 'login-info'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Cadastro (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao ser exibido o passo de seleção do endereço
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao selecionar a atualização de endereço
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'pick-address',
    value: 'new-address'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao selecionar a entrega no endereço pré-cadastrado
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'pick-address',
    value: 'choose-address'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'delivery-address',
      index: 5,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Endereço de entrega (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Pagamento (com aparelho)
 * - Momento do disparo: Ao ser exibido o passo de forma de pagamento
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'payment',
      index: 6,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Pagamento (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'payment',
      index: 6,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Pagamento (com aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'payment',
      index: 6,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Pagamento (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Info da Linha (com aparelho)
 * - Momento do disparo: Ao ser exibido o passo de informações da linha
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'line-info',
      index: 7,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Info da Linha (com aparelho)
 * - Momento do disparo: Ao selecionar "Prosseguir"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'line-info',
      index: 7,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Info da Linha (com aparelho)
 * - Momento do disparo: Ao selecionar "Voltar"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'line-info',
      index: 7,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'go-back'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Info da Linha (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Concluir compra (com aparelho)
 * - Momento do disparo: No carregamento da página de sumário
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'summary',
      index: 8,
      type: 'intermediary',
      success: false
    }
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Concluir compra (com aparelho)
 * - Momento do disparo: Ao selecionar "Concluir Compra"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'summary',
      index: 8,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'proceed',
    value: 'next'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Concluir compra (com aparelho)
 * - Momento do disparo: Ao selecionar "Quero cancelar minha compra"
 */
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'summary',
      index: 8,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'navigate',
    value: 'cancel'
  }
})

/**
 * Aquisição de Plano com Aparelho
 * - Concluir compra (com aparelho)
 * - Momento do disparo: Ao ser exibido qualquer aviso
 */
dataLayer.push({
  event: 'interface-message',
  message: {
    type: 'warning' | 'error',
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
 * Aquisição de Plano com Aparelho
 * - Confirmação do Pedido (com aparelho)
 * - Momento do disparo: No carregamento da página de confirmação do pedido
 */
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'plan-and-phone-acquisition',
    type: 'purchase-funnel',
    step: {
      name: 'order-confirmation',
      index: 9,
      type: 'completion',
      success: true
    }
  }
})
