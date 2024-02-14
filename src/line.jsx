import React from 'react'
import { useEffect } from 'react'
import liff from '@line/liff'

export default function line() {

    const line = () => {
        useEffect(() => {
            liff.init({
                liffId: '2003506597-kG1pOD0X'
            })
            .then( () => {
                
            })
        }, [])
    }

    const handleLogin = async() => {
        try {
            const lineToken = await liff.getIDToken()
            console.log(lineToken)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>line</div>
    )
}
