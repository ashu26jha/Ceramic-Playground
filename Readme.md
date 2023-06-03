pnpm install --global @composedb/cli@next

export CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB=true

env vairable setup in terminal from daemon launches


composedb composite:create schemas/AddressBook.graphql --output eth-address-book.json --did-private-key $(cat priv.key)


composedb composite:models eth-address-book.json     FETCH DETAILS 

composedb composite:merge eth-address-book.json eth-address-book-entries.json --output=demo-address-book-merged.json

["kjzl6hvfrbw6c5iwuv5k1ccbopakwn5a3sa1jmwr9einyl674apqto20saax82x","kjzl6hvfrbw6ca4o7mcw5otor6tmv6yxgrnx7opu7cddiyb6xdm0dqchqc945vp"]

composedb composite:deploy demo-address-book-merged.json --did-private-key=$(cat priv.key)

composedb composite:compile demo-address-book-merged.json demo-runtime.json


query{
  demoAddressBookIndex(first:5){
		edges{
      node{
        id
        addressBookName
      }
    }
  }
}


mutation CreateNewDemoAddressBook($i: CreateDemoAddressBookInput!){
  createDemoAddressBook(input: $i){
    document{
      id
      addressBookName
    }
  }
}

{
  "i": {
    "content": {
      "addressBookName": "Placeholder address book"
    }
  }
}


composedb graphql:server --graphiql --port=35000 runtime.json --did-private-key $(cat priv.key)


Line 52 is running this server is running
ceramic daemon is running

