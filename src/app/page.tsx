"use client";
import React from "react";
import Pill from "@/components/Pill/Pill";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-white">
      {/* --- Hero Section --- */}
      <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://cdn.pixabay.com/video/2024/01/28/198418-907598386_large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl w-full shadow-2xl border border-white/20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 text-center">
              Transforma tu espacio en<br className="hidden md:block" />
              <span className="text-green-600">un hogar sustentable</span>
            </h1>
            
            <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
              Analizamos tu consumo de energía y agua para darte recomendaciones personalizadas
              que benefician al planeta y a tu economía.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/questions" className="transition hover:scale-105">
                <Pill text="Calcula tu impacto" color="personalizada" />
              </Link>
              <Link href="/vendedores" className="transition hover:scale-105">
                <Pill text="Regístrate como vendedor" color="personalizada" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- Sección Misión --- */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg mb-6">
                En EcoTalli creemos en la posibilidad de transformar cada hogar y negocio en un espacio más sustentable.
                Nuestra plataforma ayuda a individuos y empresas a mostrar y reducir su huella de carbono.
              </p>
              <p className="text-gray-700 text-lg">
                A través del análisis de recibos de agua y luz, el cálculo del impacto ambiental y la comparación
                con datos de la población mexicana, ofrecemos soluciones personalizadas.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-600 mb-4">¿Cómo ayudamos?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Cálculo personalizado de huella de carbono</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Optimización del consumo energético</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Conexión con proveedores ecológicos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sección Beneficios Mejorada --- */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Beneficios EcoTalli</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beneficio 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                <img src="/earth_home.svg" alt="Planeta" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reducción de huella</h3>
              <p className="text-gray-700">
                Compara tu consumo con el promedio nacional y recibe recomendaciones
                para reducir tu impacto ambiental.
              </p>
            </div>
            
            {/* Beneficio 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                <img src="/save_home.svg" alt="Ahorro" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ahorro económico</h3>
              <p className="text-gray-700">
                Optimiza tu consumo con productos eficientes y descubre cuánto puedes
                ahorrar anualmente.
              </p>
            </div>
            
            {/* Beneficio 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                <img src="/solar_home.svg" alt="Conexión" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Para vendedores</h3>
              <p className="text-gray-700">
                Conecta con clientes comprometidos con la sostenibilidad y aumenta
                tus ventas de productos ecológicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sección Vendedores con Imagen --- */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Para Proveedores Ecológicos</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-green-50 rounded-xl p-8 md:p-12 shadow-inner h-full">
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                Llega a clientes comprometidos con la sostenibilidad
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold mb-3">Registro fácil:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Crea una cuenta</li>
                    <li>Registra tus productos</li>
                    <li>Analizamos su impacto</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3">Ventajas:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Mayor visibilidad</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Clientes cualificados</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <Link href="/vendedores/registro">
                  <Pill text="Únete como proveedor" color="personalizada" />
                </Link>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source 
                  src="https://cdn.pixabay.com/video/2022/09/13/131161-749706760_large.mp4" 
                  type="video/mp4" 
                />
                Tu navegador no soporta videos HTML5
              </video>
            </div>
          </div>
        </div>
      </section>


      {/* --- CTA Final --- */}
      <section className="py-20 px-6 md:px-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empieza hoy tu camino sustentable</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Pequeños cambios generan grandes impactos en el medio ambiente y en tu economía.
          </p>
          <Link href="/registro">
            <Pill text="Regístrate gratis" color="personalizada" />
          </Link>
        </div>
      </section>
    </div>
  );
}