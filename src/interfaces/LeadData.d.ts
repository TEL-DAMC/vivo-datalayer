import {CoverageData} from "./CoverageData";

export interface LeadData {
    type: 'click-to-call' | 'click-to-receive-a-call' | 'request-form' | 'chat'
    /**
     * The page element that initiated the lead, such as the 'hero-banner', the 'product-card',
     * 'contact-floater-bar', etc.
     */
    sourceCallToAction: string,
    /**
     * If the lead contains data about the user's technology coverage, we must include that
     */
    coverage?: CoverageData
}