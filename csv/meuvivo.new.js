/**
* Consumo
* - Contratar Pacotes
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'packages-and-services',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Consumo
* - Contratar Pacotes
* - Momento do disparo: Clique em "Contratar pacotes"
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'packages-and-services',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-hire',
        value: 'next'
    }
})

/**
* Consumo
* - Contratar Pacotes
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Contratar Pacotes
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Compartilhar Internet
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'share-internet',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Consumo
* - Compartilhar Internet
* - Momento do disparo: Clique para continuar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'share-internet',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'choose',
        value: 'confirm-number' | 'log-view'
    }
})

/**
* Consumo
* - Compartilhar Internet
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'share-internet',
        type: 'comsumption',
        step: {
            name: 'shared-amount',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Compartilhar Internet
* - Momento do disparo: Clique em alguma opção de quantidade de MB
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'share-internet',
        type: 'comsumption',
        step: {
            name: 'shared-amount',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'choose-quantity' | 'others-quantities',
        value: 'confirm'
    }
})

/**
* Consumo
* - Compartilhar Internet
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'share-internet',
        type: 'comsumption',
        step: {
            name: 'confirms-shared-amount',
            index: 3,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Compartilhar Internet
* - Momento do disparo: Clique em sim ou não
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'share-internet',
        type: 'comsumption',
        step: {
            name: 'confirms-shared-amount',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next'
    }
})

/**
* Consumo
* - Compartilhar Internet
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'share-internet',
        type: 'comsumption',
        step: {
            name: 'success',
            index: 4,
            type: 'completion',
            success: true
        }
    }
})

/**
* Consumo
* - Compartilhar Internet
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Compartilhar Internet
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Consumo de Voz
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'voice-consumption',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Consumo
* - Consumo de Voz
* - Momento do disparo: Clique nas nas opções
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'voice-consumption',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'choose-export-action',
        value: 'to-print' | 'salve-to-pdf' | 'send-by-email'
    }
})

/**
* Consumo
* - Consumo de Voz
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'voice-consumption',
        type: 'comsumption',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Consumo de Voz
* - Momento do disparo: No botão "Enviar"
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'voice-consumption',
        type: 'comsumption',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next'
    }
})

/**
* Consumo
* - Consumo de Voz
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'voice-consumption',
        type: 'comsumption',
        step: {
            name: 'success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Consumo
* - Consumo de Voz
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Consumo de Voz
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Extrato
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: Clique em "Entenda seus saldos" ou "Exportar por mês"
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'export-per-month',
        value: 'next'
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'select-month',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: Clique em "Consultar"
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'select-month',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'consult',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'complete-statement',
            index: 3,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: Clique para imprimir, salvar em PDF ou enviar por email
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'complete-statement',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'choose-export-action',
        value: 'to-print' | 'salve-to-pdf' | 'send-by-email'
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'send-email',
            index: 4,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: Clique para enviar ou cancelar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'send-email',
            index: 4,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'to-send',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'confirm-email',
            index: 5,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: Clique para enviar ou cancelar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'confirm-email',
            index: 5,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm-email',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'statement',
        type: 'comsumption',
        step: {
            name: 'success',
            index: 6,
            type: 'completion',
            success: true
        }
    }
})

/**
* Consumo
* - Extrato
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Extrato
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Controle de Consumo - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'consumption-control-activation',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Consumo
* - Controle de Consumo - Ativacao
* - Momento do disparo: Clique para desativar ou ativar controle de consumo
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'consumption-control-activation',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-active',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Controle de Consumo - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'consumption-control-activation',
        type: 'comsumption',
        step: {
            name: 'confirm',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Controle de Consumo - Ativacao
* - Momento do disparo: Clique para confirmar ou cancelar ativação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'consumption-control-activation',
        type: 'comsumption',
        step: {
            name: 'confirm',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Controle de Consumo - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'consumption-control-activation',
        type: 'comsumption',
        step: {
            name: 'activation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Consumo
* - Controle de Consumo - Ativacao
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Controle de Consumo - Ativacao
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Controle de Consumo - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'consumption-control-deactivation',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Consumo
* - Controle de Consumo - Desativacao
* - Momento do disparo: Clique para desativar ou ativar controle de consumo
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'consumption-control-deactivation',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-disable',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Controle de Consumo - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'consumption-control-deactivation',
        type: 'comsumption',
        step: {
            name: 'confirm',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Controle de Consumo - Desativacao
* - Momento do disparo: Clique para confirmar ou cancelar desativação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'consumption-control-deactivation',
        type: 'comsumption',
        step: {
            name: 'confirm',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Controle de Consumo - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'consumption-control-deactivation',
        type: 'comsumption',
        step: {
            name: 'deactivation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Consumo
* - Controle de Consumo - Desativacao
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Controle de Consumo - Desativacao
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Detalhamento de Consumo de E-mail - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'detailing-email-consumption-activation',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Ativacao
* - Momento do disparo: Clique para desativar, ativar ou alterar (apenas para ativos) detalhamento por email
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'detailing-email-consumption-activation',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'detailing-email-consumption-activation',
        type: 'comsumption',
        step: {
            name: 'select-date',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Ativacao
* - Momento do disparo: Clique para confirmar ou cancelar ativação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'detailing-email-consumption-activation',
        type: 'comsumption',
        step: {
            name: 'select-date',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm-activation',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'detailing-email-consumption-activation',
        type: 'comsumption',
        step: {
            name: 'activation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Ativacao
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Detalhamento de Consumo de E-mail - Ativacao
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Detalhamento de Consumo de E-mail - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'detailing-email-consumption-deactivation',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Desativacao
* - Momento do disparo: Clique para confirmar ou cancelar desativação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'detailing-email-consumption-deactivation',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next'
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'detailing-email-consumption-deactivation',
        type: 'comsumption',
        step: {
            name: 'confirm-deactivation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Desativacao
* - Momento do disparo: Clique para confirmar ou cancelar desativação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'detailing-email-consumption-deactivation',
        type: 'comsumption',
        step: {
            name: 'confirm-deactivation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'detailing-email-consumption-deactivation',
        type: 'comsumption',
        step: {
            name: 'deactivation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Desativacao
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Detalhamento de Consumo de E-mail - Desativacao
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Detalhamento de Consumo de E-mail - Alteracao de data de Envio
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'detailing-email-consumption-change-date',
        type: 'comsumption',
        step: {
            name: 'confirm-deactivation',
            index: 1,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Alteracao de data de Envio
* - Momento do disparo: Clique para confirmar ou cancelar alteração de dia de envio
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'detailing-email-consumption-change-date',
        type: 'comsumption',
        step: {
            name: 'confirm-deactivation',
            index: 1,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next'
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Alteracao de data de Envio
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'detailing-email-consumption-change-date',
        type: 'comsumption',
        step: {
            name: 'change-date-success',
            index: 2,
            type: 'completion',
            success: true
        }
    }
})

/**
* Consumo
* - Detalhamento de Consumo de E-mail - Alteracao de data de Envio
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Detalhamento de Consumo de E-mail - Alteracao de data de Envio
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Lancamentos Futuros
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'schedules',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Consumo
* - Lancamentos Futuros
* - Momento do disparo: Clicou para expandir algum item
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'schedules',
        type: 'comsumption',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'select-option',
        value: 'item-details' | 'cancel-vsa' | 'complete-statement'
    }
})

/**
* Consumo
* - Lancamentos Futuros
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'schedules',
        type: 'comsumption',
        step: {
            name: 'cancel-vsa',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Consumo
* - Lancamentos Futuros
* - Momento do disparo: Clique para cancelar algum SVA
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'schedules',
        type: 'comsumption',
        step: {
            name: 'cancel-vsa',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Consumo
* - Lancamentos Futuros
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'schedules',
        type: 'comsumption',
        step: {
            name: 'cancel-vsa-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Consumo
* - Lancamentos Futuros
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Consumo
* - Lancamentos Futuros
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Segunda via de contas
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'bill-duplicate',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Segunda via de contas
* - Momento do disparo: Clique em "Pagar agora", "Já pagou?", "Enviar por e-mail", "Imprimir", "2ª via detalhada", "Visualizar conta" ou "Download"
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'bill-duplicate',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'detail-bill-duplicate' | 'paid' | 'send-by-email'
    }
})

/**
* Contas
* - Segunda via de contas
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'bill-duplicate',
        type: 'bills',
        step: {
            name: 'detail-bill-duplicate',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Segunda via de contas
* - Momento do disparo: Clique para imprimir, salvar em PDF ou enviar por email
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'bill-duplicate',
        type: 'bills',
        step: {
            name: 'detail-bill-duplicate',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'to-print' | 'salve-to-pdf' | 'send-by-email'
    }
})

/**
* Contas
* - Segunda via de contas
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'bill-duplicate',
        type: 'bills',
        step: {
            name: 'send-by-email',
            index: 3,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Segunda via de contas
* - Momento do disparo: Clique para enviar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'bill-duplicate',
        type: 'bills',
        step: {
            name: 'send-by-email',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'send-email',
        value: 'next'
    }
})

/**
* Contas
* - Segunda via de contas
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'bill-duplicate',
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
* Contas
* - Segunda via de contas
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Segunda via de contas
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Informe de Pagamento - Pagamento de Contas - Móvel - Desktop e Mobile
* - Momento do disparo: Exibição do lightbox após clique em "Já pagou", no box de contas
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'payment-report',
        type: 'bills',
        step: {
            name: 'confirm-payment',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Informe de Pagamento - Pagamento de Contas - Móvel - Desktop e Mobile
* - Momento do disparo: Clique no botão do lightbox 
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'payment-report',
        type: 'bills',
        step: {
            name: 'confirm-payment',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Contas
* - Informe de Pagamento - Pagamento de Contas - Móvel - Desktop e Mobile
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Informe de Pagamento - Pagamento de Contas - Móvel - Desktop e Mobile
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Informe de Pagamento - Móvel - Beatrix
* - Momento do disparo: Exibição do lightbox de informe de pagamento
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'payment-report',
        type: 'bills',
        step: {
            name: 'confirm-payment',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-send',
        value: 'paid'
    }
})

/**
* Contas
* - Informe de Pagamento - Móvel - Beatrix
* - Momento do disparo: Clique para enviar informe
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'payment-report',
        type: 'bills',
        step: {
            name: 'confirm-payment',
            index: 1,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Informe de Pagamento - Móvel - Beatrix
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Informe de Pagamento - Móvel - Beatrix
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Informe de Pagamento - Fixa 1 - TV
* - Momento do disparo: Exibição do lightbox após clique em "Já pagou", no box de contas
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'payment-report',
        type: 'bills',
        step: {
            name: 'confirm-payment',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Informe de Pagamento - Fixa 1 - TV
* - Momento do disparo: Clique para confirmar ou voltar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'payment-report',
        type: 'bills',
        step: {
            name: 'confirm-payment',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Contas
* - Informe de Pagamento - Fixa 1 - TV
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Informe de Pagamento - Fixa 1 - TV
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Conta Digital - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Conta Digital - Ativacao
* - Momento do disparo: Clique para desativar ou ativar conta digital
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-active',
        value: 'next'
    }
})

/**
* Contas
* - Conta Digital - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'confirm-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Conta Digital - Ativacao
* - Momento do disparo: Clicou em sim ou não (desativar ou cancelar)
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'confirm-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Contas
* - Conta Digital - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'activation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Contas
* - Conta Digital - Ativacao
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Conta Digital - Ativacao
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Conta Digital - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Conta Digital - Desativacao
* - Momento do disparo: Clique para desativar ou ativar conta digital
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-disable',
        value: 'next'
    }
})

/**
* Contas
* - Conta Digital - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'confirm-deactivation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Conta Digital - Desativacao
* - Momento do disparo: Clicou em sim ou não (desativar ou cancelar)
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'confirm-deactivation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Contas
* - Conta Digital - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'digital-bill-activation',
        type: 'bills',
        step: {
            name: 'deactivation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Contas
* - Conta Digital - Desativacao
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Conta Digital - Desativacao
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Debito Automatico - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'direct-debt-activation',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Debito Automatico - Ativacao
* - Momento do disparo: Clique para desativar ou ativar débito automático
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'direct-debt-activation',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-active',
        value: 'next'
    }
})

/**
* Contas
* - Debito Automatico - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'direct-debt-activation',
        type: 'bills',
        step: {
            name: 'select-bank',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Debito Automatico - Ativacao
* - Momento do disparo: Clique em alguma opção de banco
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'direct-debt-activation',
        type: 'bills',
        step: {
            name: 'select-bank',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'to-active',
        value: 'next'
    }
})

/**
* Contas
* - Debito Automatico - Ativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'direct-debt-activation',
        type: 'bills',
        step: {
            name: 'activation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Contas
* - Debito Automatico - Ativacao
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Debito Automatico - Ativacao
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Debito Automatico - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'direct-debt-deactivation',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Debito Automatico - Desativacao
* - Momento do disparo: Clique para desativar ou ativar débito automático
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'direct-debt-deactivation',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-disable',
        value: 'next'
    }
})

/**
* Contas
* - Debito Automatico - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'direct-debt-deactivation',
        type: 'bills',
        step: {
            name: 'confirm-deactivation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Debito Automatico - Desativacao
* - Momento do disparo: Clicou para desativar (sim)
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'direct-debt-deactivation',
        type: 'bills',
        step: {
            name: 'confirm-deactivation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'to-disable',
        value: 'next' | 'cancel'
    }
})

/**
* Contas
* - Debito Automatico - Desativacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'direct-debt-deactivation',
        type: 'bills',
        step: {
            name: 'deactivation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Contas
* - Debito Automatico - Desativacao
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Debito Automatico - Desativacao
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Endereco de Envio
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'address-change',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Endereco de Envio
* - Momento do disparo: Clique em "Alterar endereço"
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'address-change',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'change-address',
        value: 'next'
    }
})

/**
* Contas
* - Endereco de Envio
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'address-change',
        type: 'bills',
        step: {
            name: 'search-address',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Endereco de Envio
* - Momento do disparo: Clique para continuar (após digitar endereço)
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'address-change',
        type: 'bills',
        step: {
            name: 'search-address',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next'
    }
})

/**
* Contas
* - Endereco de Envio
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'address-change',
        type: 'bills',
        step: {
            name: 'confirm-address',
            index: 3,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Endereco de Envio
* - Momento do disparo: Clique para confirmar endereço
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'address-change',
        type: 'bills',
        step: {
            name: 'confirm-address',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next'
    }
})

/**
* Contas
* - Endereco de Envio
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'address-change',
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
* Contas
* - Endereco de Envio
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Endereco de Envio
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Desbloqueio de Linha
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'line-unlock',
        type: 'bills',
        step: {
            name: 'confirm-deactivation',
            index: 1,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Desbloqueio de Linha
* - Momento do disparo: Clique para confirmar pagamento
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'line-unlock',
        type: 'bills',
        step: {
            name: 'confirm-deactivation',
            index: 1,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next'
    }
})

/**
* Contas
* - Desbloqueio de Linha
* - Momento do disparo: No carregamento da página
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
* Contas
* - Desbloqueio de Linha
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Desbloqueio de Linha
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Enenda sua Conta
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'understand-your-bill',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Bancos Conveniados
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'affiliated-companies',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Termo de Quitacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'acquittance',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Termo de Quitacao
* - Momento do disparo: Clique para confirmar ou cancelar termo de quitação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'acquittance',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-active',
        value: 'next' | 'cancel'
    }
})

/**
* Contas
* - Termo de Quitacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'acquittance',
        type: 'bills',
        step: {
            name: 'receive-option',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Termo de Quitacao
* - Momento do disparo: Clique para confirmar ou voltar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'acquittance',
        type: 'bills',
        step: {
            name: 'receive-option',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Contas
* - Termo de Quitacao
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'acquittance',
        type: 'bills',
        step: {
            name: 'reference-year',
            index: 3,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Termo de Quitacao
* - Momento do disparo: Clique para confirmar ou voltar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'acquittance',
        type: 'bills',
        step: {
            name: 'reference-year',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Contas
* - Termo de Quitacao
* - Momento do disparo: No carregamento da página
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
* Contas
* - Termo de Quitacao
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Termo de Quitacao
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Acordos - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: agreements,
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Acordos - Fixo
* - Momento do disparo: Clique para imprimir, visualizar ou enviar acordo por email
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'agreements',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-choose',
        value: 'to-print' | 'to-view' | 'to-send'
    }
})

/**
* Contas
* - Acordos - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'agreements',
        type: 'bills',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Acordos - Fixo
* - Momento do disparo: Clique para enviar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'agreements',
        type: 'bills',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'send-by-email',
        value: 'next'
    }
})

/**
* Contas
* - Acordos - Fixo
* - Momento do disparo: No carregamento da página
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
* Contas
* - Acordos - Fixo
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Acordos - Fixo
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Alterar Vencimento - Fixo
* - Momento do disparo: Clique para acessar chat
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'change-due',
        type: 'bills',
        step: {
            name: 'confirm-deactivation',
            index: 1,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: -,
        value: -
    }
})

/**
* Contas
* - Alterar Vencimento - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'change-due',
        type: 'bills',
        step: {
            name: 'confirm-deactivation',
            index: 1,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Alterar Vencimento - Fixo
* - Momento do disparo: No carregamento da página
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
* Contas
* - Alterar Vencimento - Fixo
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Alterar Vencimento - Fixo
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Conta Detalhada Pela Internet - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'detailed-bill',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Conta Detalhada Pela Internet - Fixo
* - Momento do disparo: Clique para salvar contar ou cancelar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'detailed-bill',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'save-bill' | 'cancel'
    }
})

/**
* Contas
* - Conta Detalhada Pela Internet - Fixo
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Conta Detalhada Pela Internet - Fixo
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Controle de Conta - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'bill-control',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Controle de Conta - Fixo
* - Momento do disparo: Clique para salvar contar ou cancelar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'bill-control',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'save-bill' | 'internet-bill'
    }
})

/**
* Contas
* - Controle de Conta - Fixo
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Controle de Conta - Fixo
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Contas Contestadas - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'replied-bills',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Contas Contestadas - Fixo
* - Momento do disparo: Clique para acessar chat
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'replied-bills',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'access-chat'
    }
})

/**
* Contas
* - Contas Contestadas - Fixo
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Contas Contestadas - Fixo
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Pagamento Facil - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'easy-payment',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Pagamento Facil - Fixo
* - Momento do disparo: Clique em próximo passo
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'easy-payment',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'next'
    }
})

/**
* Contas
* - Pagamento Facil - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'easy-payment',
        type: 'bills',
        step: {
            name: 'payment-request',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Pagamento Facil - Fixo
* - Momento do disparo: Clique em algum dos bancos
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'easy-payment',
        type: 'bills',
        step: {
            name: 'payment-request',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'select-bank',
        value: 'next'
    }
})

/**
* Contas
* - Pagamento Facil - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'easy-payment',
        type: 'bills',
        step: {
            name: 'payment-request',
            index: 3,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Contas
* - Pagamento Facil - Fixo
* - Momento do disparo: Clique para cadastrar o débito automático
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'easy-payment',
        type: 'bills',
        step: {
            name: 'payment-request',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'select-bank',
        value: 'next'
    }
})

/**
* Contas
* - Pagamento Facil - Fixo
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Pagamento Facil - Fixo
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Resumo da Compra - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'puchase-summary',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Contas
* - Resumo da Compra - Fixo
* - Momento do disparo: Clique em algum produto (após selecionar o mês desejado)
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'puchase-summary',
        type: 'bills',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'save-bill' | 'cancel'
    }
})

/**
* Contas
* - Resumo da Compra - Fixo
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Contas
* - Resumo da Compra - Fixo
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Planos
* - Meu Plano - Detalhe do Plano
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'plan-detailed',
        type: 'plans',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Planos
* - Meu Plano - Detalhe do Plano
* - Momento do disparo: Clique para enviar por e-mail, gerar PDF , imprimir ou trocar de plano
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'plan-detailed',
        type: 'plans',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'contratcs' | 'binding-contract' | 'tax',
        value: 'to-print' | 'salve-to-pdf' | 'send-by-email' | 'change-plan' | 'internet-consumption'
    }
})

/**
* Planos
* - Meu Plano - Detalhe do Plano
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'plan-detailed',
        type: 'plans',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Planos
* - Meu Plano - Detalhe do Plano
* - Momento do disparo: Clique para enviar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'plan-detailed',
        type: 'plans',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Planos
* - Meu Plano - Detalhe do Plano
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'plan-detailed',
        type: 'plans',
        step: {
            name: 'success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Planos
* - Meu Plano - Detalhe do Plano
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Planos
* - Meu Plano - Detalhe do Plano
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Planos
* - Contrato
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'contracts',
        type: 'plans',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Planos
* - Contrato
* - Momento do disparo: Clique para visualizar contrato
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'contracts',
        type: 'plans',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'contract-view' | 'binding-contract-view'
    }
})

/**
* Planos
* - Contrato
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Planos
* - Contrato
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Pacotes - Contratação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'packages',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Pacotes - Contratação
* - Momento do disparo: Clique para contratar ou desativar algum pacote
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'packages',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-hire',
        value: 'next' | 'cancel'
    }
})

/**
* Pacotes e Serviços
* - Pacotes - Contratação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'packages',
        type: 'pack-and-services',
        step: {
            name: 'confirm-hiring',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Pacotes - Contratação
* - Momento do disparo: Clique para confirmar contratação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'packages',
        type: 'pack-and-services',
        step: {
            name: 'confirm-hiring',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Pacotes e Serviços
* - Pacotes - Contratação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'packages',
        type: 'pack-and-services',
        step: {
            name: 'success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Pacotes - Contratação
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Pacotes - Contratação
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Pacotes - Contratação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'packages',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Consulta de servicos ativos
* - Momento do disparo: Clique para cancelar algum serviço
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'active-services-query',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'cancel-service',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Consulta de servicos ativos
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'active-services-query',
        type: 'pack-and-services',
        step: {
            name: 'cancel-service-success',
            index: 2,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Consulta de servicos ativos
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Consulta de servicos ativos
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Ativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'roaming-services-activation',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Ativação
* - Momento do disparo: Clique para ativar ou desativar o roaming
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'roaming-services-activation',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-active',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Ativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'roaming-services-activation',
        type: 'pack-and-services',
        step: {
            name: 'confirm-activation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Ativação
* - Momento do disparo: Clique para ativar ou não ativar o roaming
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'roaming-services-activation',
        type: 'pack-and-services',
        step: {
            name: 'confirm-activation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Ativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'roaming-services-activation',
        type: 'pack-and-services',
        step: {
            name: 'activation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Ativação
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Ativação
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Desativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'roaming-services-deactivation',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Desativação
* - Momento do disparo: Clique para ativar ou desativar o roaming
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'roaming-services-deactivation',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-disable',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Desativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'roaming-services-deactivation',
        type: 'pack-and-services',
        step: {
            name: 'deactivation-success',
            index: 2,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Desativação
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Vivo Travel Roaming Internacional - Desativação
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Chamada em espera - Ativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'call-waiting-activation',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Ativação
* - Momento do disparo: Clique para ativar chamada em espera
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'call-waiting-activation',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-active',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Ativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'call-waiting-activation',
        type: 'pack-and-services',
        step: {
            name: 'confirm-activation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Ativação
* - Momento do disparo: Clique para confirmar ativação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'call-waiting-activation',
        type: 'pack-and-services',
        step: {
            name: 'confirm-activation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Ativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'call-waiting-activation',
        type: 'pack-and-services',
        step: {
            name: 'activation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Ativação
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Chamada em espera - Ativação
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Chamada em espera - Desativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'call-waiting-deactivation',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Desativação
* - Momento do disparo: Clique para desativar chamada em espera
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'call-waiting-deactivation',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-disable',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Desativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'call-waiting-deactivation',
        type: 'pack-and-services',
        step: {
            name: 'confirm-deactivation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Desativação
* - Momento do disparo: Clique para confirmar desativação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'call-waiting-deactivation',
        type: 'pack-and-services',
        step: {
            name: 'confirm-deactivation',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Desativação
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'call-waiting-deactivation',
        type: 'pack-and-services',
        step: {
            name: 'deactivation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Chamada em espera - Desativação
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Chamada em espera - Desativação
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Agenda de Contatos - Adicionar
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'add-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Adicionar
* - Momento do disparo: Clique para incluir novo contato
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'add-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-add',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Adicionar
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'add-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'contact-information',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Adicionar
* - Momento do disparo: Clique para adicionar número
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'add-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'contact-information',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Adicionar
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'add-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'add-contact-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Adicionar
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Agenda de Contatos - Adicionar
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Agenda de Contatos - Remover
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'remove-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Remover
* - Momento do disparo: Clique para remover contato
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'remove-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-remove',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Remover
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'remove-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'confirm',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Remover
* - Momento do disparo: Clique para confirmar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'remove-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'confirm',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next' | 'cancel'
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Remover
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'remove-contact-list',
        type: 'pack-and-services',
        step: {
            name: 'remove-contact-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Agenda de Contatos - Remover
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Agenda de Contatos - Remover
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Vivo Agenda
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'vivo-schedule',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Vivo Agenda
* - Momento do disparo: Clique para acessar Vivo Agenda (link)
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'vivo-schedule',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'access-link',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Vivo Agenda
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Vivo Agenda
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Vivo Musica
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'vivo-music',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Vivo Musica
* - Momento do disparo: Clique em Assine já
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'vivo-music',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-hire',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Vivo Musica
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'vivo-music',
        type: 'pack-and-services',
        step: {
            name: 'rates',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Vivo Musica
* - Momento do disparo: Clique em contratar ou cancelar alguma das opções
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'vivo-music',
        type: 'pack-and-services',
        step: {
            name: 'rates',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'to-hire',
        value: 'next' | 'cancel'
    }
})

/**
* Pacotes e Serviços
* - Vivo Musica
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'vivo-music',
        type: 'pack-and-services',
        step: {
            name: 'success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Vivo Musica
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Vivo Musica
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Troca de Aparelho
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'appliance-change',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Troca de Aparelho
* - Momento do disparo: Clique em "Quero trocar agora"
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'appliance-change',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-hire',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Troca de Aparelho
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Troca de Aparelho
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Fale com a Vivo 
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'appliance-change',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Fale com a Vivo 
* - Momento do disparo: Clique para ligar (número de telefone)
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'appliance-change',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'to-call',
        value: 'next'
    }
})

/**
* Pacotes e Serviços
* - Fale com a Vivo 
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Fale com a Vivo 
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Home
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Home
* - Momento do disparo: Clique para ver detalhes de algum serviço ou Clique em alguma opção do acesso rápido
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'highlight' | 'quick-access'
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Fixo
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'landline',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2- Fixo
* - Momento do disparo: Clique em ofertas , Clique em algum dos "Meus serviços", Clique em algum serviço adicional ou Clique em algum plano
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'landline',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'offers' | 'my-services' | 'additional-services' | 'new-plan'
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2- Fixo
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Fixo 2- Fixo
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Home
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Home
* - Momento do disparo: Clique para ver detalhes de algum serviço ou Clique em alguma opção do acesso rápido
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'highlight' | 'quick-access'
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Internet
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'broadband',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Internet
* - Momento do disparo: Clique para alterar velocidade ou em pacotes recomendados
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'broadband',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'change speed' | 'recommended-packs'
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Internet
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Internet
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Home
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - Home
* - Momento do disparo: Clique para ver detalhes de algum serviço ou Clique em alguma opção do acesso rápido
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'highlight' | 'quick-access'
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - TV
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'tv',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - TV
* - Momento do disparo: Clique para ver canais, Alterar plano, Pacotes recomendados ou Clique em algum serviço adicional
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'my-services',
        type: 'pack-and-services',
        step: {
            name: 'tv',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'view-channels' | 'change-plan' | 'recommended-packs' | 'additional-services'
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - TV
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Fixo 2 - TV
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Com Portabilidade - Fixo 2
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services-portability',
        type: 'pack-and-services',
        step: {
            name: 'with-portability',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Com Portabilidade - Fixo 2
* - Momento do disparo: Clique para alterar número
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'my-services-portability',
        type: 'pack-and-services',
        step: {
            name: 'with-portability',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'change-number',
        value: 'change-number'
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Com Portabilidade - Fixo 2
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services-portability',
        type: 'pack-and-services',
        step: {
            name: 'with-portability',
            index: 2,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Com Portabilidade - Fixo 2
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Com Portabilidade - Fixo 2
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Sem Portabilidade - Fixo 2
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services-portability',
        type: 'pack-and-services',
        step: {
            name: 'without-portability',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Sem Portabilidade - Fixo 2
* - Momento do disparo: Clique para alterar número
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'my-services-portability',
        type: 'pack-and-services',
        step: {
            name: 'without-portability',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'change-number',
        value: 'change-number'
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Sem Portabilidade - Fixo 2
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'my-services-portability',
        type: 'pack-and-services',
        step: {
            name: 'without-portability',
            index: 2,
            type: 'completion',
            success: true
        }
    }
})

/**
* Pacotes e Serviços
* - Meu Serviços - Sem Portabilidade - Fixo 2
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Pacotes e Serviços
* - Meu Serviços - Sem Portabilidade - Fixo 2
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Solucao de Problema
* - Momento do disparo: Exibição da tela de início
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Solucao de Problema
* - Momento do disparo: Clque em uma das opções: "Solucionar problema" ou "Consultar visita técnica"
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'solve-problem' | 'consult-technical-visit'
    }
})

/**
* Suporte Técnico
* - Solucao de Problema
* - Momento do disparo: Exibição da tela de início
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'select-service',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Solucao de Problema
* - Momento do disparo: Clique para selecionar um serviço
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'select-service',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'select-service',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Solucao de Problema
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'problem-solved-success',
            index: 3,
            type: 'intermediary',
            success: true
        }
    }
})

/**
* Suporte Técnico
* - Solucao de Problema
* - Momento do disparo: Clique para receber o protocolo
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'problem-solved-success',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'receive-protocol',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Solucao de Problema
* - Momento do disparo: No carregamento da página
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'problem-solved-success',
            index: 4,
            type: 'completion',
            success: true
        }
    }
})

/**
* Suporte Técnico
* - Solucao de Problema
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Solucao de Problema
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: Exibição da tela para solicitar ajuda da equipe técnica
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: Clique em sim ou não para agendar visita (após completar o diagnóstico e não possuir solução)
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'schedule-technical-visit',
        value: 'yes' | 'no'
    }
})

/**
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: Exibição da tela com os possíveis custos da visita tecnica 
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'possible-costs',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: Clique em sim ou não para agendar visita
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'possible-costs',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'schedule-technical-visit',
        value: 'yes' | 'no'
    }
})

/**
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: Exibição da tela para abrir chamado
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'open-called-technician',
            index: 3,
            type: 'intermediary',
            success: true
        }
    }
})

/**
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: Clique para agendar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'open-called-technician',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'schedule',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: Exibição da tela para selecionar data e hora
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'choose-date',
            index: 4,
            type: 'intermediary',
            success: true
        }
    }
})

/**
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: Clique para marcar visita
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'choose-date',
            index: 4,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'select-date',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: Sucesso ao agendar visita
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'technical-problem-solution',
        type: 'help-desk',
        step: {
            name: 'schedule-visit-success',
            index: 5,
            type: 'completion',
            success: true
        }
    }
})

/**
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Agendar Visita Tecnica
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: Exibição da tela de início
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'check-technical-visit',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: Clique em alguma consulta técnica agendada
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'check-technical-visit',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'schedule-technical-visit',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: Exibição do detalhamento da visita
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'check-technical-visit',
        type: 'help-desk',
        step: {
            name: 'detailed-technical-visit',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: Clique para cancelar ou reagendar visita
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'check-technical-visit',
        type: 'help-desk',
        step: {
            name: 'detailed-technical-visit',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'schedule-technical-visit',
        value: 'cancel-visit' | 'reschedule'
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: Exibição da tela de motivo
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'check-technical-visit',
        type: 'help-desk',
        step: {
            name: 'reason-for-cancellation',
            index: 3,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: Clique para continuar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'check-technical-visit',
        type: 'help-desk',
        step: {
            name: 'reason-for-cancellation',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'continue',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: Exibição da tela para confirmar cancelamento
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'check-technical-visit',
        type: 'help-desk',
        step: {
            name: 'confirm-cancellation',
            index: 4,
            type: 'intermediary',
            success: true
        }
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: Clique para confirmar cancelamento
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'check-technical-visit',
        type: 'help-desk',
        step: {
            name: 'confirm-cancellation',
            index: 4,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: Exibição de sucesso no fluxo cancelamento de visita técnica
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'check-technical-visit',
        type: 'help-desk',
        step: {
            name: 'cancellation-success',
            index: 5,
            type: 'completion',
            success: true
        }
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Consultar Visita Tecnica - Cancelamento
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Consultar Visita Tecnica - Reagendamento
* - Momento do disparo: Exibição da tela para selecionar data e hora
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'reschedule-technical-visit',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Reagendamento
* - Momento do disparo: Clique para marcar visita
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'reschedule-technical-visit',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'select-date',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Reagendamento
* - Momento do disparo: Exibição da tela para confirmar reagendamento
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'reschedule-technical-visit',
        type: 'help-desk',
        step: {
            name: 'confirm-rescheduling',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Reagendamento
* - Momento do disparo: Clique para confirmar reagendamento
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'reschedule-technical-visit',
        type: 'help-desk',
        step: {
            name: 'confirm-rescheduling',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'yes' | 'no'
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Reagendamento
* - Momento do disparo: Exibição de sucesso no fluxo de reagendamento de visita técnica
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'reschedule-technical-visit',
        type: 'help-desk',
        step: {
            name: 'rescheduling-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Suporte Técnico
* - Consultar Visita Tecnica - Reagendamento
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Consultar Visita Tecnica - Reagendamento
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Avaliação de Visita Técnica
* - Momento do disparo: Exibição da tela de início
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'visit-evaluation',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Avaliação de Visita Técnica
* - Momento do disparo: Clique em alguma das visitas técnicas
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'visit-evaluation',
        type: 'help-desk',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'select-technician-visit',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Avaliação de Visita Técnica
* - Momento do disparo: Exibição do detalhamento da visita
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'visit-evaluation',
        type: 'help-desk',
        step: {
            name: 'detailed-technical-visit',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Suporte Técnico
* - Avaliação de Visita Técnica
* - Momento do disparo: Clique para enviar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'visit-evaluation',
        type: 'help-desk',
        step: {
            name: 'detailed-technical-visit',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'submit-review',
        value: 'next'
    }
})

/**
* Suporte Técnico
* - Avaliação de Visita Técnica
* - Momento do disparo: Sucesso ao avaliar visita técnica
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'visit-evaluation',
        type: 'help-desk',
        step: {
            name: 'evaluation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Suporte Técnico
* - Avaliação de Visita Técnica
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Suporte Técnico
* - Avaliação de Visita Técnica
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Saldo e Recarga
* - Meus saldos
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'balances',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Meus saldos
* - Momento do disparo: Clique em ver extrato
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'balances',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'view-statement',
        value: 'view-statement'
    }
})

/**
* Saldo e Recarga
* - Meus saldos
* - Momento do disparo: Exibição da tela de detalhamento do saldo
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'balances',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 2,
            type: 'completion',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Meus saldos
* - Momento do disparo: Clique para recarregar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'recharge',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'recharge-now',
        value: 'recharge-now'
    }
})

/**
* Saldo e Recarga
* - Histórico de recarga - Móvel Beatrix
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'recharge-history',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Histórico de recarga - Móvel Beatrix
* - Momento do disparo: Clique para enviar por e-mail ou imprimir
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'recharge-history',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'send-by-email' | 'print',
        value: 'send-by-email' | 'print'
    }
})

/**
* Saldo e Recarga
* - Histórico de recarga - Móvel Beatrix
* - Momento do disparo: Exibição do lightbox de enviar por email
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'recharge-history',
        type: 'balance-and-recharge',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Histórico de recarga - Móvel Beatrix
* - Momento do disparo: Clique para enviar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'recharge-history',
        type: 'balance-and-recharge',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'send-by-email',
        value: 'send'
    }
})

/**
* Saldo e Recarga
* - Histórico de recarga - Móvel Beatrix
* - Momento do disparo: Exibição de sucesso ao enviar por email
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'recharge-history',
        type: 'balance-and-recharge',
        step: {
            name: 'success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Saldo e Recarga
* - Histórico de recarga - Móvel Beatrix
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Saldo e Recarga
* - Histórico de recarga - Móvel Beatrix
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Saldo e Recarga
* - Histórico de recarga - Pré e Controle
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'recharge-history',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Histórico de recarga - Pré e Controle
* - Momento do disparo: Selecione o período e clique para consultar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'recharge-history',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'select-date',
        value: 'next'
    }
})

/**
* Saldo e Recarga
* - Histórico de recarga - Pré e Controle
* - Momento do disparo: Exibição da tela de detalhamento
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'recharge-history',
        type: 'balance-and-recharge',
        step: {
            name: 'detail',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Histórico de recarga - Pré e Controle
* - Momento do disparo: Clique no link de texto "clique aqui" caso tenha dúvidas para iniciar chat
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'recharge-history',
        type: 'balance-and-recharge',
        step: {
            name: 'detail',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'start-chat',
        value: 'next'
    }
})

/**
* Saldo e Recarga
* - Extrato
* - Momento do disparo: Exibição da tela de início
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'statement',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Extrato
* - Momento do disparo: Clique para enviar por e-mail ou imprimir
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'statement',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'send-by-email' | 'print',
        value: 'send-by-email' | 'print'
    }
})

/**
* Saldo e Recarga
* - Extrato
* - Momento do disparo: Exibição do lightbox de enviar por email
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'statement',
        type: 'balance-and-recharge',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Extrato
* - Momento do disparo: Clique para enviar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'statement',
        type: 'balance-and-recharge',
        step: {
            name: 'send-by-email',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'send-by-email' | 'print',
        value: 'send'
    }
})

/**
* Saldo e Recarga
* - Extrato
* - Momento do disparo: Exibição de sucesso ao enviar por email
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'statement',
        type: 'balance-and-recharge',
        step: {
            name: 'send-by-email',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Saldo e Recarga
* - Extrato
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Saldo e Recarga
* - Extrato
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Saldo e Recarga
* - Recarregue no seu banco
* - Momento do disparo: Exibição da tela de início
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'recharge-at-your-bank',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Recarregue no seu banco
* - Momento do disparo: Clique para selecionar banco
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'recharge-at-your-bank',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'select-bank',
        value: 'next'
    }
})

/**
* Saldo e Recarga
* - Credito Antecipado
* - Momento do disparo: Exibição da tela de início
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'advance-credit',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Credito Antecipado
* - Momento do disparo: Clique para consultar credito
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'advance-credit',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'check-credit',
        value: 'next'
    }
})

/**
* Saldo e Recarga
* - Credito Antecipado
* - Momento do disparo: Exibição de sucesso no fluxo
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'advance-credit',
        type: 'balance-and-recharge',
        step: {
            name: 'success',
            index: 2,
            type: 'completion',
            success: true
        }
    }
})

/**
* Saldo e Recarga
* - Credito Antecipado
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Saldo e Recarga
* - Credito Antecipado
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Saldo e Recarga
* - Cartão de Recarga - Ativação
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'recharge-card',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Saldo e Recarga
* - Cartão de Recarga - Ativação
* - Momento do disparo: Clique para confirmar ou cancelar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'recharge-card',
        type: 'balance-and-recharge',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'activation-card',
        value: 'next' | 'cancel'
    }
})

/**
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'email-service',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: Clique para pesquisar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'email-service',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'search',
        value: '[searched-word]'
    }
})

/**
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: Exibição da resposta da Vivi
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'email-service',
        type: 'service',
        step: {
            name: '[title-of-the-answer]',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: Clique para expandir resposta da Vivi
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'email-service',
        type: 'service',
        step: {
            name: '[title-of-the-answer]',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'expand-answer' | 'advance',
        value: 'next'
    }
})

/**
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: Clique em um link da resposta da Vivi
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'email-service',
        type: 'service',
        step: {
            name: '[click-text]',
            index: 3,
            type: 'completion',
            success: true
        }
    },
    interaction: {
        name: 'open-answer',
        value: '[click-url]'
    }
})

/**
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: Exibição do formulário para atendimento via e-mail
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'email-service',
        type: 'service',
        step: {
            name: 'form',
            index: 1,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: Clique no botão confirmar para enviar formulário preenchido
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'email-service',
        type: 'service',
        step: {
            name: 'form',
            index: 1,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'confirm',
        value: 'next'
    }
})

/**
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: Exibição de mensagem de sucesso do envio do formulario
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'email-service',
        type: 'service',
        step: {
            name: 'confirm-email-sending',
            index: 2,
            type: 'completion',
            success: true
        }
    }
})

/**
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Atendimento
* - Atendimento via E-mail
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Atendimento
* - Atendimento via Chat
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'chat-service',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Atendimento
* - Atendimento via Chat
* - Momento do disparo: Clique para pesquisar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'chat-service',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'search',
        value: '[searched-word]'
    }
})

/**
* Atendimento
* - Atendimento via Chat
* - Momento do disparo: Exibição da resposta da Vivi
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'chat-service',
        type: 'service',
        step: {
            name: '[title-of-the-answer]',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Atendimento
* - Atendimento via Chat
* - Momento do disparo: Clique para expandir resposta da Vivi
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'chat-service',
        type: 'service',
        step: {
            name: '[title-of-the-answer]',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'expand-answer' | 'advance',
        value: 'next'
    }
})

/**
* Atendimento
* - Atendimento via Chat
* - Momento do disparo: Clique em um link da resposta da Vivi
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'chat-service',
        type: 'service',
        step: {
            name: '[click-text]',
            index: 3,
            type: 'completion',
            success: true
        }
    },
    interaction: {
        name: 'open-answer',
        value: '[click-url]'
    }
})

/**
* Atendimento
* - Ouvidoria Chat
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'ombudsman-chat',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Atendimento
* - Ouvidoria Chat
* - Momento do disparo: Clique para pesquisar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'ombudsman-chat',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'search',
        value: '[searched-word]'
    }
})

/**
* Atendimento
* - Ouvidoria Chat
* - Momento do disparo: Exibição da resposta da Vivi
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'ombudsman-chat',
        type: 'service',
        step: {
            name: '[title-of-the-answer]',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Atendimento
* - Ouvidoria Chat
* - Momento do disparo: Clique para expandir resposta da Vivi
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'ombudsman-chat',
        type: 'service',
        step: {
            name: '[title-of-the-answer]',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'expand-answer' | 'advance',
        value: 'next'
    }
})

/**
* Atendimento
* - Ouvidoria Chat
* - Momento do disparo: Clique em um link da resposta da Vivi
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'ombudsman-chat',
        type: 'service',
        step: {
            name: '[click-text]',
            index: 3,
            type: 'completion',
            success: true
        }
    },
    interaction: {
        name: 'open-answer',
        value: '[click-url]'
    }
})

/**
* Atendimento
* - Ouvidoria Chat
* - Momento do disparo: Exibição da tela de inicio - Protocolo
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'ombudsman-chat',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Atendimento
* - Ouvidoria Chat
* - Momento do disparo: Clique em acessar chat com numero de protocolo (Redireciona para o directtalk)
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'ombudsman-chat',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'access-chat' | 'cancel',
        value: 'next'
    }
})

/**
* Atendimento
* - Ouvidoria Chat - Beatrix
* - Momento do disparo: Exibição da tela de início
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'ombudsman-chat',
        type: 'service',
        step: {
            name: 'search-protocol',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Atendimento
* - Ouvidoria Chat - Beatrix
* - Momento do disparo: Clique das opções: chat online e ouvidoria
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'ombudsman-chat',
        type: 'service',
        step: {
            name: 'search-protocol',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'options',
        value: 'online-chat' | 'ombudsman'
    }
})

/**
* Atendimento
* - Fale Conosco - Beatrix
* - Momento do disparo: Exibição da tela de início
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'contact-us',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Atendimento
* - Fale Conosco - Beatrix
* - Momento do disparo: Clique em abrir chamado
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'contact-us',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'open-called',
        value: 'next'
    }
})

/**
* Atendimento
* - Fale Conosco - Beatrix
* - Momento do disparo: Exibição da tela de novo chamado
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'contact-us',
        type: 'service',
        step: {
            name: 'new-called',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Atendimento
* - Fale Conosco - Beatrix
* - Momento do disparo: Clique em criar chamado
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'contact-us',
        type: 'service',
        step: {
            name: 'new-called',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'create-called',
        value: 'next'
    }
})

/**
* Atendimento
* - Fale Conosco - Beatrix
* - Momento do disparo: Exibição da tela de sucesso do  novo chamado
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'contact-us',
        type: 'service',
        step: {
            name: 'call-creation-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})

/**
* Atendimento
* - Fale Conosco - Beatrix
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Atendimento
* - Fale Conosco - Beatrix
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: Exibição da tela de inicio para seleção  do tipo de contato, assunto e detalhe do assunto
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'ombudsman-pop-up-chat',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: Clique para enviar
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'ombudsman-pop-up-chat',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'start-service',
        value: 'next'
    }
})

/**
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: Exibição da tela com mensagem de posicionamento para atendimento e inicio do chat
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'ombudsman-pop-up-chat',
        type: 'service',
        step: {
            name: 'waiting-queue',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: Exibição de tela de atendimento via chat
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'ombudsman-pop-up-chat',
        type: 'service',
        step: {
            name: 'chat-start',
            index: 3,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: Clique para sair do chat
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'ombudsman-pop-up-chat',
        type: 'service',
        step: {
            name: 'chat-start',
            index: 3,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'exit-chat',
        value: 'next'
    }
})

/**
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: Exibição de tela com pesquisa de satisfação
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'ombudsman-pop-up-chat',
        type: 'service',
        step: {
            name: 'satisfaction-survey',
            index: 4,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: Clique para enviar pesquisa de satisfação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'ombudsman-pop-up-chat',
        type: 'service',
        step: {
            name: 'satisfaction-survey',
            index: 4,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'send',
        value: 'next'
    }
})

/**
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: Exibição de mensagem de agradecimento - finalização da pesquisa
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'ombudsman-pop-up-chat',
        type: 'service',
        step: {
            name: 'search-submitted-success',
            index: 5,
            type: 'completion',
            success: true
        }
    }
})

/**
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: No momento que o sistema retornar um aviso para a não-realização da operação
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Atendimento
* - Ouvidoria via Chat Pop Up
* - Momento do disparo: No momento que a operação falhar a execução
*/
dataLayer.push({
    event: 'interface-message',
    message: {
        type: 'string',
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
* Atendimento
* - Solicitar Gravações
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'request-recordings',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Atendimento
* - Solicitar Gravações
* - Momento do disparo: Clique para solicitar gravação
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'request-recordings',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'request-recordings',
        value: 'next'
    }
})

