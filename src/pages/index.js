import { Tab } from "../../components";

export default function Home() {
  return (
      <main>
          <h1>Compound Components</h1>
          <Tab>
              <Tab.List>
                  <Tab.Item>Switzerland</Tab.Item>
                  <Tab.Item>Turkey</Tab.Item>
                  <Tab.Item>Canada</Tab.Item>
                  <Tab.Item>Uganda</Tab.Item>
                  <Tab.Item>United Kingdom</Tab.Item>
                  <Tab.Item>Dominican Republic</Tab.Item>
                  <Tab.Item>Papua New Guinea</Tab.Item>
                  <Tab.Item>South Africa</Tab.Item>
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
          </Tab>
      </main>
  )
}
