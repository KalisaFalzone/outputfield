import React from 'react'
import { Tab } from '@headlessui/react'

interface Props {
  headers?: string[];
  children: React.ReactNode[];
  activeTab?: number;
}

const TabView: React.FC<Props> = ({ headers, children }) => {
  if (
    Array.isArray(headers) &&
    Array.isArray(children) &&
    headers.length != children.length
  ) {
    return (
      <div style={{ backgroundColor: '#fcc' }}>
        error: number of headers does not match number of tab panes
      </div>
    )
  }

  return (
    <Tab.Group>
      <Tab.List className="flex flex-row items-start mb-0 mx-6 pb-4">
        {headers?.map((header) => (
          <Tab
            key={header}
            className={`flex-1 basis-1/${headers.length} text-left`}
          >
            {({ selected }) => (
              <a
                className={
                  'px-4 py-0 mx-2 border rounded-full last:mr-0 font-bold uppercase leading-normal decoration-blue-600 decoration-2 ' +
                      (selected
                        ? 'border-blue'
                        : 'border-black')
                }
              >
                {header}
              </a>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {children.map((panel, index) => (
          <Tab.Panel
            id={`${index}`}
            key={index}
          >
            {panel}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TabView
