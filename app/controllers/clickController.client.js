const addButton = document.querySelector('.btn-add');
const deleteButton = document.querySelector('.btn-delete');
const clickNbr = document.querySelector('#click-nbr');
const apiUrl = appUrl + '/api/:id/clicks';

function updateClickCount (data) {
  var clicksObject = JSON.parse(data);
  clickNbr.innerHTML = clicksObject.clicks;
}

ajaxfunctions.ready(ajaxfunctions.ajaxRequest('GET', apiUrl, updateClickCount));

addButton.addEventListener('click', function () {


  ajaxfunctions.ajaxRequest('POST', apiUrl, function () {
    ajaxfunctions.ajaxRequest('GET', apiUrl, updateClickCount);
  });
}, false);

deleteButton.addEventListener('click', function () {

  ajaxfunctions.ajaxRequest('DELETE', apiUrl, function () {
    ajaxfunctions.ajaxRequest('GET', apiUrl, updateClickCount);
  });
}, false);
