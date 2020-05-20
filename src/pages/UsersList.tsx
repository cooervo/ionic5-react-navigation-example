import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import React from "react";
import {Link} from "react-router-dom";

const UsersList: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Users</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{padding: "50px"}}>
                <IonList>
                    <IonItem routerLink="/dashboard/users/1">
                        <IonLabel>User 1!</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/dashboard/users/2">
                        <IonLabel>User 2</IonLabel>
                    </IonItem>
                </IonList>
                <p>Go to <Link to={"/next"}>next</Link> level</p>

                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>mid</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>bottom</p>
                <br/>
                <IonList>
                    <IonItem routerLink="/dashboard/users/2">
                        <IonLabel>User 2</IonLabel>
                    </IonItem>
                </IonList>
                <p>bottom</p>
            </IonContent>
        </IonPage>
    );
};

export default UsersList;
