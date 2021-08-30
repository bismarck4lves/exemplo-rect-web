import React from "react";
import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";
import { Switch } from 'react-router-dom';
import usePageTracking from '@/utils/pageTracking';
//pages
import Dashboard from "@/features/dashboard";
import SingIn from "@/features/auth/pages/singIn";
import Candidatos from "@/features/canidatos";
export const screens = {
  public: {
    singIn: '/singin',
  },
  private: {
    dashboard: '/',
    candidatos: '/candidatos'
  }
};

const Routes: React.FC = () => {
  usePageTracking();
  return (
    <Switch>
      <PublicRoutes path={screens.public.singIn} component={SingIn} restricted />
      
      <PrivateRoutes path={screens.private.dashboard} exact component={Dashboard} />
      <PrivateRoutes path={screens.private.candidatos} exact component={Candidatos} />
    </Switch>
  );
};

export default Routes;