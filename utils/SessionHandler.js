"use client"

import { SessionProvider } from 'next-auth/react';

function SessionHandler({ children }) {

  return <SessionProvider>{children}</SessionProvider>
}

export default SessionHandler;
