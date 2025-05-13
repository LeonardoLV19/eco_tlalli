'use client';

import React from 'react';
import Link from 'next/link';
import InputBox from "@/components/Input/inputBox";
import Pill from "@/components/Pill/Pill";
import CheckboxLabels from '@/components/Checkbox/Checkbox';

const SignUpCustomer = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#D9D9D94F] p-10 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">EcoTlalli</h2>
                <h3 className="text-3xl font-semibold text-center mb-1">Registro de Cliente</h3>
                <p className="text-center text-gray-500 mb-6">Regístrate para poder continuar</p>

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

                <div className="mb-4">
                    <InputBox 
                        labelText="Confirma tu contraseña"
                        placeholder="••••••••"
                        icon={null}
                    />
                </div>

                <div className="flex items-center justify-center mb-4">
                    <CheckboxLabels 
                        label="He leído y acepto los términos y condiciones de uso."
                        color='success'
                        fontSize={'12px'}
                        />
                </div>

                <p className="text-center text-sm text-gray-600 mb-4">
                    ¿Ya tienes cuenta?{' '}
                    <Link href="/login-customer" className="text-green-600 font-semibold hover:underline">
                        Inicia Sesión
                    </Link>
                </p>

                <div className="text-center">
                    <Pill text="Registrarme" color="personalizada" />
                </div>
            </div>
        </div>
    );
}

export default SignUpCustomer;
