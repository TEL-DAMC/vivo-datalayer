export declare interface EnvironmentData {
    /**
     * A descriptive name for the environment in a dasherized form
     * e.g.: 'meu-vivo-mais'
     */
    name: string
    platform: 'app-webview' | 'desktop' | 'mobile' | 'responsive'
}