* C2C
* - -
* - Momento do disparo: Exibição do modal de 0800
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'c2c',
    type: 'c2c',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: true
    }
  }
})

/**
* C2RC
* - -
* - Momento do disparo: Exibição do modal de sucesso de C2RC
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'c2rc',
    type: 'c2rc',
    step: {
      name: 'home',
      index: 1,
      type: 'initial',
      success: true
    }
  }
})

/**
* Checkout Success
* - Wooza
* - Momento do disparo: Exibição da tela de sucesso do checkout de Wooza
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'checkout',
    type: 'checkout',
    step: {
      name: 'success',
      index: 4,
      type: 'completion',
      success: true
    }
  }
})
