
let xhr = new XMLHttpRequest();
xhr.open('GET', 'content.txt', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let content = xhr.responseText;
    document.getElementById('content').innerHTML = content;
  }
};
xhr.send();
