import { Text } from '@mantine/core';
import { Logo, SignInForm } from '@medplum/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
    const navigate = useNavigate();
    return (
        <SignInForm
            //projectId="7bf160a1-b32b-4d6d-8980-1de0a8020a0d"
            googleClientId="397236612778-c0b5tnjv98frbo1tfuuha5vkme3cmq4s.apps.googleusercontent.com"
            onSuccess={() => navigate('/')}
            >
            <Logo size={32} />
            <Text size="lg">Sign in to Medplum Demo App</Text>
        </SignInForm>
    );
}
