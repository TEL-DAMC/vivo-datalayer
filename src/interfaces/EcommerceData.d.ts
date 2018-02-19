/**
 * The product object follows basically the same format as the object documented on the
 * official Google Tag Manager documentation, with an additional field 'custom' containing
 * any additional custom metrics or dimensions
 *
 * Reference: https://developers.google.com/tag-manager/enhanced-ecommerce
 */
export interface Product {
    'name': string,
    'id': string,
    /**
     * Product price must be in the format '00.00', always represented as a string
     */
    'price'?: string
    'brand'?: string
    'category'?: string
    'variant'?: string
    'custom'?: {
        metrics?: object
        dimensions?: object
    }
}

export interface ProductInList extends Product {
    list: string
    /**
     * The `position` parameter is not available on product details.
     */
    position: number
}

export interface ProductToCart extends Product {
    quantity: number
}