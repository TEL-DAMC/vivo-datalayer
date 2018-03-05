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
    name: 'expand-answer' || 'advance',
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
    name: 'expand-answer' || 'advance',
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
    name: 'access-chat' || 'cancel',
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
    value: 'online-chat' || 'ombudsman'
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
* - Momento do disparo: Clique para pesquisar
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

/**
* Atendimento
* - Protocolo por e-mail
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'email-protocol',
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
* - Protocolo por e-mail
* - Momento do disparo: Clique para confirmar ativação do envio de protocolo por email
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'email-protocol',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'confirm-activation',
    value: 'next'
  }
})

/**
* Atendimento
* - Protocolo por e-mail
* - Momento do disparo: Exibição do resultado da pesquisa
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'email-protocol',
    type: 'service',
    step: {
      name: 'activation-success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
* Atendimento
* - Protocolo por e-mail
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
* - Protocolo por e-mail
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
* - Agendamento em loja
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'store-scheduling',
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
* - Agendamento em loja
* - Momento do disparo: Clique para confirmar agendamento
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'store-scheduling',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'confirm-activation',
    value: 'next'
  }
})

/**
* Atendimento
* - Agendamento em loja
* - Momento do disparo: Exibição da tela de sucesso do agendamento em loja
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'store-scheduling',
    type: 'service',
    step: {
      name: 'scheduling-success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
* Atendimento
* - Agendamento em loja
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
* - Agendamento em loja
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
* - Consultar Solicitações
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'query-requests',
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
* - Consultar Solicitações
* - Momento do disparo: Exibição do andamento da sua solicitação
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'query-requests',
    type: 'service',
    step: {
      name: 'query-requests-success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
* Atendimento
* - Consultar Solicitações
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
* - Consultar Solicitações
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
* - Informações ao consumidor
* - Momento do disparo: Exibição da tela de informações ao consumidor
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consumer-information',
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
* - Encontre uma loja
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'find-a-store',
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
* - Encontre uma loja
* - Momento do disparo: Exibição dos resultados da pesquisa para encontrar loja
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'find-a-store',
    type: 'service',
    step: {
      name: 'search-result',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
* Atendimento
* - Atendimento
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'service',
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
* - Atendimento
* - Momento do disparo: Clique no banner de destaque
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'service',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'banner',
    value: '[button-name]'
  }
})

/**
* Atendimento
* - Atendimento
* - Momento do disparo: Clique para fazer busca de perguntas frequentes
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'service',
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
* - Atendimento
* - Momento do disparo: Clique em alguma das perguntas frequentes em destaque
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'service',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'common-questions',
    value: 'broadband' || 'landline' || 'vivo-tv' || 'portal'
  }
})

/**
* Atendimento
* - Atendimento
* - Momento do disparo: Clique em algum dos serviços em destaque
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'service',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'services',
    value: '[service-name]'
  }
})

/**
* Atendimento
* - Atendimento
* - Momento do disparo: Clique em algum dos documentos em destaque
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'service',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'documents',
    value: '[document-name]'
  }
})

/**
* Atendimento
* - Atendimento
* - Momento do disparo: Clique em ver tarifas
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'service',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'rates',
    value: 'check-rates'
  }
})

/**
* Atendimento
* - Atendimento
* - Momento do disparo: Clique em saiba mais
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'service',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'tariffs-and-reduced-schedules',
    value: 'know-more'
  }
})

/**
* Atendimento
* - Perguntas Frequentes
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'common-questions',
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
* - Perguntas Frequentes
* - Momento do disparo: Clique para fazer busca de perguntas frequentes
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'common-questions',
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
* - Perguntas Frequentes
* - Momento do disparo: Exibição do resultado da pesquisa
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'common-questions',
    type: 'service',
    step: {
      name: 'category-questions',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
* Atendimento
* - Perguntas Frequentes
* - Momento do disparo: Clique em todos os links que levam para a página de  categoria de pergunta (icone + botão)
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'common-questions',
    type: 'service',
    step: {
      name: 'category-questions',
      index: 2,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'options',
    value: 'broadband' || 'landline' || 'vivo-tv' || 'portal'
  }
})

/**
* Atendimento
* - Perguntas Frequentes
* - Momento do disparo: Exibição da tela de início com as  principais perguntas
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'common-questions',
    type: 'service',
    step: {
      name: 'main-questions',
      index: 3,
      type: 'intermediary',
      success: false
    }
  }
})

/**
* Atendimento
* - Perguntas Frequentes
* - Momento do disparo: Clique nas principais peguntas e categoria da pergunta
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'common-questions',
    type: 'service',
    step: {
      name: 'main-questions',
      index: 3,
      type: 'intermediary',
      success: false
    }
  },
  interaction: {
    name: 'broadband' || 'landline' || 'vivo-tv' || 'portal',
    value: '[clicked-question]'
  }
})

/**
* Atendimento
* - Perguntas Frequentes
* - Momento do disparo: Exibição da tela de início com as  principais perguntas sobre Telefonia, Banda Larga, TV ou Portal
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'common-questions',
    type: 'service',
    step: {
      name: 'questions',
      index: 4,
      type: 'completion',
      success: false
    }
  }
})

/**
* Atendimento
* - Perguntas Frequentes
* - Momento do disparo: Clique em uma pergunta
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'common-questions',
    type: 'service',
    step: {
      name: 'questions',
      index: 5,
      type: 'completion',
      success: true
    }
  },
  interaction: {
    name: 'question',
    value: '[clicked-question]'
  }
})

/**
* Atendimento
* - Serviços - envio de documentos
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'sending-documents',
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
* - Serviços - envio de documentos
* - Momento do disparo: Clique no botão Enviar
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'sending-documents',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
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
* - Serviços - envio de documentos
* - Momento do disparo: Exibição da tela de sucesso do envio do formulario
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'sending-documents',
    type: 'service',
    step: {
      name: 'send-success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
* Atendimento
* - Serviços - envio de documentos
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
* - Serviços - envio de documentos
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
* - Fale com a Ouvidoria
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'contact-the-ombudsman',
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
* - Fale com a Ouvidoria
* - Momento do disparo: Clique no botão Enviar
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'contact-the-ombudsman',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
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
* - Fale com a Ouvidoria
* - Momento do disparo: Exibição da tela de sucesso do envio do formulario
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'contact-the-ombudsman',
    type: 'service',
    step: {
      name: 'form-submitted-success',
      index: 2,
      type: 'completion',
      success: true
    }
  }
})

/**
* Atendimento
* - Fale com a Ouvidoria
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
* - Fale com a Ouvidoria
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
* - Consultar Protocolo
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consult-protocol',
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
* - Consultar Protocolo
* - Momento do disparo: Clique para enviar protocolo por email
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'consult-protocol',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'send-by-email',
    value: 'next'
  }
})

/**
* Atendimento
* - Consultar Protocolo
* - Momento do disparo: Exibição da tela de sucesso do envio do formulario
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consult-protocol',
    type: 'service',
    step: {
      name: 'send-protocol',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
* Atendimento
* - Consultar Protocolo
* - Momento do disparo: Clique para enviar
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'consult-protocol',
    type: 'service',
    step: {
      name: 'send-protocol',
      index: 2,
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
* - Consultar Protocolo
* - Momento do disparo: Sucesso ao enviar protocolo
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'consult-protocol',
    type: 'service',
    step: {
      name: 'protocol-send-success',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})

/**
* Atendimento
* - Consultar Protocolo
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
* - Consultar Protocolo
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
* - Outras Solicitações - Cancelamento Eletrônico - Parcial
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'electronic-cancellation',
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
* - Outras Solicitações - Cancelamento Eletrônico - Parcial
* - Momento do disparo: Clique nas opções
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'electronic-cancellation',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'cancel',
    value: 'partial-cancellation' || 'all-products'
  }
})

/**
* Atendimento
* - Outras Solicitações - Cancelamento Eletrônico - Parcial
* - Momento do disparo: Exibição da tela de cancelamento parcial dos produtos
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'electronic-cancellation',
    type: 'service',
    step: {
      name: 'partial-cancellarion',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
* Atendimento
* - Outras Solicitações - Cancelamento Eletrônico - Parcial
* - Momento do disparo: Clique em solicitar cancelamento
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'electronic-cancellation',
    type: 'service',
    step: {
      name: 'partial-cancellarion',
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
* Atendimento
* - Outras Solicitações - Cancelamento Eletrônico - Todos os Produtos
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'electronic-cancellation',
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
* - Outras Solicitações - Cancelamento Eletrônico - Todos os Produtos
* - Momento do disparo: Clique nas opções
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'electronic-cancellation',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'cancel',
    value: 'partial-cancellation' || 'all-products'
  }
})

/**
* Atendimento
* - Outras Solicitações - Cancelamento Eletrônico - Todos os Produtos
* - Momento do disparo: Exibição da tela de cancelamento parcial dos produtos
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'electronic-cancellation',
    type: 'service',
    step: {
      name: 'all-products',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
* Atendimento
* - Outras Solicitações - Cancelamento Eletrônico - Todos os Produtos
* - Momento do disparo: Clique em solicitar cancelamento
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'electronic-cancellation',
    type: 'service',
    step: {
      name: 'all-products',
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
* Atendimento
* - Outras Solicitações - Cancelamento Eletrônico - Todos os Produtos
* - Momento do disparo: Clique em motivo do cancelamento
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'electronic-cancellation',
    type: 'service',
    step: {
      name: 'reason-for-cancellation',
      index: 3,
      type: 'completion',
      success: true
    }
  },
  interaction: {
    name: 'cancel',
    value: '[reason-for-cancellation]'
  }
})

/**
* Atendimento
* - Documentos
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'documents',
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
* - Documentos
* - Momento do disparo: Clique em todos os links que levam para a categoria de página de documentos. [imagem + título + botão]
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'documents',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'manuals' || 'contracts' || 'terms' || 'pucs',
    value: '[document-name]'
  }
})

/**
* Atendimento
* - Documentos - Manuais
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'manuals',
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
* - Documentos - Manuais
* - Momento do disparo: Clique no nome do documento.
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'manuals',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'document',
    value: '[document-name]'
  }
})

/**
* Atendimento
* - Documentos - Contratos
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'contracts',
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
* - Documentos - Contratos
* - Momento do disparo: Clique no nome do documento.
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'contracts',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'document',
    value: '[document-name]'
  }
})

/**
* Atendimento
* - Documentos - Termos
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'terms',
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
* - Documentos - Termos
* - Momento do disparo: Clique no nome do documento.
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'terms',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'document',
    value: '[document-name]'
  }
})

/**
* Atendimento
* - Documentos - Pucs
* - Momento do disparo: Exibição da tela de inicio
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'pucs',
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
* - Documentos - Pucs
* - Momento do disparo: Clique no nome do documento.
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'pucs',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'document',
    value: '[document-name]'
  }
})

/**
* Atendimento
* - Devolver Equipamento
* - Momento do disparo: Exibição passo 1 - Dados Pessoais
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'return-equipment',
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
* - Devolver Equipamento
* - Momento do disparo: Clique no botão Próximo no step de dados pessoais.
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'return-equipment',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  },
  interaction: {
    name: 'personal-data',
    value: 'next'
  }
})

/**
* Atendimento
* - Devolver Equipamento
* - Momento do disparo: Exibição passo 2 - Endereço da Coleta
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'return-equipment',
    type: 'service',
    step: {
      name: 'adress',
      index: 2,
      type: 'intermediary',
      success: false
    }
  }
})

/**
* Atendimento
* - Devolver Equipamento
* - Momento do disparo: Clique no botão enviar no step de endereço de coleta.
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'return-equipment',
    type: 'service',
    step: {
      name: 'adress',
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
* Atendimento
* - Devolver Equipamento
* - Momento do disparo: Sucesso no envio da solicitação.
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'return-equipment',
    type: 'service',
    step: {
      name: 'form-submitted-success',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})

/**
* Atendimento
* - Pergunte À Vivi
* - Momento do disparo: Exibição do Chat da Vivi
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'ask-vivi',
    type: 'service',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: false
    }
  }
})
