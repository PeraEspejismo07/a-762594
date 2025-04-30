
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Layout } from '@/components/layout/Layout';

const CoberturaPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Cobertura días"
        description="Seguimiento de cobertura diaria"
        onTitleChange={() => {}}
        onDescriptionChange={() => {}}
      />
      <div className="p-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Cobertura de días</h2>
          <p className="text-muted-foreground">
            Esta sección está en desarrollo. Pronto podrá visualizar la información de cobertura.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CoberturaPage;
