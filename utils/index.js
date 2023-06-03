import { DIDSession } from "did-session";
import { EthereumWebAuth, getAccountId } from "@didtools/pkh-ethereum";
import { ComposeClient } from "@composedb/client";

// If you are relying on an injected provider this must be here otherwise you will have a type error. 
export const authenticateCeramic = async (compose) => {
    console.log("Authenticating")
    const sessionStr = localStorage.getItem('did')
    let session

    if (sessionStr) {
        session = await DIDSession.fromSession(sessionStr)
    }

    if (!session || (session.hasSession && session.isExpired)) {
        if (window.ethereum === null || window.ethereum === undefined) {
            throw new Error("No injected Ethereum provider found.");
        }

        const ethProvider = window.ethereum;
        const addresses = await ethProvider.enable({
            method: "eth_requestAccounts",
        });
        const accountId = await getAccountId(ethProvider, addresses[0])
        const authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId)

        /**
         * Create DIDSession & provide capabilities that we want to access.
         * @NOTE: Any production applications will want to provide a more complete list of capabilities.
         *        This is not done here to allow you to add more datamodels to your application.
         */
        // TODO: update resources to only provide access to our composities
        session = await DIDSession.authorize(authMethod, { resources: compose.resources })
        localStorage.setItem('did', session.serialize());
    }

    // Set our Ceramic DID to be our session DID.
    compose.setDID(session.did)
    return
}

