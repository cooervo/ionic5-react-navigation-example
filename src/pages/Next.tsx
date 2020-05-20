import {
    IonBackButton,
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {RouteComponentProps} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const Next: React.FC<RouteComponentProps> = ({match}) => {
    const [asyncMsg, setAsyncMsg] = useState("LOADING...");

    useEffect(() => {
        if (asyncMsg !== "LOADING...") {
            return;
        }

        setTimeout(()=> setAsyncMsg("This is an async text"), 3000)
    })

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton color={"light"}>
                        <IonBackButton>Back</IonBackButton>
                    </IonButton>
                    <IonTitle>Next</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>This is synchronous content text</p>
                <p>{asyncMsg}</p>
            </IonContent>
        </IonPage>
    );
};

export default Next;
