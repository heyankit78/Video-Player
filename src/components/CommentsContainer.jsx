
const commentsData = [
    {
        name : "Ankit Ghosh",
        text : "Ankit is very charming and highly motivated",
        replies : [

        ]
    },
    {
        name : "Atanu Ghosh",
        text : "Atanu is very charming and highly motivated",
        replies : [
            {
                name : "Sukanta Ghosh",
                text : "Sukanta is very charming and highly motivated",
                replies : [
                    {
                        name : "Sukanta Ghosh",
                        text : "Sukanta is very charming and highly motivated",
                        replies : [
                            {
                                name : "Ankit Ghosh",
                                text : "Ankit is very charming and highly motivated",
                                replies : [
                        
                                ]
                            },
                            {
                                name : "Ankit Ghosh",
                                text : "Ankit is very charming and highly motivated",
                                replies : [
                        
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name : "Ankit Ghosh",
                text : "Sukanta is very charming and highly motivated",
                replies : [
        
                ]
            }
        ]
    },
    {
        name : "Rahul Ghosh",
        text : "Ankit is very charming and highly motivated",
        replies : [

        ]
    },
    {
        name : "Sukanta Ghosh",
        text : "Ankit is very charming and highly motivated",
        replies : [

        ]
    }
]

const Comments = ({ data }) => {
    const { name, text, replies } = data;
  
    return (
      <div className="flex my-2">
        {/* User Avatar */}
        <img
          className="h-8 w-8 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&amp;s"
          alt="user-avatar"
        />
        
        {/* Comment Content */}
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
  
          {/* Replies */}
          {replies.length > 0 && (
            <div className="border-l-2 border-gray-300 pl-4 mt-2">
              {replies.map((reply, index) => (
                <Comments key={`${name}-${index}`} data={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <div className='text-2xl font-bold'>
            Comments : 
        </div>
        <div className='pt-4 m-2'>
            {commentsData.map((comment,index)=>(
                <Comments key={index} data = {comment}/>
            ))}
        </div>
    </div>
  )
}

export default CommentsContainer
