import React from 'react';
import error from '../../img/404.svg';

const Page404 = () => {

    return (
        
        <div style={{backgroundColor: 'grey'}}>

            <img 
                src={error} 
                style={{maxHeight:'80vh', maxWidth: '80vh'}} 
                alt="error404" 
            />
            
        </div>
    )
}

export default Page404;