export let APIURL ='';

switch (window.location.hostname){
case 'https://prime-paper.herokuapp.com':
APIURL = 'https://primepaper.azurewebsites.net/api'
break;
default: APIURL = 'https://localhost:44311/api';
}
export const environment = {
  production: true
};