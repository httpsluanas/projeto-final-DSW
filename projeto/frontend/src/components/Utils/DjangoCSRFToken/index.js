import React, { useEffect, useState } from 'react'
import { getCookie } from '../utils'


const DjangoCSRFToken = () => {
    
    const [csrftoken, setCsrftoken] = useState(null)

    useEffect(() => {
        const csrftoken = getCookie('csrftoken')
        setCsrftoken(csrftoken)
    }, [])

    return (
        !!csrftoken && (
            <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}/>
        )
    )
}


export default DjangoCSRFToken