import { createContext } from 'react'
export const TaskContext = createContext()

export const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Data at risk',
      fields: [
        {
          title: 'Name',
          data: [
            {
              text: 'orca-demo-bucket-db'
            }
          ]
        },
        {
          title: 'Type',
          data: [
            {
              text: 'AWS S3 Bucket'
            }
          ]
        },
        {
          title: 'Tests',
          data: [
            {
              text: 'ec2-14175-131-61.cc2-14175-131-61.co',
              count: '118 / 120'
            },
            {
              text: '7fe00efc-8cfc-4454',
              count: '7 / 10'
            }
          ]
        }
      ],
      settings: []
    },
    {
      id: 2,
      title: 'Data at risk',
      fields: [
        {
          title: 'Name',
          data: [
            {
              text: 'orca-demo-bucket-db'
            }
          ]
        },
        {
          title: 'Type',
          data: [
            {
              text: 'AWS S3 Bucket'
            }
          ]
        },
        {
          title: 'Tests',
          data: [
            {
              text: 'ec2-14175-131-61.cc2-14175-131-61.co',
              count: '118 / 120'
            }
          ]
        }
      ],
      settings: []
    },
    {
      id: 3,
      title: 'Data at risk',
      fields: [
        {
          title: 'Name',
          data: [
            {
              text: 'orca-demo-bucket-db'
            }
          ]
        },
        {
          title: 'Type',
          data: [
            {
              text: 'AWS S3 Bucket'
            }
          ]
        },
        {
          title: 'Tests',
          data: [
            {
              text: 'ec2-14175-131-61.cc2-14175-131-61.co',
              count: '118 / 120'
            },
            {
              text: '7fe00efc-8cfc-4454',
              count: '7 / 10'
            }
          ]
        }
      ],
      settings: []
    },
    {
      id: 4,
      title: 'Data at risk',
      fields: [
        {
          title: 'Name',
          data: [
            {
              text: 'orca-demo-bucket-db'
            }
          ]
        },
        {
          title: 'Type',
          data: [
            {
              text: 'AWS S3 Bucket'
            }
          ]
        },
        {
          title: 'Tests',
          data: [
            {
              text: 'ec2-14175-131-61.cc2-14175-131-61.co',
              count: '118 / 120'
            }
          ]
        }
      ],
      settings: []
    }
  ]
}
