import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchContainer = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
    const [searchParams] = useSearchParams();
    console.log(searchParams)
  return (
    <div className='ml-28 mt-10 w-full'>
    <div className='flex w-full'>
    <div>  <iframe
       width="1100"
        height="600" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen>
        </iframe></div>
        <div className='w-full mr-3'>
          <LiveChat/>
        </div>
    </div>

        <CommentsContainer/>
    </div>
  )
}

export default WatchContainer
