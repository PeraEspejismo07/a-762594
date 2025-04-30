
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Layout } from '@/components/layout/Layout';

const IntegrationPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Integration"
        description="Gestione las integraciones con otros sistemas"
        onTitleChange={() => {}}
        onDescriptionChange={() => {}}
      />
      <div className="p-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Integraciones</h2>
          <p className="text-muted-foreground">
            Esta sección está en desarrollo. Pronto podrá configurar integraciones con otros sistemas.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IntegrationPage;
