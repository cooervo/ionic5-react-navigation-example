import {IonRouterOutlet} from "@ionic/react";
import {Route, RouteComponentProps} from 'react-router-dom';
import React from 'react';
import UserDetail from "./UsersDetail";
import UsersList from "./UsersList";

const Dashboard: React.FC<RouteComponentProps> = ({match}) => {
    return (
        <IonRouterOutlet>
            <Route exact path={match.url} component={UsersList} />
            <Route path={`${match.url}/users/:id`} component={UserDetail} />
        </IonRouterOutlet>
    );
};

export default Dashboard;
