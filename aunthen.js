function UserAuthentication () {
    alert('Welcome');
          const userName = prompt ("What is your username\?");
          if (userName ==='Timmy') {
           let passkey = Number(prompt('What is the password\?'));
            if(passkey === 32831901){
                alert ('Welcome back ' + userName );
            }
            else{
                alert('Wrong password, please try again.')
            }
          }
          else{
            alert('Sorry you dont have access to this page.')
          }
}

UserAuthentication()