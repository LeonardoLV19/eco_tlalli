"use client";

import EnergyChartCard from "@/components/consumo/Consumo";
import TablaCotizacionV1 from "@/components/TablaCotizacion/TablaCotizacionV1";
import Link from "next/link";
import Pill from "@/components/Pill/Pill";
import React from "react";
import { ProductCard } from "@/components/ProductCard/ProductCard";


const page = () => {
  return (
    <div className="pt-20 flex flex-col items-center gap-20">
      <EnergyChartCard />
      <Link href="/cotizar_3">
        <Pill text="Ver mas detalles" color="personalizada" />
      </Link>
      <TablaCotizacionV1 />

      <div className="w-full bg-[#4CAF4F] py-10">
        <h2 className="text-white text-center text-3xl font-bold">
          ¿Qué productos te pueden ayudar?
        </h2>
      </div>
      <div className="flex flex-col items-center gap-10">
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
      </div>
    </div>
  );
};

export default page;
