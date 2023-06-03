import { createContext, useContext } from "react";
import { CeramicClient } from "@ceramicnetwork/http-client"
import { ComposeClient } from "@composedb/client";
import { definition } from '../defination.js'
import { RuntimeCompositeDefinition } from "@composedb/types";

const composeClient = new ComposeClient({
    ceramic: "http://localhost:7007",
    // cast our definition as a RuntimeCompositeDefinition
    definition: definition
});

const CeramicContext = createContext({ composeClient: composeClient });

export const CeramicWrapper = ({ children }) => {
    return (
        <CeramicContext.Provider value={{ composeClient }}>
            {children}
        </CeramicContext.Provider>
    );
};

export const useCeramicContext = () => useContext(CeramicContext);

