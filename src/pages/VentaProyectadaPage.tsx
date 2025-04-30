
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Layout } from '@/components/layout/Layout';

const VentaProyectadaPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Venta proyectada"
        description="Análisis y proyecciones de ventas"
        onTitleChange={() => {}}
        onDescriptionChange={() => {}}
      />
      <div className="p-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Venta proyectada</h2>
          <p className="text-muted-foreground">
            Esta sección está en desarrollo. Pronto podrá visualizar proyecciones de ventas y análisis detallados.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default VentaProyectadaPage;
