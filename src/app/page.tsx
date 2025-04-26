'use client'
import React from "react";
import Question from "@/components/Question/Question";
import { SavingsDistribution } from "@/components/SavingsCard/SavingsCard";
import { ReceiptButton } from "@/components/ReceiptButton/receiptButton";
import SavingsStatistics from "@/components/SavingsStatistics/SavingsStatistics";
import CarbonFootprintScore from "@/components/CarbonFootprintScore/CarbonFootprintScore";
import CatalogFilter from "@/components/CatalogFilter/CatalogFilter";
import FacilityCards from "@/components/FacilityCards/FacilityCards";
import CarbonFootprintRadialChart from "@/components/CarbonFootprintRadialChart/CarbonFootprintRadialChart";
import GaugeChart from "@/components/GaugeChart/GaugeChart";
import CardPerCapita from "@/components/CardPerCapita/CardPerCapita";
import { ProductCard, ProductCardVariant } from "@/components/ProductCard/ProductCard";
import { CardSales } from "@/components/CardSales/CardSales";
import { ShippingCard } from "@/components/ShippingCard/ShippingCard";
import { InfoBox } from "@/components/InfoBox/InfoBox";
import SalesTable from "@/components/SalesTable/SalesTable";
import EnergyChartCard from "@/components/consumo/Consumo";
import  EnergyLineChartCard from "@/components/gasto/Gasto";
import Pill from "@/components/Pill/Pill";
import ActionAreaCard from "@/components/region/Region";
import ResumenCard from "@/components/resumen/Resumen";
import PaginationCard from "@/components/selector/selector";


export default function Home() {
  return <div>
    <Question
        question="¿Qué medio de transporte usás a diario?"
        options={[
          { label: "Auto", carbonValue: 50 },
          { label: "Bicicleta", carbonValue: 0 },
          { label: "Bus", carbonValue: 20 },
        ]}
        type="single"
        onChange={(value) => {
          console.log("Huella seleccionada:", value);
        }}
      />
      {/* Segunda pregunta (variante multiple / checkbox) */}
      <Question
        question="¿Qué electrodomésticos usás en casa?"
        options={[
          { label: "Aire acondicionado", carbonValue: 30 },
          { label: "Lavarropas", carbonValue: 15 },
          { label: "Microondas", carbonValue: 10 },
          { label: "Televisor", carbonValue: 5 },
        ]}
        type="multiple"
        onChange={(value) => console.log("Huella electrodomésticos:", value)}
      />
      <SavingsDistribution />
      <ReceiptButton />
      <SavingsStatistics />
      <CarbonFootprintScore />
      <CatalogFilter />
      <FacilityCards />
      <CarbonFootprintRadialChart />
      <GaugeChart />
      <CardPerCapita
        title="TcO al año per cápita en el mundo"
        subtitle="4.83 toneladas al año por habitante"
        image="/mexico.png"
      />

      <CardPerCapita
        title="TcO al año per cápita en América"
        subtitle="7.48 toneladas al año por habitante"
        image="/mundo.png"
      />

      <ProductCard/>
      <ProductCardVariant/>
      <CardSales/>
      <ShippingCard/>
      <InfoBox variant="sellers" />
      <InfoBox variant="store" />  
      <InfoBox variant="requests" />  
      <InfoBox variant="logs" />    
      <SalesTable/> 
      <EnergyChartCard/> 
      <EnergyLineChartCard/>
      <div className="flex flex-col gap-4 p-4">
      <Pill text="Volver" color="volver" />
      <Pill text="Añadir" color="añadir" />
      <Pill text="Personalizada" color="personalizada" />
      <Pill text="Continuar" color="continue" />
      </div>
      <ActionAreaCard/>
      <ResumenCard/>
      <PaginationCard/>

  </div>
}
