function ispisivanjeNaslova() {
  let naslov = document.getElementById('naslov');
  let tekst = naslov.innerHTML;
  naslov.innerHTML = '';
  let i = 0;
  let brzina = 50;
  function ispis() {
    if (i < tekst.length) {
      naslov.innerHTML += tekst.charAt(i);
      i++;
      setTimeout(ispis, brzina);
    }
  }
  ispis();
}
window.onload = ispisivanjeNaslova;
