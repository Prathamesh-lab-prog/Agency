function sendMsg() {
    let name = document.querySelector('#inp1').value;
    let email = document.querySelector('#inp2').value;
    let subject = document.querySelector('#inp3').value;
    let message = document.querySelector('#txtarea1').value;

    let Data = {name:name,email:email,subject:subject,message:message}
    console.log(Data)
    postData(Data)
 
}

async function postData(data){
    const res = await fetch("https://agency104.herokuapp.com/api/customer", {method :"POST",
    headers:{'Content-Type': 'application/json'},
    body : JSON.stringify(data)
  })
  const Data = await res.json()
  console.log(Data);
  if(!Data.errors){
    alert("Your Message has beee send")
  }

}
