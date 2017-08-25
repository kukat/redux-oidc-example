import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
  client_id: 'iCM',
  popup_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: 'code id_token token',
  scope: 'openid profile',
  authority: 'http://localhost:8080/auth/realms/b2a',
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  // accessTokenExpiringNotificationTime: 10
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
