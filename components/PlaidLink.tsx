'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { PlaidLinkOnSuccess, usePlaidLink } from 'react-plaid-link';
import config from 'next/config';
import { createLinkToken } from '@/lib/actions/user.actions';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const [token, setToken] = useState('');
    const router = useRouter();
    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken)
        }
        getLinkToken();
    }, [user])
    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        // await exchangePublicToken({
        //     publicToken: public_token,
        //     user,
        // })
        router.push('/')
    }, [user])
    const { open, ready } = usePlaidLink(config);
    return (
        <>
            {variant === 'primary' ? (
                <Button className='plaidlink-primary bg-red-600'>Connect abank</Button>
            ) : variant === 'ghost' ? (
                <Button>Conect bank</Button>
            ) : (
                <Button
                    onClick={() => open()}
                    disabled={!ready}
                    className='plaidlink-primary w-full'>Connect xbank</Button>
            )}
        </>
    )
}

export default PlaidLink
