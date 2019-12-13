import React, {useEffect, useState} from  'react'


const ExampleComponent = () =>{

    const [user, setUser] = useState(undefined)

    const getUser = ()=>{
        console.log('get user');
        setTimeout(()=>{
            console.log('respond');
            setUser('Agus')
        }, 3000)
    }

    const testClickHandler = () =>{
        setUser('Agus')
    }

    React.useEffect(()=>{
        getUser()
    }, [user])


    if(user==undefined) return(<div>Undefined Content</div>);

    return(

        <div>
            <button onClick={testClickHandler}>test Click</button>
            Hello World!
        </div>
    )
}

export default ExampleComponent