
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Layout } from '@/components/layout/Layout';

const SettingsPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Settings"
        description="Configure las preferencias de la aplicación"
      />
      <div className="p-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Configuración</h2>
          <p className="text-muted-foreground">
            Esta sección está en desarrollo. Pronto podrá ajustar todas las configuraciones de la aplicación.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
