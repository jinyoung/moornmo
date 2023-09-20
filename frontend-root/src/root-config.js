import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const routes = constructRoutes(`
<single-spa-router mode="hash" base="/">
<div style="display: flex;">
  <div>
    <application name="@my-app/home"></application>
  </div>
  <div>
    <route path="basics">
      <application name="@my-app/basic"></application>
    </route>
    <route path="sales">
      <application name="@my-app/sales"></application>
    </route>
    <route path="inventories">
      <application name="@my-app/inventory"></application>
    </route>
  </div>
<div>
</single-spa-router>
`);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();