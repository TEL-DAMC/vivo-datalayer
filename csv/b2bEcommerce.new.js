/**
* PROMO
Soluciona TI
Internet Banda Larga
Internet Fibra Empresas
Planos de Celular
Cloud Server
Telefone Fixa

ASSINE
Home
Móvel
Vóz Fixa
Internet e TV
Combos
Cloud
Soluções Digitais
* - C2C
* - Momento do disparo: (Desktop) Quando o modal de 0800 for exibido
(Mobile) Quando o usuário tocar no botão de C2C
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'c2c',
    type: 'internet-e-tv' | 'movel' | 'cloud' | 'telefonia-fixa',
    step: {
      name: 'abertura-modal',
      index: '-',
      type: 'initial',
      success: true
    }
  },
  interaction: {
    name: posicaoDoBotao,
    value: nomeDoBotao
  }
})

/**
* PROMO
Soluciona TI
Internet Banda Larga
Internet Fibra Empresas
Planos de Celular
Cloud Server
Telefone Fixa
* - C2RC
* - Momento do disparo: Quando o modal de sucesso de C2RC é exibido
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'c2rc',
    type: 'internet-e-tv' | 'movel' | 'cloud' | 'telefonia-fixa',
    step: {
      name: 'abertura-modal',
      index: '-',
      type: 'initial',
      success: true
    }
  }
})

/**
* PROMO
Soluciona TI
Internet Banda Larga
Internet Fibra Empresas
Telefone Fixa
* - Chat Oracle
* - Momento do disparo: Quando o chat da Oracle abrir
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'chat',
    type: 'internet-e-tv' | 'telefonia-fixa',
    step: {
      name: 'abertura-chat',
      index: '-',
      type: 'initial',
      success: true
    }
  }
})

/**
* PROMO
Soluciona TI
Internet Banda Larga
Internet Fibra Empresas
Telefone Fixa
* - Chat Wooza
* - Momento do disparo: Quando o chat da Wooza abrir
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'chat',
    type: 'movel' | 'cloud',
    step: {
      name: 'abertura-chat',
      index: '-',
      type: 'initial',
      success: true
    }
  }
})

/**
* ASSINE
Home
Móvel
Vóz Fixa
Internet e TV
Combos
Cloud
Soluções Digitais
* - Chat Triagem
* - Momento do disparo: Quando o usuário clica em uma das três opções do "O que você deseja", depois de clicar em alguma opção de chat
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'chat',
    type: 'movel' | 'telefonia-fixa' | 'internet-e-tv' | 'combos' | 'cloud' | 'solucoes-digitais' | 'rede-de-dados',
    step: {
      name: 'chat-modal:o-que-voce-deseja',
      index: '-',
      type: 'initial',
      success: true
    }
  },
  interaction: {
    name: posicaoDoBotao,
    value: 'planos-de-internet-telefonia-fixa-e-tv' | 'telefonia-movel' | 'sou-cliente-vivo-e-tenho-duvidas' | 'telefonia-movel' | 'internet-fixa'
  }
})

/**
* Promo - Móvel
* - Checkout Wooza
* - Momento do disparo: Quando a tela de sucesso do checkout de Wooza for exibida
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'fluxo-contratacao',
    type: 'movel',
    step: {
      name: 'confirmacao-do-pedido',
      index: '-',
      type: 'completion',
      success: true
    }
  }
})

/**
* Assine - Cloud Server
* - Checkout Wooza
* - Momento do disparo: Quando a tela de sucesso do checkout de Wooza for exibida
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'fluxo-cadastro',
    type: 'cloud-server',
    step: {
      name: 'cadastro-finalizado',
      index: '-',
      type: 'completion',
      success: true
    }
  }
})

/**
* Assine
Cloud Data Center
Cloud Backup
* - Checkout Wooza
* - Momento do disparo: Quando a tela de sucesso do checkout de Wooza for exibida
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'fluxo-cadastro',
    type: 'cloud-data-center' | 'cloud-backup',
    step: {
      name: 'cadastro-finalizado',
      index: '-',
      type: 'completion',
      success: true
    }
  }
})

/**
* PROMO
Fixo
Internet
Combo
* - Checkout Vivo Promo
* - Momento do disparo: Quando a tela de sucesso do checkout da Vivo for exibida
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'fluxo-contratacao',
    type: 'fixo' | 'internet-e-tv' | 'combo',
    step: {
      name: 'conclusao-do-pedido',
      index: '-',
      type: 'completion',
      success: true
    }
  }
})

/**
* Assine
Soluções Digitais
* - Checkout Vivo Assome
* - Momento do disparo: Quando a tela de sucesso do checkout da Vivo for exibida
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'fluxo-contratacao',
    type: 'solucoes-digitais',
    step: {
      name: 'conclusao-do-pedido',
      index: '-',
      type: 'completion',
      success: true
    }
  }
})

/**
* Assine - Open Cloud
* - Checkout Wooza
* - Momento do disparo: Quando a tela de sucesso do checkout de Wooza for exibida
*/
dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'fluxo-cadastro',
    type: 'open-cloud',
    step: {
      name: 'cadastro-finalizado',
      index: '-',
      type: 'completion',
      success: true
    }
  }
})

/**
* Todo Promo e Assine
* - CTAs
* - Momento do disparo: Quando o usuário clicar no botão "Clique aqui e compre agora" / "Assine Já" / "Monte seu Combo" /  "Consultar"
*/
dataLayer.push({
  event: 'feature-interaction',
  feature: {
    name: 'fluxo-checkout',
    type: categoriaDeProduto,
    step: {
      name: 'intencao-contratar',
      index: '-',
      type: 'initial',
      success: true
    }
  },
  interaction: {
    name: posicaoDoBotao,
    value: nomeDoBotao
  }
})
