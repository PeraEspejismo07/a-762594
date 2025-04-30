
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Layout } from '@/components/layout/Layout';

const NotificacionesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Notificaciones"
        description="Gestione sus notificaciones y alertas"
      />
      <div className="p-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Notificaciones</h2>
          <p className="text-muted-foreground">
            Esta sección está en desarrollo. Pronto podrá gestionar sus notificaciones y alertas.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotificacionesPage;
