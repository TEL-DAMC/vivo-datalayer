import {EnvironmentData} from "./interfaces/EnvironmentData";
import {PageData} from "./interfaces/PageData"
import {UserData} from "./interfaces/UserData"
import {LeadData} from "./interfaces/LeadData"
import {UserInputData} from "./interfaces/UserInputData";
import {FeatureData, FeatureInteractionData} from "./interfaces/FeatureData";
import {Product, ProductInList, ProductToCart} from "./interfaces/EcommerceData";

export declare namespace dataLayer {
    /**
     *  Pageview Event
     *  MUST be triggered on EVERY pageload and on EVERY page change, even on single-page applications
     * @param pageInitObject IMPORTANT: The `event` key  must be set to `"page-init"`
     */
    function push(pageInitObject: {
        event: 'page-init'
        environment: EnvironmentData
        page: PageData
        user?: UserData
    })

    /**
     *  Lead Generation Event
     *  MUST be triggered on EVERY lead generation
     * @param leadObject IMPORTANT: The `event` key  must be set to `"lead-generated"`
     */
    function push(leadObject: {
        event: 'lead-generated'
        lead: LeadData
        userInput?: UserInputData
    })

    /**
     *  Feature Step Event
     *  MUST be triggered on EVERY step of the feature
     * @param featureStepObject IMPORTANT: The `event` key  must be set to `"feature-step"`
     */
    function push(featureStepObject: {
        event: 'feature-step'
        feature: FeatureData
    })

    /**
     *  Feature Interaction Event
     *  MUST be triggered on EVERY interaction with the feature
     * @param featureInteractionObject IMPORTANT: The `event` key  must be set to `"feature-interaction"`
     */
    function push(featureInteractionObject: {
        event: 'feature-interaction'
        feature: FeatureData,
        interaction: FeatureInteractionData
    })

    function push(ecommerceImpressionsObject: {
        event: 'ecommerce-impressions',
        ecommerce: {
            currencyCode: 'BRL'
            impressions: ProductInList[]
        }
    })

    function push(ecommerceProductClickObject: {
        event: 'ecommerce-product-click',
        ecommerce: {
            click: {
                actionField: {
                    /**
                     * Name of the list where the product was clicked on.
                     * Same as the 'list' field on an impression.
                     */
                    list: string
                }
                products: ProductInList[]
            }
        }
    })

    function push(ecommerceProductDetailObject: {
        event: 'ecommerce-product-detail',
        ecommerce: {
            detail: {
                products: Product[]
            }
        }
    })

    function push(ecommerceAddToCartObject: {
        event: 'ecommerce-add-to-cart',
        ecommerce: {
            currencyCode: 'BRL'
            add: {
                products: ProductToCart[]
            }
        }
    })

    function push(ecommerceRemoveFromCartObject: {
        event: 'ecommerce-remove-from-cart',
        ecommerce: {
            currencyCode: 'BRL'
            remove: {
                products: ProductToCart[]
            }
        }
    })

    function push(ecommerceCheckoutStep: {
        event: 'ecommerce-checkout-step',
        ecommerce: {
            currencyCode: 'BRL'
            checkout: {
                sctionField: {
                    step: number
                    option?: string
                }
                products: ProductToCart[]
            }
        }
    })

    function push(ecommercePurchase: {
        event: 'ecommerce-purchase',
        ecommerce: {
            purchase: {
                actionField: {
                    /**
                     * Transaction ID
                     */
                    id: string
                    /**
                     * Affiliated store or substore
                     */
                    affiliation?: string
                    /**
                     * The revenue in the '00.00' format, always as a string
                     */
                    revenue: string
                    /**
                     * The tax in the '00.00' format, always as a string
                     */
                    tax?: string
                    /**
                     * The shipping in the '00.00' format, always as a string
                     */
                    shipping?: string
                    /**
                     * Optional - coupon code used on the purchase
                     */
                    coupon?: string
                },
                products: ProductToCart[]
            }
        }
    })

}
