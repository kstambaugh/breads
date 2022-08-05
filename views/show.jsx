const React = require('react')
const Default = require('./layouts/Default')

function Show({ bread, bakedBy }) {
    return (
        <Default>
            <h2>Show Page</h2>
            <li><a href="/breads">Go Home</a></li>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <p>{bread.baker}</p>

            {/* EDIT BUTTON */}
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>

            {/* DELETE BUTTON */}
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>
        </Default>
    )
}

module.exports = Show
