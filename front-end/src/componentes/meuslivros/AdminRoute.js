import { Navigate } from "react-router-dom";

function AdminRoute({children})
{
    const role = localStorage.getItem('role');
        if(role !== 'admin'){
         alert('Só Administradores têm acesso a esses conteúdos');
         return <Navigate to = "/home" />
        }
        return children;
    
}
export default AdminRoute;