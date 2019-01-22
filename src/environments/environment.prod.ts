export let APIURL ='';

switch (window.location.hostname){
case 'primepaper.kerokuapp.com':
APIURL = 'primepaper.azurewebsites.com'
break;
default: APIURL = 'https://localhost:44311/api';
}
export const environment = {
  production: true
};