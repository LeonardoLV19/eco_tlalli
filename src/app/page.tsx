"use client";
import React from "react";
import Pill from "@/components/Pill/Pill";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative px-6 md:px-20 pt-1 pb-35 bg-white overflow-hidden">
      {/* Plantas decorativas flotantes */}
      <Image
        src="/Background.png"
        alt="Decoración plantas"
        width={1000}
        height={1}
        className="absolute bottom-0 left-0"
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-x-20 h-full">
        {/* Columna de texto */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ¿Quiénes <br className="hidden md:block" /> Somos?
          </h1>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            En EcoTlalli, creemos en un futuro más verde y sostenible. Nuestra misión es ayudar a las personas a reducir su huella de carbono y transformar sus hogares en espacios más eficientes y amigables con el planeta. A través de tecnología inteligente y soluciones accesibles, hacemos que la sustentabilidad sea fácil y alcanzable para todos.
          </p>
          <Pill text="Calcula tu huella de carbono!" color="personalizada" />
        </div>

        {/* Imagen principal */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <Image
            src="/HomePage1.png"
            alt="Ilustración Eco"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
