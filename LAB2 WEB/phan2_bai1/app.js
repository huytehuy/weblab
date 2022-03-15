
var tr = document.querySelectorAll('tr')
var td = document.querySelectorAll('td')
var table = document.querySelectorAll('table')


// Thêm table
document.querySelector('.button.them').addEventListener('click',function(){
    document.querySelector('.table').innerHTML+=`
<table>
<tr>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td></td>
</tr>
</table>
`
})

// Thêm 1 hàng

document.querySelector('.button.them1hang').addEventListener('click',function(){
        // document.querySelector('table').innerHTML+=`<tr><td></td></tr>`
        for(i=0;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('table')[i].innerHTML+=`<tr>`
            document.querySelectorAll('tr')[i].innerHTML+=`<td></td>`
            document.querySelectorAll('table')[i].innerHTML+=`</tr>`

            // for(i=0;i<querySelectorAll('tr').length;i++){
            //     con
            // }
            console.log(td.length)
        }
    })

document.querySelector('.button.them1cot').addEventListener('click',function(){
        for(i=0;i<document.querySelectorAll('tr').length;i++){
            document.querySelectorAll('tr')[i].innerHTML+=`<td></td>`
        }
})

document.querySelector('.button.xoahet').addEventListener('click',function(){
    document.querySelector('.table').innerHTML=``
})

