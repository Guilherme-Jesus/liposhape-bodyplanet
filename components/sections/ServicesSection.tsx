"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-50 to-blue-100"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard title="PressoShape Professional Care">
            Um tratamento avançado de Massagem de Drenagem Linfática, que
            promove a recuperação dos sistemas do organismo.
          </ServiceCard>
          <ServiceCard title="Tratamento com LipoShape">
            Utilize ondas de ultrassom para atingir células de gordura, com
            resultados eficazes e sem dor.
          </ServiceCard>
          <ServiceCard title="Programas Personalizados">
            44 programas médicos e 19 programas estéticos que abordam questões
            de saúde e estética corporal.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Collapsible>
      <Card className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
        <CardHeader>
          <CollapsibleTrigger asChild>
            <button className="w-full text-left">
              <CardTitle className="text-lg font-semibold text-blue-800">
                {title}
              </CardTitle>
            </button>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent className="px-6 py-4">
          <p className="text-gray-700">{children}</p>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
