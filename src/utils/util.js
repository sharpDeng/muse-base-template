
export function isInApp(){
  var url = window.location.href;
  return (url.indexOf('http://') < 0);
}