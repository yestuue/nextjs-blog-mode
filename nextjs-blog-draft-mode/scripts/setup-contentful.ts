import { createClient } from 'contentful-management';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT_ID || 'master';
const ACCESS_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

const client = createClient({
  accessToken: ACCESS_TOKEN,
});

async function setupContentfulModels() {
  try {
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // Define your content types here
    const contentTypes = [
      {
        name: 'Blog Post',
        fields: [
          {
            id: 'title',
            name: 'Title',
            type: 'Text',
            required: true,
          },
          {
            id: 'slug',
            name: 'Slug',
            type: 'Text',
            required: true,
          },
          {
            id: 'content',
            name: 'Content',
            type: 'RichText',
            required: true,
          },
          {
            id: 'author',
            name: 'Author',
            type: 'Link',
            linkType: 'Entry',
            required: true,
          },
          {
            id: 'publishedDate',
            name: 'Published Date',
            type: 'Date',
            required: true,
          },
        ],
      },
      {
        name: 'Author',
        fields: [
          {
            id: 'name',
            name: 'Name',
            type: 'Text',
            required: true,
          },
          {
            id: 'bio',
            name: 'Bio',
            type: 'RichText',
          },
        ],
      },
    ];

    for (const contentType of contentTypes) {
      try {
        const existingContentType = await environment.getContentType(contentType.name);
        console.log(`Content type "${contentType.name}" already exists.`);
      } catch (error) {
        if (error.sys && error.sys.id === 'NotFound') {
          const createdContentType = await environment.createContentType(contentType);
          console.log(`Created content type: ${createdContentType.name}`);
        } else {
          console.error(`Error checking content type "${contentType.name}":`, error);
        }
      }
    }

    console.log('Contentful models setup completed.');
  } catch (error) {
    console.error('Error setting up Contentful models:', error);
  }
}

setupContentfulModels();