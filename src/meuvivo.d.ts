import {EnvironmentData} from "./interfaces/EnvironmentData";
import {PageData} from "./interfaces/PageData"
import {UserData} from "./interfaces/UserData"
import {FeatureData, FeatureInteractionData} from "./interfaces/FeatureData";

declare interface MeuVivoEnvironmentData extends EnvironmentData {
    /**
     * A descriptive name for the environment in a dasherized form
     * e.g.: 'meu-vivo-mais'
     */
    name: 'meu-vivo-movel-desktop'
        | 'meu-vivo-site-mobile'
        | 'meu-vivo-fixo-desktop-vivo-1'
        | 'meu-vivo-fixo-desktop-vivo-2'
        | 'meu-vivo-fixo-app'
        | 'meu-vivo-next'
        | 'meu-vivo-mais'
}

declare interface MeuVivoPageData extends PageData {
    currentSubscription: Subscription
}

declare interface Subscription {
    id: string
    plan: {
        name: string
        billing: 'postpaid' | 'prepaid' | 'control'
        type: 'mobile' | 'broadband' | 'landline' | 'tv'
        technology: '4g' | 'fiber' | 'dth' | 'dsl'
    }
}

declare interface MeuVivoUserData extends UserData {
    subscriptions: Subscription[]
}

declare interface MessageData {
    type: 'warning' | 'success' | 'info' | 'error'
    name: string
    code: string
}

export declare namespace dataLayer {
    /**
     *  Pageview Event
     *  MUST be triggered on EVERY pageload and on EVERY page change, even on single-page applications
     * @param pageInitObject IMPORTANT: The `event` key  must be set to `"page-init"`
     */
    function push(pageInitObject: {
        event: 'page-init'
        environment: MeuVivoEnvironmentData
        page: MeuVivoPageData
        user?: MeuVivoUserData
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

    function push(interfaceMessageObject: {
        event: 'interface-message'
        message: MessageData,
        element: HTMLElement
    })

}
