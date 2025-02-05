var iconShareBlock = document.querySelector ( '.icon-share'),
iShare =document.querySelector('.i-share'),
netwoeks = document.querySelector('.network');


iconShareBlock.addEventListener('click' , function() {

    if (netwoeks.style.visibility ==='hidden' || netwoeks.style.visibility ==='') {
        netwoeks.style.visibility = 'visible';
        
        this.style.background = 'var(--desaturated-Dark-blue)';
        
        iShare.style.fill = 'vaar(--light-grayish-blue)';
        return
    }
    netwoeks.style.visibility = 'hidden';
    this.style.background = '';
    iShare.style.fillv = '';
})