import React, { useEffect, useRef } from 'react';

function MountedMessageComponent() {
  const isMounted = useRef(false);

  useEffect(() => {
    
    if (!isMounted.current) {
      console.log('Component is mounted for the first time!');
      isMounted.current = true;
    }

    
    return () => {
      console.log('Component is unmounted');
    };
  }, []); 

  
  return <div>Hello World</div>;
}

export default MountedMessageComponent;
