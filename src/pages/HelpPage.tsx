
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Layout } from '@/components/layout/Layout';

const HelpPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Helps"
        description="Centro de ayuda y soporte"
        onTitleChange={() => {}}
        onDescriptionChange={() => {}}
      />
      <div className="p-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Ayuda y soporte</h2>
          <p className="text-muted-foreground">
            Esta sección está en desarrollo. Pronto encontrará documentación y recursos de ayuda.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HelpPage;
