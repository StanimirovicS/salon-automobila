document
  .getElementById('kontakt-forma')
  .addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    let imePrezime = document.getElementById('imePrezime').value;
    let email = document.getElementById('email').value;
    let telefon = document.getElementById('telefon').value;
    let poruka = document.getElementById('poruka').value;

    let rezultatPorukeHTML = `
      <p><strong>Ime i prezime:</strong> ${imePrezime}</p>
      <p><strong>Email adresa:</strong> ${email}</p>
      <p><strong>Broj telefona:</strong> ${telefon}</p>
      <p><strong>Poruka:</strong> ${poruka}</p>
    `;

    document.getElementById('rezultatPoruke').innerHTML = rezultatPorukeHTML;
    let modal = new bootstrap.Modal(document.getElementById('rezultatModal'));
    modal.show();
  });