/**
* Atendimento
* - Histórico de Protocolos
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'protocol-history',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    }
})

/**
* Atendimento
* - Histórico de Protocolos
* - Momento do disparo: Clique para confirmar ativação do envio de protocolo por email
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'protocol-history',
        type: 'service',
        step: {
            name: 'home',
            index: 1,
            type: 'initial',
            success: false
        }
    },
    interaction: {
        name: 'search-protocol',
        value: 'next'
    }
})

/**
* Atendimento
* - Histórico de Protocolos
* - Momento do disparo: Exibição do resultado da pesquisa
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'protocol-history',
        type: 'service',
        step: {
            name: 'search-result',
            index: 2,
            type: 'intermediary',
            success: false
        }
    }
})

/**
* Atendimento
* - Histórico de Protocolos
* - Momento do disparo: Clique para ver protocolo detalhadamente
*/
dataLayer.push({
    event: 'feature-interaction',
    feature: {
        name: 'protocol-history',
        type: 'service',
        step: {
            name: 'search-result',
            index: 2,
            type: 'intermediary',
            success: false
        }
    },
    interaction: {
        name: 'protocol-detail',
        value: 'next'
    }
})

/**
* Atendimento
* - Histórico de Protocolos
* - Momento do disparo: Exibição do detalhe do protocolo selecionado
*/
dataLayer.push({
    event: 'feature-step',
    feature: {
        name: 'protocol-history',
        type: 'service',
        step: {
            name: 'protocol-detail-success',
            index: 3,
            type: 'completion',
            success: true
        }
    }
})
