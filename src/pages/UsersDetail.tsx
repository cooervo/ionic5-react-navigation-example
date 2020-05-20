import {RouteComponentProps} from "react-router";
import {IonBackButton, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";
import {Link} from "react-router-dom";

interface UserDetailPageProps extends RouteComponentProps<{
    id: string;
}> {}

const UserDetail: React.FC<UserDetailPageProps> = ({match}) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton color={"light"}>
                        <IonBackButton >Back</IonBackButton>
                    </IonButton>
                    <IonTitle>User Detail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{padding: "50px"}}>
                User {match.params.id}
                <p>Go to <Link to={"/next"}>next</Link> level</p>

                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
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
                <p>p</p>
                <br/>
                <p>p</p>
                <br/>
                <p>bottom</p>
                <br/>
            </IonContent>
        </IonPage>
    );
};

export default UserDetail;
