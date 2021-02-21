import React from 'react'


function ImgView({imgURL}) {
    // const [currentImg, setCurrentImg] = useState(null)


    // const {docs} = useFirestore('images');
    // const sortedDocs = docs.sort((a,b) => b.createdAt - a.createdAt);

    // console.log(sortedDocs)
    let result;

    // // const docs = projectFireStore.collection('images').onSnapshot((snap) => {
    // //     snap[0]
    // // } );
    // // console.log(docs)
    
    if(imgURL) {
      
        result = <img src={imgURL} style={{width: '70%'}} alt="imgURL"/>;


          

        // setImgURL(sortedDocs[0].url, sortedDocs[0].id)
        
        

    } else {
        result = <div  className='ImgPlaceholder'><i className="fas fa-car fa-8x" style={{color:"#86C232"}}></i></div>
    }
    return result;


    
       
        
    
}

export default ImgView
