
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
                  name: 'agreements',
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
                    name: send-by-email',
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
                    name: send-by-email',
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
               * - Meu Serviços - Com Portabilidade - Fixo 2 
               * - Momento do disparo: No carregamento da página
               */
              dataLayer.push({
                event: 'feature-step',
                feature: {
                  name: 'my-services-'portability',
                  type: 'pack-and-services',
                  step: {
                    name: with-portability',
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
                  name: 'my-services-'portability',
                  type: 'pack-and-services',
                  step: {
                    name: with-portability',
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
                  name: 'my-services-'portability',
                  type: 'pack-and-services',
                  step: {
                    name: with-portability',
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
                  name: 'my-services-'portability',
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
                  name: 'my-services-'portability',
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
                  name: 'my-services-'portability',
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
              