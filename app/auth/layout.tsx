import React from 'react'

export default function({children}:{
    children:React.ReactNode
}
){   
     return <div>
        <div className='p-1 border-b text-center'>
            20% off for the next few Days.
        </div>
        {children}
     </div>
}
//another method of getting rid of the auth rout in the url it becomes so length, just put the specific folder in the braces thenextjs will get ignore the auth folder
//and the layouts only can be applyed for all the routes in the folder wuthout using the name of the folder in the url.