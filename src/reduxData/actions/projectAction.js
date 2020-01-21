var  CreateProject =(project)=>{
    //yay! some code goes here...
    return (dispacth,getState,{getFirebase,getFirestore})=>{
            const firestore= getFirestore();
            firestore.collection('projects').add({
                ...project,
                firstName:"hatake",
                lastName:"kakkashi",
                timestamp: new Date(),
            }).then((project)=> dispacth({type:"CREATE_PROJECT",project}))
              .catch((err)=>dispacth({type:"CREATE_PROJECT_ERR",err}))
           
    }
}

export default CreateProject