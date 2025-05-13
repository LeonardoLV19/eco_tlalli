'use client';

import React from 'react';
import Link from 'next/link';
import InputBox from "@/components/Input/inputBox";
import Pill from "@/components/Pill/Pill";
import CheckboxLabels from '@/components/Checkbox/Checkbox';
import ApartmentIcon from '@mui/icons-material/Apartment';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import TagIcon from '@mui/icons-material/Tag';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from "@mui/icons-material/Person";
import InputFileUpload from '@/components/FileUpload/FileUpload';

const SignUpSeller = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#D9D9D94F] p-10 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-green-600 mb-10">EcoTlalli</h2>
                <h3 className="text-3xl font-semibold text-center mb-1">Registro de vendedor</h3>
                <p className="text-center text-gray-500 mb-6 text-sm">Regístrate para poder vender en EcoTlalli</p>

                <div>
                    <p>Datos de la empresa</p>
                </div>

                <div className="mb-4">
                    <InputBox 
                        labelText= {null}
                        placeholder="Nombre de la empresa"
                        icon= {<ApartmentIcon style={{ color: "#78B689" }} fontSize="medium" />}
                    />
                </div>

                <div className="mb-4">
                    <InputBox 
                        labelText={null}
                        placeholder="Dirección fiscal"
                        icon= {<StickyNote2Icon style={{ color: "#78B689" }} fontSize="medium" />}
                    />
                </div>

                <div className="mb-4">
                    <InputBox 
                        labelText={null}
                        placeholder="RFC"
                        icon= {<TagIcon style={{ color: "#78B689" }} fontSize="medium" />}
                    />
                </div>

                <div>
                    <p>Datos de contacto</p>
                </div>

                <div className="mb-4">
                    <InputBox 
                        labelText={null}
                        placeholder="Correo electrónico"
                        icon= {<MarkunreadIcon style={{ color: "#78B689" }} fontSize="medium" />}
                    />
                </div>

                <div className="mb-4">
                    <InputBox 
                        labelText={null}
                        placeholder="Contraseña"
                        icon= {<HttpsIcon style={{ color: "#78B689" }} fontSize="medium" />}
                    />
                </div>

                <div className="mb-4">
                    <InputBox 
                        labelText={null}
                        placeholder="Confirma tu contraseña"
                        icon= {<PersonIcon style={{ color: "#78B689" }} fontSize="medium" />}
                    />
                </div>

                <div className="flex items-center justify-center mb-4">
                    <InputFileUpload
                        buttonText='Sube tu INE'
                        color= 'primary'
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
                    <Link href="/login-seller" className="text-green-600 font-semibold hover:underline">
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

export default SignUpSeller;