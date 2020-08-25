import React from 'react'

const Icons = () => {
  return(
    <div className="icon">
      <CommentIcon />
      <RetweetComponent />
      <LikeComponent />
      <EnvelopComponent />
    </div>
  )
}

const CommentIcon = () => {
  return(
    <i className="fa fa-comment-o " aria-hidden="true"> 2 </i>
  )
}
const RetweetComponent = () => {
  return(
    <i className="fa fa-retweet retweet-button"> 47 </i>
  )
}
const LikeComponent = () => {
  return(
    <i className="fa fa-heart like-button"> 190 </i>
  )
}
const EnvelopComponent = () => {
  return(
    <i className="fa fa-envelope-o"></i>
  )
}
export default Icons