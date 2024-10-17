import React, { useContext } from 'react'
import { useState } from 'react'
import HomeFile from './HomeFile'
import ReviewSection from './ReviewSection'
import { ThisContext } from './context/context'
 
function CommentDisplayer({index}) {

  return (
    <>
<div className="commentViewer">
<ReviewSection index={index}/> 

</div>
    </>
  )
}

export default CommentDisplayer
