import { useState, useEffect } from 'react';
import { projectFireStore } from '../firebase/config';



const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFireStore.collection(collection).onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                // THis is where I could push this into the state of the Output page and then the url will get saved intot he car once its saved to the garage

                documents.push({...doc.data(), id: doc.id}); 
            });
            setDocs(documents);
        });

        return () => unsub();

    }, [collection])
    
    return { docs };
}

export default useFirestore;