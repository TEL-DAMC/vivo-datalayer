import {LocationData} from "./LocationData";

export declare interface UserInputData {
    'info'?: {
        /**
         * The user's CPF (brazilian Natural Persons Register)
         * https://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
         */
        'cpf'?: string
        'email?': string
        /**
         * The user's phone number in the MSISDN format CC + NDC + SN, where:
         * CC = Country Code
         * NDC = National Destination Code
         * SN = Subscriber Number
         *
         * Example: '5511987654321', where '55' is Brazil's Country Code,
         * '11' is the Destination Code for São Paulo and '987654321' is the user's Subscriber Number
         *
         */
        'msisdn?': '5511942177736'
    },
    'location'?: LocationData
}