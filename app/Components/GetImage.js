// import axios from "axios";
// import React, { useState } from "react";

// const GetImage = () => {
//   const [Images, setImages] = useState([])
//     const handleClick = async () => {
//       try{
//       console.log("The Images are not rendered yet");
//       const Response = await axios.get('https://picsum.photos/v2/list');
//       const DataImg = (Response.data)
//       setImages(DataImg)
//       console.log(Images)
//       }catch(error){
// console.error('Error while fetching')
//       }
//     };
  
//     return (
//       <>
//       <div className='image-container'>
//         <h3> Your images will appear here</h3>
//         <button className='button2' onClick={handleClick}>Click for images</button>
//         <div className='image-list'>
//           {Images.map((elem,i)=>{
//             return(<img className='image-item' key={i}
//               src = {elem.download_url}/>
//             )
//           })}
//         </div>
//         </div>
//       </>
//     );
//   };

// export default GetImage;