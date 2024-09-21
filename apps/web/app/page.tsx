'use client';

import 'reflect-metadata';
import Footer from '@zknoid/sdk/components/widgets/Footer/Footer';
import MainSection from '@/components/pages/MainSection';
import Header from '@zknoid/sdk/components/widgets/Header';
import ZkNoidGameContext from '@zknoid/sdk/lib/contexts/ZkNoidGameContext';
import SetupStoreContext from "../../../packages/sdk/lib/contexts/SetupStoreContext";
import {useNetworkStore} from "@zknoid/sdk/lib/stores/network";
import {api} from "../trpc/react";
import {useEffect, useState} from "react";

export default function Home() {
    const networkStore = useNetworkStore()
    const accountData = api.accounts.getAccount.useQuery({userAddress: networkStore.address || ''}).data
    const nameMutator = api.accounts.setName.useMutation()
    const avatarIdMutator = api.accounts.setAvatar.useMutation()

    const [name, setName] = useState<string | undefined>(undefined)
    const [avatarId, setAvatarId] = useState<number | undefined>(undefined)

    useEffect(() => {
        if (accountData?.account?.name) {
            setName(accountData.account.name)
        }
        if (accountData?.account?.avatarId) {
            setAvatarId(accountData.account.avatarId)
        }
    }, [accountData]);

  return (
    <ZkNoidGameContext.Provider
      value={{
        client: undefined,
        appchainSupported: false,
        buildLocalClient: true,
      }}
    >
      <SetupStoreContext.Provider value={{
            account: {
                name: name,
                avatarId: avatarId,
                nameMutator: (name) => nameMutator.mutate({userAddress: networkStore.address || '', name: name}),
                avatarIdMutator: (avatarId) => avatarIdMutator.mutate({userAddress: networkStore.address || '', avatarId: avatarId})
            }
        }}
      >
          <div className="flex min-h-screen flex-col">
            <Header />
            <MainSection />
            <Footer />
          </div>
      </SetupStoreContext.Provider>
    </ZkNoidGameContext.Provider>
  );
}
