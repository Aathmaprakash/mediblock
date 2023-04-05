// import { useState } from 'react';
    
     const [walletAddress,setWalletAddress] = useState=(" ");

    async function requestAccount () {
        console.log('Requesting account...');


        
    if(window.ethereum){
        console.log('detected');

        try{
            const accounts= await window.ethereum.request({
                method:"eth_requestAccounts",
            });
            console.log(accounts);
        }
        catch(error){
            console.log('error connecting.....');
        }

           
if(accounts="0x98b025d69017f34bcb8c128082dc99e8682306aa"){
    // 0x98b025D69017F34bcB8C128082dc99e8682306Aa
    window.location.assign("patient.html");
        alert("Login Success");
    }
else{
    alert("Invalid Address");
    return;
}

    }

    else{
        alert('not installed MetaMask');
    }

}

// function auth(){
    
// if(accounts="0x98b025d69017f34bcb8c128082dc99e8682306aa"){
//     // 0x98b025D69017F34bcB8C128082dc99e8682306Aa
//     window.location.assign("patient.html");
//         alert("Login Success");
//     }
// else{
//     alert("Invalid Address");
//     return;
// }
// }
    

































// window.userWalletAddress=null
// const loginButton=document.getElementById('loginButton')

// function toggleButton(){

//     if(!window.ethereum){
//         loginButton.innerText='Metamask is not installed'
//         return false
//     }
    
// loginButton.addEventListener('click',loginWithMetaMask)
   
// }

//  async function loginWithMetaMask(){
//  const accounts =await window.ethereum.request({method:'eth_requestAccounts'})
// }


// window.addEventListener('DOMContentLoaded',(_event)=>
// {
//     toggleButton()
// });


// document.getElementById('loginButton').addEventListener('click', event => {
//     let account;
//      const ethereum.request({method:'eth_requestAccounts'}).then(accounts =>{
//     account=accounts[0];
//     console.log(account);
//     });

    

    // ethereum.request({method:'eth_getBalance',params:[account,'latest']}).then(result=>{
    //     console.log(result);
    // });
// // });

// function auth(){
//     if(document.userWalletAddress == userWalletAddress){
//         window.location.assign("patient.html");
//         alert("Login Success");
//     }
// else{
//     alert("Invalid Address");
//     return;
// }
// }
