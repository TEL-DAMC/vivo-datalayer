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


/**
* Aquisição de Plano com Aparelho
* - Impressão de produtos
* - Momento do disparo: Ao serem exibidos cards de produto
*
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
            id: string,
            /**
            * Product price must be in the format '00.00', always represented as a string
            */
            price: string,
            brand: string,
            category: string,
            variant: string,
            custom: {
                metrics: undefined,
                dimensions: {availability:string}
            }
        }]
    }
})
/**
* Aquisição de Plano com Aparelho
* - Cliques em produtos
* - Momento do disparo: Ao ser selecionado um card de produto que leva para uma página de detalhe de produto
*
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
                    metrics: undefined,
                    dimensions: {availability:string}
                }
            }]
        }
    }
})
/**
* Aquisição de Plano com Aparelho
* - Cliques em produtos
* - Momento do disparo: Ao ser exibida uma página de detalhe de produto
*
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
                    metrics: undefined,
                    dimensions: {availability:string}
                }
            }]
        }
    }
})
/**
* Aquisição de Plano com Aparelho
* - Cliques em produtos
* - Momento do disparo: Ao ser adicionado um produto ou plano ao carrinho
*
* The ecommerce add-to-cart event MUST BE triggered every
* time one or more products are added to the cart at once.
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
                    metrics: undefined,
                    dimensions: {availability:string}
                },
                quantity: number
            }]
        }
    }
})
/**
* Aquisição de Plano com Aparelho
* - Cliques em produtos
* - Momento do disparo: Ao ser adicionado um produto ou plano ao carrinho
*
* The ecommerce remove-from-cart event MUST BE triggered every
* time one or more products are removed the cart at once.
*
*/
window.dataLayer.push({
    event: 'ecommerce-add-to-cart',
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
                    metrics: undefined,
                    dimensions: undefined
                },
                quantity: number
            }]
        }
    }
})
/**
* Aquisição de Plano com Aparelho
* - Cliques em produtos
* - Momento do disparo: Ao ser adicionado um produto ou plano ao carrinho
*
* The ecommerce checkout step event MUST BE triggered on every checkout step.
*
*/
window.dataLayer.push({
    event: 'ecommerce-checkout-step',
    ecommerce: {
        currencyCode: 'BRL',
        checkout: {
            actionField: {
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
                custom: {
                    metrics: undefined,
                    dimensions: undefined
                },
                quantity: number
            }]
        }
    }
})
/**
* Aquisição de Plano com Aparelho
* - Cliques em produtos
* - Momento do disparo: Ao ser adicionado um produto ou plano ao carrinho
*
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
                custom: {
                    metrics: undefined,
                    dimensions: undefined
                }
                quantity: number,
                /**
                * Optional - coupon code used on the purchase of this specific product
                */
                coupon: string
            }]
        }
    }
})