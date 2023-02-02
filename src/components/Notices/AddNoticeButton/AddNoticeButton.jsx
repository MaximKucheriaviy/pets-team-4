import React from 'react'
import { useMediaQuery } from 'react-responsive'
import AddButtonMobile from './AddButtonMobile/AddButtonMobile'
import AddButtonNotMobile from './AddButtonNotMobile/AddButtonNotMobile'



export default function AddNoticeButton() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
        <>
            {isMobile ?
            <AddButtonMobile /> :
            <AddButtonNotMobile/>}
        </>
  )
}
