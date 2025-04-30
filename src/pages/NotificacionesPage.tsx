
import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Layout } from '@/components/layout/Layout';

const NotificacionesPage = () => {
  return (
    <Layout>
      <PageHeader
        title="Notificaciones"
        description="Administre sus notificaciones y alertas"
        onTitleChange={() => {}}
        onDescriptionChange={() => {}}
      />
      <div className="p-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Notificaciones</h2>
          <p className="text-muted-foreground">
            Esta sección está en desarrollo. Pronto podrá ver y administrar sus notificaciones.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotificacionesPage;
