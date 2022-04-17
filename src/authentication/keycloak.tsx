import Keycloak from 'keycloak-js';

const configuration = {
    url: process.env.REACT_APP_BASE_URL_IAM,
    realm: 'bankingprevision',
    clientId: 'app'
}

const keycloak = Keycloak(configuration);

export default keycloak;
