export declare interface FeatureData {
    /**
     * A descriptive name for the feature in a dasherized form
     * e.g.: 'segunda-via'
     */
    name: string
    type: string
    step?: {
        /**
         * The step's name in a dasherized form.
         *
         * Example: 'product-selection', 'address-input', etc.
         */
        name: string
        index: number
        type: 'initial' | 'intermediary' | 'completion'
        success?: boolean
    }
}

export declare interface FeatureInteractionData {
    name: string
    value: 'next' | 'back' | 'cancel' | string
}