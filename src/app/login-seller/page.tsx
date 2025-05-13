'use client';

import React from 'react';
import Link from 'next/link';
import InputBox from "@/components/Input/inputBox";
import Pill from "@/components/Pill/Pill";

const LogInSeller = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#D9D9D94F] p-10 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">EcoTlalli</h2>
                <h3 className="text-3xl font-semibold text-center mb-1">Inicia Sesión</h3>
                <p className="text-center text-gray-500 mb-6">Inicia Sesión para poder continuar</p>

                <div className="mb-4">
                    <InputBox 
                        labelText="Correo"
                        placeholder="correo@gmail.com"
                        icon={null}
                    />
                </div>

                <div className="mb-4">
                    <InputBox 
                        labelText="Contraseña"
                        placeholder="••••••••"
                        icon={null}
                    />
                </div>

                <div className="text-center mb-4">
                    <Pill text="Iniciar Sesión" color="personalizada" />
                </div>

                <p className="text-center text-sm text-gray-600">
                    ¿No tienes cuenta?{' '}
                    <Link href="/signup-seller" className="text-green-600 font-semibold hover:underline">
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LogInSeller;
