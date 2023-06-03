import { useCeramicContext } from '../context'
import { authenticateCeramic } from '../utils/index.js'
import { useEffect } from 'react';
export default function Home() {

  const clients = useCeramicContext();
  const { composeClient } = clients

  const handleLogin = async () => {
    console.log(composeClient);
    await authenticateCeramic(composeClient)
  }

  useEffect(() => {
    if (localStorage.getItem('did')) {
      handleLogin()
    }
  }, [])

  const runQuery = async () => {
    const Name = await composeClient.executeQuery(`
    query MyQuery {
      nameListIndex(first: 10) {
        edges {
          node {
            Name
          }
        }
      }
    }
    `)
    console.log(Name)
    // console.log(composeClient)
  }

  const runMutations = async () => {
    const addName = await composeClient.executeQuery(`
      mutation{
        createNameList(input:{
          content:{
            Name: "Testing"
          }
        })
        {
          document{
            Name
          }
        }
      }
    `)
  }


  return (
    <div>
      <button onClick={runQuery}> Query </button>
      <button onClick={runMutations}>Add Entry</button>
    </div>
  )
}

// Fix idea allocate another useState to changeAccess tokenId
