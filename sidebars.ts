export default {
  sidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Configurations',
      items: [
        {
          type: 'doc',
          id: 'configurations/configuration',
        }
      ]
    },
    {
      type: 'category',
      label: 'Management API',
      items: [
        {
          type: 'doc',
          id: 'management-api/default',
        },
        {
          type: 'doc',
          id: 'management-api/new-lobby',
        },
        {
          type: 'doc',
          id: 'management-api/status-lobby',
        },
      ]
    },
    {
      type: 'category',
      label: 'BOT',
      items: [
        {
          type: 'doc',
          id: 'bot/bot',
        }
      ]
    },
    {
      type: 'category',
      label: 'Cloud',
      items: [
        {
          type: 'doc',
          id: 'multi-cloud/aws',
        },
        {
          type: 'doc',
          id: 'multi-cloud/digitalocean',
        }
      ]
    }
  ],
};
