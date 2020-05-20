import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Dashboard from "./pages/Dashboard";
import Next from "./pages/Next";

const App: React.FC = () => (
    <IonApp>
        <div style={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "50px",
            zIndex: 1,
            backgroundColor: "grey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <span style={{
                fontWeight: "bolder",
                fontSize: "20px"
            }}>STATIC HEADER</span>
        </div>
        <IonReactRouter >
            <IonRouterOutlet style={{
                marginTop: "50px"
            }}>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/next" component={Next} exact={true}/>
                <Redirect exact from="/" to="/dashboard"/>
            </IonRouterOutlet>
        </IonReactRouter>

    </IonApp>
);

export default App;
