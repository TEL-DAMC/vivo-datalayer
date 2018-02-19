'use strict'
window.dataLayer = window.dataLayer || []

window.dataLayer.push({
  event: 'page-init',
  environment: {
    name: String,
    platform: String
  },
  page: {
    name: String,
    hierarchy: String,
    version: String,
    template: String,
    area: String,
    segment: String
  }
})

window.dataLayer.push({
  event: 'userInput-form',
  userInput: {
    info: {
      cpf: String,
      email: String,
      msisdn: String
    },
    location: {
      state: String,
      city: String,
      zipcode: String,
      avaiableTechnology: [String, String]
    }
  }
})

window.dataLayer.push({
  event: 'leadData',
  lead: {
    type: 'click-to-call' | 'click-to-receive-a-call' | 'request-form' | 'chat' | 'make-your-own-combo',
    /**
     * lead.id
     * String com o ID do ASB ou outro sistema equivalente.
     * Caso não haja, utilizar undefined.
     */
    id: String,
    sourceCallToAction: String,
    coverage: {
      /**
       * lead.coverage.status
       * Caso haja disponibilidade preencher com true, em caso contrário, com false.
       */
      status: true,
      location: {
        state: String,
        city: String,
        zipcode: String,
        /**
         * lead.coverage.location.availableTechnology
         * Se não houver cobertura, incluir como ‘box’,
         * pois o Vivo Box sempre é ofertado quando não existe cobertura de cabeamento.
         */
        availableTechnology: [String]
      }
    }
  }
})

window.dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'click-to-call',
    type: 'lead',
    step: {
      name: 'click-to-call-completion',
      index: 1 | 2,
      type: 'completion',
      success: true
    }
  }
})
