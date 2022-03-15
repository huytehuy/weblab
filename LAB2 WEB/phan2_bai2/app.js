

document.querySelector('.button.cong').addEventListener('click',function(){
    var sothunhat=document.querySelector('#number1').value*1
    var sothuhai=document.querySelector('#number2').value*1
    document.querySelector('#number3').value=sothunhat+sothuhai

})
document.querySelector('.button.tru').addEventListener('click',function(){
    var sothunhat=document.querySelector('#number1').value*1
    var sothuhai=document.querySelector('#number2').value*1
    document.querySelector('#number3').value=sothunhat-sothuhai


})
document.querySelector('.button.nhan').addEventListener('click',function(){
    var sothunhat=document.querySelector('#number1').value*1
    var sothuhai=document.querySelector('#number2').value*1
    document.querySelector('#number3').value=sothunhat*sothuhai


})
document.querySelector('.button.chia').addEventListener('click',function(){
    var sothunhat=document.querySelector('#number1').value*1
    var sothuhai=document.querySelector('#number2').value*1
    document.querySelector('#number3').value=sothunhat/sothuhai


})
document.querySelector('.button.luythua').addEventListener('click',function(){
    var sothunhat=document.querySelector('#number1').value*1
    var sothuhai=document.querySelector('#number2').value*1
    document.querySelector('#number3').value=sothunhat**sothuhai


})