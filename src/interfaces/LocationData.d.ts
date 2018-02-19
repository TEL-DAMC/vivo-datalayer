export interface LocationData {
    /**
     * The official state code in uppercase.
     *
     * Example: 'SP', 'RJ', 'BA'
     *
     */
    'state'?: string
    /**
     * The official city name without any diacritics, i.e. all special characters should be replaced by
     * their simplified version.
     *
     * Example: 'Sao Paulo', 'Sao Joao da Barra', 'Vitoria da Conquista'
     */
    'city'?: string
    /**
     * The brazilian zipcode, also known as 'CEP'.
     *
     * Example: '04123-123'
     *
     */
    'zipcode'?: string
    /**
     * The list of technologies available to the requested address.
     * Some possible values are 'fiber', 'dth' and 'dsl'
     *
     * Example: ['fiber', 'dth']
     *
     */
    'availableTechnology'?: string[]
}