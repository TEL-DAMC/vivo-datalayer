import {EnvironmentData} from "./interfaces/EnvironmentData";
import {PageData} from "./interfaces/PageData"
import {UserData} from "./interfaces/UserData"
import {FeatureData, FeatureInteractionData} from "./interfaces/FeatureData";

interface MeuVivoEnvironmentData extends EnvironmentData {
    name: 'meu-vivo-movel-desktop' | 'meu-vivo-movel-mobile' | 'meu-vivo-fixo-desktop-vivo-1' | 'meu-vivo-fixo-desktop-vivo-2' | 'meu-vivo-fixo-mobile-vivo-1' | 'vivo-next' | 'vivo-mais'
}

declare namespace dataLayer {
    /**
     *  Pageview Event
     *  MUST be triggered on EVERY pageload and on EVERY page change, even on single-page applications
     * @param pageInitObject IMPORTANT: The `event` key  must be set to `"page-init"`
     */
    function push(pageInitObject: {
        event: 'page-init'
        environment: MeuVivoEnvironmentData
        page: PageData
        user?: UserData
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

}
