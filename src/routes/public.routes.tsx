/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuthContext } from '@/features/auth/contexts/auth';
import {screens} from "./index"

interface PublicRouteProps extends Omit<RouteProps, 'component'> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.ComponentType<any>;
    restricted?: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
    component: Component,
    restricted,
    ...rest
}: PublicRouteProps) => {

    const [{ user }] = useAuthContext();
    const isSignedIn = useMemo(() => !!user, [user]);
    return (
        <Route
            {...rest}
            render={props => {
                return isSignedIn && restricted ? (
                    <Redirect to={screens.private.dashboard} />
                ) : (
                    <Component {...props} />
                );
            }}
        />
    );
};

PublicRoute.defaultProps = {
    restricted: false,
};

export default PublicRoute;
