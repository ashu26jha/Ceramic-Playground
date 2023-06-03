import { useCeramicContext } from '../context'
import {authenticateCeramic} from '../utils/index.js'
import { useEffect } from 'react';
export default function Home() {
  
  const clients = useCeramicContext();
  const { composeClient } = clients  
  
  const handleLogin = async () => {
    console.log(composeClient);
    await authenticateCeramic(composeClient)
  }
  
  useEffect(() => {
    if(localStorage.getItem('did')) {
      handleLogin()
    }
  }, [])

  return (
    <div>
      <button onClick={handleLogin}> Begin </button>
    </div>
  )
}

// Fix idea allocate another useState to changeAccess tokenId
