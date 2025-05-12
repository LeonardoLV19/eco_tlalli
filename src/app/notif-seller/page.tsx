'use client'
import React, { useState } from 'react';
import TabBar from '@/components/TabBar/TabBar';
import Notifications from '@/components/PopUp/Notifications';
import type { Role } from '@/components/TabBar/TabBar';

interface Props {
    role: Role
}

export default function NotifSeller({ role }: Props) {
    const [showNotif, setShowNotif] = useState(false)
    const toggleNotif = () => {
        if (role === 'vendedor') {
            setShowNotif((prev) => !prev)
        }
    }

    return (
        <>
            <TabBar role={role} onNotifClick={role === 'vendedor' ? toggleNotif : undefined} />

            {role === 'vendedor' && showNotif && (
                <div
                  className='fixed inset-0 z-50 bg-black/20'
                  onClick={toggleNotif}
                >
                    <div 
                      className='absolute top-16 right-4'
                      onClick={(e) => e.stopPropagation()}
                    >
                        <Notifications />
                    </div>
                </div>
            )}
        </>
    )
}
