import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchContainer = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
    const [searchParams] = useSearchParams();
    console.log(searchParams)
  return (
    <div className='ml-28 mt-10'>
      <iframe
       width="1100"
        height="600" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        <CommentsContainer/>
    </div>
  )
}

export default WatchContainer
