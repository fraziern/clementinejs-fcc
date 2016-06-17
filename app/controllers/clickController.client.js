const addButton = document.querySelector('.btn-add');
const deleteButton = document.querySelector('.btn-delete');
const clickNbr = document.querySelector('#click-nbr');
const apiUrl = appUrl + '/api/:id/clicks';

function updateClickCount (data) {
  var clicksObject = JSON.parse(data);
  clickNbr.innerHTML = clicksObject.clicks;
}

ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));

addButton.addEventListener('click', function () {


  ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
    ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
  });
}, false);

deleteButton.addEventListener('click', function () {

  ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
    ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
  });
}, false);
