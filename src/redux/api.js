const contentful = require('contentful')

const client = contentful.createClient({
    space: '5amkz04fs54l',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '0RK9ru0OZ2mQxv-uk2djsVuEn0hv9pFB3Rbp6Kq62es'
})

export default client.getEntries()
    .then(response => response.items)
    .catch(console.error)