'use client'

import {createContext} from "react";

interface ISetupStoreContext {
    account: {
        name: string | undefined;
        avatarId: number | undefined;
        nameMutator: ((name: string) => void) | undefined
        avatarIdMutator: ((avatarId: number) => void) | undefined
    }
}


const SetupStoreContext = createContext<ISetupStoreContext>({
    account: {
        name: undefined,
        avatarId: undefined,
        nameMutator: undefined,
        avatarIdMutator: undefined,
    }
})

export default SetupStoreContext;