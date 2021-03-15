import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import {
  listCircleOutline,
  trendingUpOutline,
  createOutline,
  searchOutline,
  personCircleOutline,
} from "ionicons/icons";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Submit from "./pages/Submit";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import useAuth from "./Hooks/useAuth";
import UserContexts from "./contexts/UserContexts";
import Product from "./pages/Product";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => {
  const [user, setUser] = useAuth();

  return (
    <IonApp>
      <IonReactRouter>
        <UserContexts.Provider value={{ user, setUser }}>
          <IonTabs>
            <IonRouterOutlet>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/home" />}
                exact={true}
              />
              <Route path="/home" component={Home} />
              <Route path="/trending" component={Trending} />

              <Route path="/submit" component={Submit} />

              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/editprofile" component={EditProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/product/:productId" component={Product} />
              <Route component={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={listCircleOutline} />
                <IonLabel>
                  <span role="img" aria-label="store">
                    🏬
                  </span>{" "}
                  MerchHunt
                </IonLabel>
              </IonTabButton>
              <IonTabButton tab="trending" href="/trending">
                <IonIcon icon={trendingUpOutline} />
                <IonLabel>
                  <span role="img" aria-label="stonk">
                    📈
                  </span>{" "}
                  Trending
                </IonLabel>
              </IonTabButton>
              <IonTabButton tab="submit" href="/submit">
                <IonIcon icon={createOutline} />
                <IonLabel>
                  <span role="img" aria-label="checkmark">
                    ✔️
                  </span>{" "}
                  Submit
                </IonLabel>
              </IonTabButton>
              <IonTabButton tab="search" href="/search">
                <IonIcon icon={searchOutline} />
                <IonLabel>
                  <span role="img" aria-label="search">
                    🔍
                  </span>{" "}
                  Search
                </IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>
                  <span role="img" aria-label="bear">
                    🐻
                  </span>
                  Profile
                </IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </UserContexts.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
