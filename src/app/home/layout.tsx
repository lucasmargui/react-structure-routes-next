import SideNav from '@/app/ui/home/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
      
         {/* remover h2 caso necessário utilizar estrutura como base de um projeto */}
      <h2>layout.tsx em home aplica um layout personalizado na rota /home e em todas as subrotas /home/ : about profile table users  </h2> 
          {children}
      </div>
    </div>
  );
}