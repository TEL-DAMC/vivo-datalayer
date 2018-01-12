'use strict'
window.dataLayer = window.dataLayer || []
window.dataLayer.push({
  event: 'page-init',
  'environment': { // Data regarding the overall classification of the environment
    'name': 'meu-vivo-mais',
    'platform': 'app-webview'
  },
  'page': { // Data regarding the content of the current page.
    'name': 'ProductPage - iPhone X',
    'hierarchy': 'fixa>assine>novas_cidades>teresina',
    'version': '1.2.10',
    'template': 'ProductPage',
    'journey': '\'Login\'|\'MinhaConta\'|\'RecuperacaoSenha\'|\'Cadastro\'',
    'step': 1 | 2 | 3 | 4 | 5,
    'area': '\'B2B\'|\'B2C\'',
    'segment': '\'eCommerce\'|\'eCare\''
  },
  'user': { // Data coming diretly from the backend
    'info': {
      'cpf': '05749961761',
      'email': 'e@ma.il',
      'msisdn': '5511942177736'
    },
    'location': {
      'state': '\'SP\'|\'RJ\'',
      'city': 'Sao Paulo|Rio de Janeiro',
      'zipcode': '04110-060',
      'availableTechnology': {
        'fiber': true | false,
        'DTH': true | false,
        'DSL': true | false
      }
    },
    'loyalty': {
      'category': 'string',
      'monthsAsMember': 12
    },
    'login': {
      'isLoggedIn': true | false,
      'type': '\'CPF\'|\'email\'|\'phoneNumber\'|\'previousSessionCookie\''
    }
  },
  'userInput': { // Data informed by the user during this session
    'info': {
      'cpf': '05749961761',
      'email': 'e@ma.il',
      'msisdn': '5511942177736'
    },
    'location': {
      'state': '\'SP\'|\'RJ\'',
      'city': '\'Sao Paulo\'|\'Rio de Janeiro\'',
      'zipcode': '04110-060',
      'availableTechnology': '\'fiber\'|\'DTH\'|\'DSL\''
    }
  },
  'ecommerce': { // eCommerce and product data
    'impressions': [{
      'id': 'skuNumber',
      'name': 'iPhone X',
      'price': 9999.99,
      'brand': 'Apple',
      'category': 'categLvl1/categLvl2/categLvl3/categLvl4/categLvl5',
      'variant': '\'Branco\'|\'100GB\'',
      'list': 'productGrid',
      'position': 1 | 2 | 3 | 4 | 5
    }],
    'checkout': {
      'step': 1 | 2 | 3 | 4 | 5,
      'cart': [{
        'id': 'skuNumber',
        'name': 'iPhone X',
        'price': 9999.99,
        'quantity': 1 | 2 | 3 | 4 | 5,
        'brand': 'Apple',
        'category': 'categLv1/categLv2/categLv3/categLv4/categLv5',
        'variant': '\'Branco\'|\'100GB\'',
        'list': 'productGrid',
        'position': 1 | 2 | 3 | 4 | 5
      }],
      'transactions': [{
        'id': 'transactionId',
        'revenue': 9999.99,
        'store': 'Loja Online', // sent as "affiliation"
        'method': '\'visa\'|\'mastercard\'|\'simulation\'',
        'invoiceType': '\'Boleto\'|\'Digital\'',
        'invoiceDueData': 7, // Dia de vencimento da fatura no mês
        'products': [{
          'id': 'skuNumber',
          'name': 'iPhone X',
          'price': 9999.99,
          'quantity': 1 | 2 | 3 | 4 | 5,
          'brand': 'Apple',
          'category': 'categLvl1/categLvl2/categLvl3/categLvl4/categLvl5',
          'variant': '\'Branco\'|\'100GB\''
        }]
      }]
    }
  }
})
