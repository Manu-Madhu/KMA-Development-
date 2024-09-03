'use client';
import LoaderData from '@/components/Common/Loader';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export const MemberProvider = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;

        // Check if the user is authenticated
        if (session === null || !session.user) {
            router.push('/'); // Redirect to home page if not authenticated
        } else if (session?.user?.userInfo?.role !== 'member') {
            router.push('/'); // Redirect to home page if not a member
        }
    }, [session, status, router]);

    // Or render a loading spinner
    if (status === 'loading' || !session || session?.user?.userInfo?.role !== 'member') {
        return (
            <div className='h-screen w-full grid place-items-center'>
                <LoaderData />
            </div>
        );
    }

    return <>{children}</>;
};
