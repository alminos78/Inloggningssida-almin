const loggKnapp = document.getElementById('loggaIn');
const statusEtt = document.getElementById('statusEtt');
const namn = 'text'
const lösenord = 1234

loggKnapp.addEventListener('click', function () {
    var loggNamn = document.getElementById('användarNamn').value;
    var loggLösen = document.getElementById('lösenordLog').value;
    var menyEtt = document.getElementById('menyEtt')

   
    if (loggNamn == namn && loggLösen == lösenord) {
        loggKnapp.textContent = 'Logga Ut';
        statusEtt.textContent = 'Välkommen ' + (namn);
        var namnStore = loggNamn;
        var lösenStore = loggLösen;
        if (namnStore && lösenStore){
            localStorage.setItem(namnStore, lösenStore);
            //location.reload(functionEtt);
        }
 
        if (menyEtt.style.display === "none") {
            menyEtt.style.display = "block";
          } 
        else {
            menyEtt.style.display = "none";
          }
       
    }
    else {
        loggKnapp.textContent = 'Försök Igen';
        statusEtt.textContent = 'Oj något gick fel.';
        if (menyEtt.style.display === "none") {
            menyEtt.style.display = "block";
          } 
        else {
            menyEtt.style.display = "none";
          }
    }
    
})



