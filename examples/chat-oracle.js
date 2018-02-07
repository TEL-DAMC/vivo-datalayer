window.dataLayer = window.dataLayer || []

/**
 * Waiting room
 * ON: page load
 */
window.dataLayer.push({
  event: 'page-init',
  environment: {
    name: 'chat-oracle'
  },
  page: {
    name: 'chat-waiting-room'
  },
  lead: {
    /**
     * THIS IS THE LEAD ID
     */
    id: string
  }
})

window.dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'sales-chat-oracle',
    type: 'sales-chat',
    step: {
      name: 'waiting-room',
      index: 1,
      type: 'initial'
    }
  }
})

/**
 * Chat start
 * ON: page load
 */
window.dataLayer.push({
  event: 'page-init',
  environment: {
    name: 'chat-oracle'
  },
  page: {
    name: 'chat',
    area: 'b2c',
    segment: 'ecommerce'
  },
  lead: {
    /**
     * THIS IS THE LEAD ID (chatTransactionID)
     */
    id: string
  }
})

window.dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'sales-chat-oracle',
    type: 'sales-chat',
    step: {
      name: 'chat-start',
      index: 2,
      type: 'intermediary'
    }
  }
})

window.dataLayer.push({
  event: 'feature-step',
  feature: {
    name: 'sales-chat-oracle',
    type: 'sales-chat',
    step: {
      name: 'chat-successful-sale',
      index: 3,
      type: 'completion',
      success: true
    }
  }
})