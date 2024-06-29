import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MeasurementsList } from "./measurements/MeasurementsList";
import { MeasurementsCreate } from "./measurements/MeasurementsCreate";
import { MeasurementsEdit } from "./measurements/MeasurementsEdit";
import { MeasurementsShow } from "./measurements/MeasurementsShow";
import { TurnTablePositionList } from "./turnTablePosition/TurnTablePositionList";
import { TurnTablePositionCreate } from "./turnTablePosition/TurnTablePositionCreate";
import { TurnTablePositionEdit } from "./turnTablePosition/TurnTablePositionEdit";
import { TurnTablePositionShow } from "./turnTablePosition/TurnTablePositionShow";
import { TestOptionList } from "./testOption/TestOptionList";
import { TestOptionCreate } from "./testOption/TestOptionCreate";
import { TestOptionEdit } from "./testOption/TestOptionEdit";
import { TestOptionShow } from "./testOption/TestOptionShow";
import { OutputFilenameList } from "./outputFilename/OutputFilenameList";
import { OutputFilenameCreate } from "./outputFilename/OutputFilenameCreate";
import { OutputFilenameEdit } from "./outputFilename/OutputFilenameEdit";
import { OutputFilenameShow } from "./outputFilename/OutputFilenameShow";
import { CentroidDataList } from "./centroidData/CentroidDataList";
import { CentroidDataCreate } from "./centroidData/CentroidDataCreate";
import { CentroidDataEdit } from "./centroidData/CentroidDataEdit";
import { CentroidDataShow } from "./centroidData/CentroidDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TurnTableDistortionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Measurements"
          list={MeasurementsList}
          edit={MeasurementsEdit}
          create={MeasurementsCreate}
          show={MeasurementsShow}
        />
        <Resource
          name="TurnTablePosition"
          list={TurnTablePositionList}
          edit={TurnTablePositionEdit}
          create={TurnTablePositionCreate}
          show={TurnTablePositionShow}
        />
        <Resource
          name="TestOption"
          list={TestOptionList}
          edit={TestOptionEdit}
          create={TestOptionCreate}
          show={TestOptionShow}
        />
        <Resource
          name="OutputFilename"
          list={OutputFilenameList}
          edit={OutputFilenameEdit}
          create={OutputFilenameCreate}
          show={OutputFilenameShow}
        />
        <Resource
          name="CentroidData"
          list={CentroidDataList}
          edit={CentroidDataEdit}
          create={CentroidDataCreate}
          show={CentroidDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
