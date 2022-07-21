const React = require('react')
const Default = require('./layouts/Default')

function errPage() {
    return (
        <Default>
            <h2>404</h2>
            <p>Whoops!  We cant find that page!</p>
        </Default>
    )
}

module.exports = errPage