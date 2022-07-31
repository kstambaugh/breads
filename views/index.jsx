const React = require('react')
const Bread = require('../models/bread')
const Default = require('./layouts/default')

function Index({ breads, title }) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <ul>
                {
                    breads.map((bread, index) => {
                        return <li key={bread.id}>
                            <a href={`/breads/${bread.id}`}>
                                {bread.name}
                            </a>
                        </li>
                    })
                }
            </ul>
            <div className='newButton'>
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
        </Default>
    )
}

module.exports = Index