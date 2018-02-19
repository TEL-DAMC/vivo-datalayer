import {UserInputData} from './UserInputData'

/**
 * The UserData object MUST ONLY be used when the user is authenticated.
 * In other words, data in the UserData object MUST ALWAYS come from a trusted source.
 */
export declare interface UserData extends UserInputData {
    'loyalty': {
        'category': 'silver' | 'gold' | 'platinum' | 'vivo-v',
        'monthsAsMember': number
    },
    'login': {
        'isLoggedIn': boolean,
        /**
         * How the user loggd-in
         */
        'type': 'cpf' | 'email' | 'msisdn' | 'cookie' | 'facebook' | 'mobile-connect'
    }
}