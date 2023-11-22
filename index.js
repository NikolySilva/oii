

function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    //Create a SMTP credentials

    // generating random number as OTP;
    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>Verificação</h1><br>
        <h2>Seu código é</h2>${otp_val}
    `;
    //email code
    Email.send({
        SecureToken : "4b2d5094-3c29-4fbc-91e1-45169f4d3528",
        To : email.value,
        From : "nikolypereira72@gmail.com",
        Subject : "Olá segue abaixo seu código:",
        Body : emailbody
    }).then(
        //se sucesso retorna "ok"
      message => {
        if(message == "ok"){
            alert("Código enviado para o email "+ email.value);

            //agora deixar o output visible
            otpverify.computedStyleMap.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click' ,()=>{
                //agora verifica email é valido
                if(otp_inp.value == otp_val){
                    alert("Email verificado");
                }
                else{
                    alert("Invalido OTP");
                }
            })
        }
      }
    );
}