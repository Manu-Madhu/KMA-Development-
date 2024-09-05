import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut({ redirect: false });
      router.push('/'); // Redirect to home page after logout
      router.refresh(); // Refresh the current route
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return logout;
};

export default useLogout;