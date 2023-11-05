// Write your code here
import {formatDistanceToNow} from 'data-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked ? '' : ''
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li>
      <div>
        <div>
          <p>{initial}</p>
        </div>
        <div>
          <div>
            <p>{name}</p>
            <p>{postedTime}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={likeImageUrl} alt="like" />
          <button type="button" onClick={onClickLike}>
            Like
          </button>
        </div>
        <button type="button" onClick={onDeleteComment} data-testId="delete">
          <img src="" alt="delete" />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
