
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 text-center">
      <h1 className="text-7xl font-bold text-agri-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Página no encontrada</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Button asChild>
        <Link to="/">Volver al Dashboard</Link>
      </Button>
    </div>
  );
};

export default NotFound;
