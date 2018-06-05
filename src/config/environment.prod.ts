import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyAtmYacIQIFTd0AHv21374S5-ZTLrYKZ4U',
    authDomain: 'nba-social-cf47a.firebaseapp.com',
    databaseURL: 'https://nba-social-cf47a.firebaseio.com',
    projectId: 'nba-social-cf47a',
    storageBucket: 'nba-social-cf47a.appspot.com',
    messagingSenderId: '252567960973'
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'Green',
    defaultProfileCover:
      'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
