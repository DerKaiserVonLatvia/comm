function writeInWords(){
    let text = document.getElementById("mainInput").value
    function addVoteToPoll(pollId, voteNum) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", `server.php?word=${text}`, true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
              document.getElementById("output").innerText=this.responseText;
           }
        };
        xhttp.send();
      }
      
}
