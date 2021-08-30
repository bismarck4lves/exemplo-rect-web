import React from "react";
import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";
import { Switch } from 'react-router-dom';
import usePageTracking from '@/utils/pageTracking';
//components
import Dashboard from "@/features/dashboard/logged";
import singIn from "@/features/auth/pages/singIn";

export const screens = {
  public: {
    singIn: '/singin'
  },
  private: {
    dashboard: '/'
  }
};

const Routes: React.FC = () => {
  usePageTracking();
  return (
    <Switch>
      <PublicRoutes path={screens.public.singIn} component={singIn} restricted />
      <PrivateRoutes path={screens.private.dashboard} exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;