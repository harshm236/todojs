function addNew(){
    document.getElementById('s1').style.filter='blur(0px)'
    document.getElementById('test').style.visibility='hidden'
    let newTask = document.getElementById('newtask')
    event.preventDefault()
    let x =  document.createElement('div')
    x.className = 'flexitem'
    x.addEventListener('hover',open)
    let tid = new Date()
    x.id=tid.getTime()
    let y = document.getElementById('flexcon')
    x.innerText= newTask.value
    y.append(x)
    console.log(x.id)
    let x1 = document.createElement('button')
    let x2 = document.createElement('button')
    let x3 = document.createElement('button')
    // x1.style.float='right'
    
    x1.innerText='Add Task'
    x1.id = 2 * x.id
    x1.style.backgroundColor='red'

    x2.style.backgroundColor='green'
    x2.innerText='Delete Card'
    x1.addEventListener('click',addMiniTask)
    x2.addEventListener('click',delCard)
    function delCard(){
        console.log(x.id)
        alert('are you sure you want to delete card ?')
        x.remove()
    }
    x3.innerText='Expand (double click to shrink)'
    function expand(){
        { 
            // let s1 = document.getElementById('body')
            // let a = document.createElement('section')
            // a.id='blank'
            // a.style.backgroundColor='blue'
            // s1.appendChild(a)
            // console.log(354)
            // y.style.display='static'
        for(let i in y.children)
            if(y.children[i].id!=x.id)
            {
                document.getElementById(y.children[i].id).style.visibility='hidden'

                

                   
                //   console.log(y.children[i].id)
            }
            else {
            //    document.getElementById(y.children[i].id)
            
            x.style.position='absolute'
            x.style.top='0%'
            x.style.left='35%'
            // x.style.transform='translateX(500px)'
            }

            
        }
        
        // console.log(document.getElementById(y.children[0].id).style.visibility='hidden')
        
    }
    function shrink(){
        for(let i in y.children)
            if(y.children[i].id!=x.id)
            {
                document.getElementById(y.children[i].id).style.visibility='visible'
                x.style.position='static'
                

                   
                //   console.log(y.children[i].id)
            }
    }
    
    x3.addEventListener('click',expand)
    x3.addEventListener('dblclick',shrink)
    
    x.appendChild(x1)
    x.appendChild(x2)
    x.appendChild(x3)
}


function goBlur(){
    document.getElementById('s1').style.filter='blur(5px)'
    
    
    document.getElementById('test').style.visibility='visible'
}



function addMiniTask(){

    let x = document.getElementById((this.id)/2)
    x.append(document.createElement('hr'))
    let check= document.createElement('input')
    check.type='checkbox'
    let addText= document.createElement('input')
    addText.placeholder='add mini tasks'
    addText.style.textAlign='center'
    addText.type='text'
    addText.style.fontSize='28px'
    addText.style.display='inline-block'
    // x.append(check)
    x.appendChild(addText)
    addText.appendChild(check)
    let a1 = document.createElement('button')
    a1.innerText='❌'
    a1.addEventListener('click',rem)
    
    x.append(a1)
function rem(){
          addText.remove()
          a1.remove()
    }

}
function close1()
{   
    let a= document.getElementById('s1').style.filter='blur(0px)'
        // a ='blur(0px)'
    
   let b = document.getElementById('test').style.visibility="hidden"
 console.log(5555)       
}


