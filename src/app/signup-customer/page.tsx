'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InputBox from "@/components/Input/inputBox";
import Pill from "@/components/Pill/Pill";
import CheckboxLabels from '@/components/Checkbox/Checkbox';
import DoubleButtons from '@/components/DoubleButtons/DoubleButtons';
import InputFileUpload from '@/components/FileUpload/FileUpload';

const SignUpCustomer = () => {
    const [selectedTab, setSelectedTab] = useState<'cliente' | 'vendedor'>('cliente');

    const isVendedor = selectedTab === 'vendedor';

    return (
        <div className="flex items-center justify-end min-h-screen bg-[url('/fondo-ilustracion.png')] bg-cover bg-no-repeat bg-center pr-[20vw]">
            <div className={`bg-[#f9eac8] rounded-[25px] shadow-2xl px-8 py-6 transition-all duration-500
                ${isVendedor ? 'w-full max-w-3xl' : 'w-full max-w-md'}`}>
                
                <h2 className="text-3xl font-bold text-center text-[#2b6030] mb-4">EcoTlalli</h2>

                <div className="flex justify-center mb-4">
                    <DoubleButtons 
                        selectedTab={selectedTab}
                        onChange={(tab) => {
                            if (tab === 'cliente' || tab === 'vendedor') {
                                setSelectedTab(tab);
                            }
                        }}
                    />
                </div>

                <h3 className="text-2xl font-bold text-center text-[#336035] mb-1">Registro</h3>
                <p className="text-center text-[#3a5c38] mb-4">Regístrate para poder continuar</p>

                {isVendedor ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-[#336035] font-bold mb-2">Datos de la empresa</p>
                            <InputBox placeholder="Nombre de la empresa" icon={null} labelText={null} />
                            <InputBox placeholder="Dirección fiscal" icon={null} labelText={null} />
                            <InputBox placeholder="RFC" icon={null} labelText={null} />
                            <div className="mt-2 ml-5">
                                <InputFileUpload buttonText="Sube tu INE" color="nuevo" />
                            </div>
                        </div>
                        <div>
                            <p className="text-[#336035] font-bold mb-2">Datos de contacto</p>
                            <InputBox placeholder="Correo electrónico" icon={null} labelText={null} />
                            <InputBox placeholder="Contraseña" icon={null} labelText={null} />
                            <InputBox placeholder="Confirma tu contraseña" icon={null} labelText={null} />
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <div className="text-[#336035] font-bold -mb-1">
                            <p>Datos de contacto</p>
                        </div>
                        <InputBox placeholder="Correo electrónico" icon={null} labelText={null} />
                        <InputBox placeholder="Contraseña" icon={null} labelText={null} />
                        <InputBox placeholder="Confirma tu contraseña" icon={null} labelText={null} />
                    </div>
                )}

                <div className="flex items-center mt-4 mb-4 ml-5">
                    <CheckboxLabels 
                        label="He leído y acepto los términos y condiciones de uso."
                        color="success"
                        fontSize="12px"
                    />
                </div>

                <div className="text-center mb-2">
                    <Pill text="Registrarme" color="personalizada2" />
                </div>

                <p className="text-center text-sm text-[#506143]">
                    ¿Ya tienes cuenta?{' '}
                    <Link href="/login-customer" className="text-[#1e5026] font-semibold hover:underline">
                        Inicia sesión
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUpCustomer;