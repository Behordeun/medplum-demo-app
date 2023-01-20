import { Text } from '@mantine/core';
import { Logo, SignInForm } from '@medplum/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
    const navigate = useNavigate();
    return (
            <SignInForm
                projectId="f85d61a5-2f6d-49bb-a2ec-8a95abb55a86"
                googleClientId="397236612778-c0b5tnjv98frbo1tfuuha5vkme3cmq4s.apps.googleusercontent.com"
                onSuccess={() => navigate('/')}
                >
                <Logo size={32} />
                <Text size="lg">Sign in to Medplum Demo App</Text>
            </SignInForm>
            );
}
