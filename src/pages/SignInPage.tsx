import { Text } from '@mantine/core';
import { Logo, SignInForm } from '@medplum/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
    const navigate = useNavigate();
    return (
            <SignInForm
                projectId="7957837e-a38f-4788-ba6f-4485566828d0"
                googleClientId="397236612778-c0b5tnjv98frbo1tfuuha5vkme3cmq4s.apps.googleusercontent.com"
                onSuccess={() => navigate('/')}
                >
                <Logo size={32} />
                <Text size="lg">Sign in to Foo Provider</Text>
            </SignInForm>
            );
}
