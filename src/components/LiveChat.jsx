import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [chatUserMessage,setChatUserMessage] = useState("");


  const sendMessageToLiveChat = () => {
    dispatch(
        addMessage({
          name: "Ankit",
          message: chatUserMessage,
        })
      );
      setChatUserMessage("");
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessageToLiveChat(); 
    }
  };

  useEffect(() => {
    let offset = 0; // Keep track of pagination

    const intervalId = setInterval(() => {
    //   console.log("API polling");

      // Fetch API
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=2&offset=${offset}`)
        .then((response) => response.json())
        .then((data) => {
          if (data?.results && data.results.length > 0) {
            dispatch(
              addMessage({
                name: data.results[0].name || "Unknown",
                message: data.results[0].url || "No URL available",
              })
            );
          }
        })
        .catch((error) => console.error("API fetch error:", error));

      offset += 2;
    }, 3000);

    // Cleanup interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]); // Add `dispatch` as a dependency

  return (
    <>
      {/* Chat Messages Container */}
      <div className="border border-black ml-2 w-full h-[600px] bg-slate-200 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage name={c.name} key={index} message={c.message} />
        ))}
      </div>
  
      {/* Input and Send Button */}
      <div className="w-full p-2 flex items-center justify-between">
        {/* Input Field */}
        <input 
          type="text" 
          id="inputFieldId"
          placeholder="Type your message..." 
          value={chatUserMessage}
          onKeyDown={handleKeyDown}
          className="border border-black w-full rounded-md p-2" 
          onChange={e=>setChatUserMessage(e.target.value)}
        />
  
        {/* Send Button */}
        <button onClick={sendMessageToLiveChat}  className="bg-green-500 text-white m-2 px-4 py-2 rounded-md hover:bg-green-600 transition">
          Send
        </button>
      </div>
    </>
  );
  
};

export default LiveChat;
