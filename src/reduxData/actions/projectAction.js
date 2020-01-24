var  CreateProject =(project)=>{
    //yay! some code goes here...
    return (dispacth,getState,{getFirebase,getFirestore})=>{
            const firestore= getFirestore();
            const firebase = getFirebase();            
            var profile = getState().firebase.profile;
            var auth = getState().firebase.auth;
            firestore.collection('projects').add({
                ...project,
                firstName:profile.firstName,
                lastName:profile.lastName,
                authorId:auth.uid,
                createdAt: new Date(),
            }).then((project)=> dispacth({type:"CREATE_PROJECT",project}))
              .catch((err)=>dispacth({type:"CREATE_PROJECT_ERR",err}))
           
    }
}

export default CreateProject