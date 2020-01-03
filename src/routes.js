import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import WizStepTwo from "./Components/Wizard/WizStepTwo";
import WizStepOne from "./Components/Wizard/WizStepOne";
import WizStepThree from "./Components/Wizard/WizStepThree";


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard} />
        <Route path='/wizard/step1' component={WizStepOne} />
        <Route path='/wizard/step2' component={WizStepTwo} />
        <Route path='/wizard/step3' component={WizStepThree } />
    </Switch>
);