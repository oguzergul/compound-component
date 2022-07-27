import { Tab } from "../components";

export default function Home() {
  return (
      <main className="max-w-6xl mx-auto mt-20">
          <h1 className="text-2xl font-semibold font-sf-pro mb-10">Compound Components</h1>
          <Tab.Group>
              <Tab.List>
                  <Tab>
                      Switzerland
                  </Tab>
                  <Tab>
                      Turkey
                  </Tab>
                  <Tab>
                      Canada
                  </Tab>
                  <Tab>
                      Uganda
                  </Tab>
                  <Tab>
                      United Kingdom
                  </Tab>
                  <Tab>
                      Dominican Republic
                  </Tab>
                  <Tab>
                      Papua New Guinea
                  </Tab>
                  <Tab>
                      South Africa
                  </Tab>
              </Tab.List>

              <Tab.Panels>
                  <Tab.Panel>
                      <div>
                          <h2>Switzerland</h2>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h2>Turkey</h2>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h2>Canada</h2>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h2>Uganda</h2>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h2>United Kingdom</h2>
                      </div>
                  </Tab.Panel>

                  <Tab.Panel>
                      <div>
                          <h2>Dominican Republic</h2>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h2>Papua New Guinea</h2>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h2>South Africa</h2>
                      </div>
                  </Tab.Panel>
              </Tab.Panels>
          </Tab.Group>
      </main>
  )
}
