import React from 'react'

export default function({children}:{
    children:React.ReactNode
}
){   
     return <div>
        <div className='border-b items-center'>
            20% off for the next few Days.
        </div>
        {children}
     </div>
}