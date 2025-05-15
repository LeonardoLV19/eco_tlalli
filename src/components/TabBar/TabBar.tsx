'use client'

import React from 'react'
import Image from 'next/image'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type Role = 'cliente' | 'vendedor' | 'admin'

interface TabBarProps {
  role: Role
  onNotifClick?: () => void
}

const TabBar = ({ role, onNotifClick }: TabBarProps) => {
  const pathname = usePathname()

  const icons = {
    cliente: [
      <Link key="cart" href="/carrito-customer">
        <ShoppingCartIcon sx={{ fontSize: 28, color: '#5DAF5D', cursor: 'pointer' }} />
      </Link>,
      <Link key="user" href="/login-customer">
        <PersonIcon sx={{ fontSize: 28, color: '#5DAF5D', cursor: 'pointer' }} />
      </Link>
    ],
    vendedor: [
      <NotificationsIcon key="bell" sx={{ fontSize: 28, color: '#5DAF5D', cursor: 'pointer' }} onClick={onNotifClick} />,
      <Link key="user" href="/login-customer">
        <PersonIcon sx={{ fontSize: 28, color: '#5DAF5D', cursor: 'pointer' }} />
      </Link>
    ],
    admin: [
      <Link key="user" href="/login-customer">
        <PersonIcon sx={{ fontSize: 28, color: '#5DAF5D', cursor: 'pointer' }} />
      </Link>
    ]
  }

  const navItems = {
    cliente: [
      { label: 'Inicio', href:'/', match: '/'},
      { label: 'Cotizar', href:'/cotizar', match: '/cotizar'},
      { label: 'Acerca de', href:'', match: ''},
      { label: 'Cotizaciones', href:'', match: ''},
      { label: 'Tienda', href:'/marketplace', match: '/marketplace'}
    ],
    vendedor: [
      { label: 'Mis productos', href:'', match: ''},
      { label: 'Consultar ventas', href:'', match: ''}
    ],
    admin: [
      { label: 'Vendedores', href:'/validationSystem-admin', match: '/validationSystem-admin'},
      { label: 'Instalaciones', href:'', match: ''}
    ]
  }

  return (
    <header className="w-full bg-[#F5F7F9] border-t-4 border-[#F5F7F9]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-4 gap-y-4">
        
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="EcoTlalli logo" width={40} height={40} />
          <span className="font-extrabold text-xl sm:text-2xl text-[#1E1E1E]">EcoTlalli</span>
        </div>

        {/* Navegación */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center text-sm sm:text-base font-medium justify-center">
          {navItems[role].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`cursor-pointer ${
                pathname === item.match
                  ? 'text-[#3E873E] font-semibold'
                  : 'text-black hover:text-[#3E873E]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Íconos */}
        <div className="flex space-x-6 items-center">
          {icons[role].map((icon) => icon)}
        </div>
      </div>
    </header>
  )
}

export default TabBar
