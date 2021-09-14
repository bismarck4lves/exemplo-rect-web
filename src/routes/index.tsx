import React from "react";
import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";
import { Switch } from 'react-router-dom';
import usePageTracking from '@/utils/pageTracking';
//pages
import Dashboard from "@/features/dashboard";
import SingIn from "@/features/auth/pages/singIn";
import Candidatos from "@/features/canidatos";
import TwoColumsPagesExemple from "@/features/exemploLayouts/pages/TwoColumsPagesExemple";

/*
* A variável screens é criada, exportada e utilizada em AuthStack.Screen.
* Essa abordagem foi desenvolvida assim pois desta forma a lista de names  fica disponível para outros 
* compoonetes. assim, quando o componente quiser mudar de screen, ao invés de passar string, ele importa screens e usa o atributo referente.
* Por sua vez, se o nome da screen for mudado aqui, não afeta seus dependentes.
*/

export const screens = {
  public: {
    singIn: '/singin',
    duasPaginasExemplo: '/duas-paginas-exemplo'
  },
  private: {
    dashboard: '/',
    candidatos: '/candidatos',
  }
};

const Routes: React.FC = () => {
  usePageTracking();
  return (
    <Switch>
      <PublicRoutes path={screens.public.singIn} component={SingIn} restricted />
      <PublicRoutes path={screens.public.duasPaginasExemplo} component={TwoColumsPagesExemple} restricted />
      
      <PrivateRoutes path={screens.private.dashboard} exact component={Dashboard} />
      <PrivateRoutes path={screens.private.candidatos} exact component={Candidatos} />
    </Switch>
  );
};

export default Routes;