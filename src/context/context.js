// import React, { useState } from 'react'

// export const MyContext = createContext()

// function MyContextProvider({ children }) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage] = useState(10);



//     // Get current posts
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//     // Change page


//     return (
//         <MyContext.Provider value={{ postsPerPage,paginate }} >
//             {children}
//         </MyContext.Provider>
//     );

// }





// export default MyContextProvider