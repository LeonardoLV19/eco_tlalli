'use client'

import React from 'react'
import Image from 'next/image'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'

type Role = 'cliente' | 'vendedor' | 'admin'

interface TabBarProps {
  role: Role
}

const TabBar = ({ role }: TabBarProps) => {
  const navItems = {
    cliente: [
      { label: 'Inicio', active: true },
      { label: 'Cotizar' },
      { label: 'Acerca de' },
      { label: 'Tienda' }
    ],
    vendedor: [
      { label: 'Mis productos', active: true },
      { label: 'Consultar ventas' }
    ],
    admin: [
      { label: 'Vendedores', active: true },
      { label: 'Instalaciones' }
    ]
  }

  const icons = {
    cliente: [
      <ShoppingCartIcon key="cart" sx={{ fontSize: 30, color: '#5DAF5D' }} />,
      <PersonIcon key="user" sx={{ fontSize: 30, color: '#5DAF5D' }} />
    ],
    vendedor: [
      <NotificationsIcon key="bell" sx={{ fontSize: 30, color: '#5DAF5D' }} />,
      <PersonIcon key="user" sx={{ fontSize: 30, color: '#5DAF5D' }} />
    ],
    admin: [
      <PersonIcon key="user" sx={{ fontSize: 30, color: '#5DAF5D' }} />
    ]
  }

  return (
    <header className="w-full bg-[#F5F7F9] border-t-[3px] border-[#F5F7F9]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-15 py-4">

        {/* Logo y Nombre */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="EcoTlalli logo" width={40} height={40} />
          <span className="font-extrabold text-2xl text-[#1E1E1E]">EcoTlalli</span>
        </div>

        {/* Navegación (no reactiva, solo visual) */}
        <nav className="flex space-x-30 items-center text-m font-medium">
          {navItems[role].map((item, i) => (
            <span
              key={i}
              className={`cursor-pointer ${
                item.active
                  ? 'text-[#3E873E] font-semibold'
                  : 'text-black hover:text-[#3E873E]'
              }`}
            >
              {item.label}
            </span>
          ))}
        </nav>

        {/* Íconos */}
        <div className="flex space-x-4 items-center">
          {icons[role]}
        </div>
      </div>
    </header>
  )
}

export default TabBar
