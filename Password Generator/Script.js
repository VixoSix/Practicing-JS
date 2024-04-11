// Crea la funcion generate para el boton
function generate() {

    // Crea variable dictionary para guardar los tipos de caracteres
    let dictionary = '';
    if (document.getElementById('lowercaseCb').checked) {
      dictionary += 'qwertyuiopasdfghjklzxcvbnm';
    }
    if (document.getElementById('uppercaseCb').checked) {
      dictionary += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    }
    if (document.getElementById('digitsCb').checked) {
      dictionary += '1234567890';
    }
    if (document.getElementById('specialsCb').checked) {
      dictionary += '!@#$%^&*()_+-={}[];<>:';
    }

    // Crea constante length para guardar el valor de la barra
    const length = document.querySelector('input[type="range"]').value;
  
    // si el largo es menor a 1 o igual a 0, que retorne
    if (length < 1 || dictionary.length === 0) {
      return;
    }
    
    //guarda en la variable password los caracteres de manera aleatoria
    let password = '';
    for (let i = 0; i < length; i++) {
      const pos = Math.floor(Math.random() * dictionary.length);
      password += dictionary[pos];
    }
    
    document.querySelector('input[type="text"]').value = password;
  }


  // Da la accion de generar contraseña dependiendo de los checkbox
  [...document.querySelectorAll('input[type="checkbox"], button.generate')].forEach(elem => {
    elem.addEventListener('click', generate);
  });
  
  // Cambia el largo dependiendo de donde este la barra
  document.querySelector('input[type="range"]').addEventListener('input', e => {
    document.querySelector('div.range span').innerHTML = e.target.value;
    generate();
  });
  
  /* Al dar click en el boton de copiar, se guarda la contraseña en la constante pass
  en caso de que la contraseña sea valida. se copia lo que está en pass, y 
  cambia el texto del boton a "copied!" por 1 segundo, para despues volver a "copy"*/
  document.querySelector('div.password button').addEventListener('click', () => {
    const pass = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(() => {
      document.querySelector('div.password button').innerHTML = 'copied!';
      setTimeout(() => {
        document.querySelector('div.password button').innerHTML = 'copy';
      }, 1000);
    })
  });
  
  generate();