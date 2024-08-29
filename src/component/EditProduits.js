import React from 'react'

function EditProduits({ produits, setProduits, produit, setEdit }) {

    const handleInput = (e) => {
        const { name, value } = e.target
        const newProduits = produits.map((prod) => 
            prod.id === produit.id ? { ...prod, [name]: value } : prod
        );
        setProduits(newProduits)
    }

    const handleEnreg = (e) => {
        e.preventDefault()
        setEdit(null)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            name="name"
                            value={produit.name}
                            onChange={handleInput}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="price"
                            value={produit.price}
                            onChange={handleInput}
                        />
                    </td>
                    <td>
                        <button
                            type="submit"
                            className="Enregbtn"
                            onClick={handleEnreg}
                        >
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EditProduits;