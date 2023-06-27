let namasteBtn=document.querySelector('button');

namasteBtn.addEventListener('click',inputmsg);
function inputmsg() {
    let name=prompt('Enter Name Of a Student')
    namasteBtn.textContent='Roll No. 1'+name;
    
}