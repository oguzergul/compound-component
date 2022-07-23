import {Tab} from "../components/Tab";

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
                      America
                  </Tab>
                  <Tab>
                      Uganda
                  </Tab>
                  <Tab>
                      Hakkari
                  </Tab>
                  <Tab>
                      Urfa
                  </Tab>
              </Tab.List>

              <Tab.Panels>
                  <Tab.Panel>
                      <div>
                          <h1>Switzerland</h1>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h1>Turkey</h1>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h1>Canada</h1>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h1>America</h1>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h1>Uganda</h1>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h1>Hakkari</h1>
                      </div>
                  </Tab.Panel>
                  <Tab.Panel>
                      <div>
                          <h1>Urfa</h1>
                      </div>
                  </Tab.Panel>
              </Tab.Panels>
          </Tab.Group>
      </main>
  )
}
