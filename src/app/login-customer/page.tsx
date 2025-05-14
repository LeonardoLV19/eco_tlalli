'use client';

import React from 'react';
import Link from 'next/link';
import InputBox from '@/components/Input/inputBox';
import Pill from '@/components/Pill/Pill';
import Image from 'next/image';

const LogInCustomer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#b0dfa0] px-4">
      <div className="w-full max-w-4xl bg-[#d6efd4] rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Encabezado superior */}
        <div className="w-full flex items-center justify-between px-6 py-4 bg-[#c1e4c6] md:hidden">
          <span className="text-lg font-bold text-green-900">EcoTlalli</span>
          <Link href="/" className="text-green-800 hover:underline">Inicio</Link>
        </div>

        {/* Lado izquierdo - Imagen y logo */}
        <div className="hidden md:flex flex-col justify-between w-1/2 bg-[#c1e4c6] relative">
          <div className="absolute top-4 left-6 z-10">
            <span className="text-lg font-bold text-green-900">EcoTlalli</span>
          </div>
          <Image
            src="/forest-illustration.png"
            alt="Ilustración de bosque"
            fill
            className="object-cover"
          />
        </div>

        {/* Lado derecho - Formulario */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-[#bfebb3]">
          <div className="hidden md:flex justify-end mb-4">
            <Link href="/" className="text-green-800 hover:underline">Inicio</Link>
          </div>

          <h3 className="text-2xl font-extrabold text-green-900 mb-1">Inicia Sesión</h3>
          <p className="text-green-700 mb-6">Inicia sesión para poder continuar</p>

          <div className="mb-4">
            <InputBox 
              labelText="Correo"
              placeholder="correo@ejemplo.com"
              icon={null}
            />
          </div>

          <div className="mb-6">
            <InputBox 
              labelText="Contraseña"
              placeholder="••••••••"
              icon={null}
            />
          </div>

          <Pill text="Iniciar Sesión" color="personalizada"/>

          <div className="mt-4 flex justify-center">
            <p className="text-sm text-green-800 text-center">
              ¿No tienes cuenta?{' '}
              <Link href="/signup-customer" className="text-green-700 font-semibold hover:underline">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInCustomer;
