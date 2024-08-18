const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=document.querySelector('#height').value
    const weight=document.querySelector('#weight').value
    const result=document.querySelector('#result')
    if(height===''||height<=0){
        result.innerHTML='plz give valid height'
    }
    else if(weight===''||weight<=0){
        result.innerHTML='plz give valid weight'
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
         result.innerHTML=`<h2>${bmi}</h2>`
    }
})