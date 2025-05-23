import { CommentGet } from '../../../Models/Comment';
import StockCommentListItem from '../../StockCommentListItem/StockCommentListItem';

type Props = {
    comments: CommentGet[];
}

const StockCommentList = (props: Props) => {
  return (
    <>
    {props.comments ? props.comments.map((comment) =>{
        return <StockCommentListItem  comment={comment}/>
    }): ""}
    </>
  )
}

export default StockCommentList