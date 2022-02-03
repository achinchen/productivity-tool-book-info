require('dotenv/config')
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_KEY });

function getDateString (date) {
  const dateInstance = date ? new Date(date) : new Date() 
  return dateInstance.toJSON().slice(0, 10)
}

const PROPERTY = {
  Type: '📖 Book',
  Status: 'Ready to Start'
}

async function createReadNote ({name, author, summary, image, date}) {
  const databaseId = process.env.NOTION_DATABASE_ID;
  await notion.pages.create({
    parent: {
      database_id: databaseId
    },
    properties: {
      Summary: {
        rich_text: [
          {
            type: 'text',
            text: {
              content: summary
            }
          }
        ]
      },
      'Publishing/Release Date': {
        date: {
          start: getDateString(date),
       }
      },
      'Read Date': {
        date: {
          start: getDateString(),
        }
      },
      Link: {
        url: 'https://weread.qq.com/web/reader/60a32c2071c2a37860a8289kc81322c012c81e728d9d180'
      },
      Type: { 
        select: {
          name: PROPERTY.Type
        }
      },
      Status: { 
        select: {
          name: PROPERTY.Status
        }
      },
      Author: {
        rich_text: [
          {
            type: 'text',
            text: {
              content: author
            }
          }
        ]
      },
      Name: {
        title: [
          {
            type: 'text',
            text: {
              content: name
            }
          }
        ]
      }
    },
    children: [
      {
        object: 'block',
        type: 'image',
        image: {
          type: 'external',
          external: {
            url: image
          }
        }
      },
    ]
  });
}


module.exports = {
  createReadNote
}