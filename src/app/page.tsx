"use client";
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
import {
  ProductCard,
  ProductCardVariant,
} from "@/components/ProductCard/ProductCard";
import { CardSales } from "@/components/CardSales/CardSales";
import { ShippingCard } from "@/components/ShippingCard/ShippingCard";
import { InfoBox } from "@/components/InfoBox/InfoBox";
import SalesTable from "@/components/SalesTable/SalesTable";
import TabBar from "@/components/TabBar/TabBar";
import SpendingByCategory from "@/components/SpendingByCategoryChart/SpendingByCat";
import DoubleButtons from "@/components/DoubleButtons/DoubleButtons";
import ShoppingHistory from "@/components/ShoppingHistory/ShoppingHistory";
import OrderCard from "@/components/OrderCard/OrderCard";
import DeliveryCard from "@/components/DeliveryCard/DeliveryCard";
import EnergyChartCard from "@/components/consumo/Consumo";
import EnergyLineChartCard from "@/components/gasto/Gasto";
import Pill from "@/components/Pill/Pill";
import ActionAreaCard from "@/components/region/Region";
import ResumenCard from "@/components/resumen/Resumen";
import PaginationCard from "@/components/selector/selector";
import InputBox from "@/components/Input/inputBox";
import PopUpV1 from "@/components/PopUp/PopUpV1";
import PopUpV2 from "@/components/PopUp/PopUpV2";
import PopUpV3 from "@/components/PopUp/PopUpV3";
import PopUpV4 from "@/components/PopUp/PopUpV4";
import RegistrationOptions from "@/components/PopUp/RegistrationOptions";
import Notifications from "@/components/PopUp/Notifications";
import ConsumoPorEstado from "@/components/ConsumoPorEstado/ConsumoPorEstado";
import MetricaHuellaDeCarbonoV2 from "@/components/MetricaHuellaDeCarbono/MetricaHuellaDeCarbonoV2";
import MetricaHuellaDeCarbono from "@/components/MetricaHuellaDeCarbono/MetricaHuellaDeCarbono";
import MetricaHuellaDeCarbonoV3 from "@/components/MetricaHuellaDeCarbono/MetricaHuellaDeCarbonoV3";
import MetricaHuellaDeCarbonoV4 from "@/components/MetricaHuellaDeCarbono/MetricaHuellaDeCarbonoV4";
import TablaCotizacionV1 from "@/components/TablaCotizacion/TablaCotizacionV1";
import TablaCotizacionV2 from "@/components/TablaCotizacion/TablaCotizacionV2";
import TarjetaVentasVistaVendedor from "@/components/TarjetaVentasVistaVendededor/TarjetaVentasVistaVendedor";

export default function Home() {
  return (
    <>
      <div>
        <InputBox />
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
        {/* <GaugeChart /> */}
        <TabBar role="cliente" />
        <TabBar role="vendedor" />
        <TabBar role="admin" />
        <SpendingByCategory />
        <DoubleButtons />
        <div className="flex items-center justify-center">
          <ShoppingHistory
            price="$52,272"
            title="Elios Terra G8 | Ground Mount System For 8 Solar Panel"
            date="30 de Marzo de 2025"
            imageUrl="/paneles.png"
            width={700}
          />
        </div>
        <OrderCard />
        <DeliveryCard />
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

        <ProductCard />
        <ProductCardVariant />
        <CardSales />
        <ShippingCard />
        <InfoBox variant="sellers" />
        <InfoBox variant="store" />
        <InfoBox variant="requests" />
        <InfoBox variant="logs" />
        <SalesTable />
        <EnergyChartCard />
        <EnergyLineChartCard />
        <div className="flex flex-col gap-4 p-4">
          <Pill text="Volver" color="volver" />
          <Pill text="Añadir" color="añadir" />
          <Pill text="Personalizada" color="personalizada" />
          <Pill text="Continuar" color="continue" />
        </div>
        <ActionAreaCard />
        <ResumenCard />
        <PaginationCard />
        <GaugeChart value={72} value2="Alta" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        RICARDO
        <ConsumoPorEstado />
        <MetricaHuellaDeCarbono />
        <MetricaHuellaDeCarbonoV2 />
        <MetricaHuellaDeCarbonoV3 />
        <MetricaHuellaDeCarbonoV4 />
        <PopUpV1 />
        <PopUpV2 />
        <PopUpV3 />
        <PopUpV4 />
        <RegistrationOptions />
        <Notifications />
        <TablaCotizacionV1 />
        <TablaCotizacionV2 />
        <TarjetaVentasVistaVendedor />
      </div>
    </>
  );
<ActionAreaCard/>
      <ResumenCard/>
      <PaginationCard/>
      <GaugeChart 
      value={72}
      value2="Alta"/>
  </div>

}
