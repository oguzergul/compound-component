import { Tab } from "../components";

export default function Home() {
  return (
      <main>
          <h1>Compound Components</h1>
          <Tab.Group>
              <Tab.List>
                  <Tab>Switzerland</Tab>
                  <Tab>Turkey</Tab>
                  <Tab>Canada</Tab>
                  <Tab>Uganda</Tab>
                  <Tab>United Kingdom</Tab>
                  <Tab>Dominican Republic</Tab>
                  <Tab>Papua New Guinea</Tab>
                  <Tab>South Africa</Tab>
              </Tab.List>
              <Tab.Panels>
                  <Tab.Panel>Switzerland</Tab.Panel>
                  <Tab.Panel>Turkey</Tab.Panel>
                  <Tab.Panel>Canada</Tab.Panel>
                  <Tab.Panel>Uganda</Tab.Panel>
                  <Tab.Panel>United Kingdom</Tab.Panel>
                  <Tab.Panel>Dominican Republic</Tab.Panel>
                  <Tab.Panel>Papua New Guinea</Tab.Panel>
                  <Tab.Panel>South Africa</Tab.Panel>
              </Tab.Panels>
          </Tab.Group>
      </main>
  )
}
