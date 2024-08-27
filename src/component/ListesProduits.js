import React, { useState } from 'react'
import './ListesProduits.css'
const produitsinitial=[
  {id:0, name: 'Nettoyant.visage' , prix:'30'},
  {id:1, name: 'Crème.hydratante', prix: '60'},
  {id:2, name: 'Sérum.anti-âge', prix: '100'},
  {id:3, name: 'Masque-visage', prix: '50'},
  {id:4, name: 'Exfoliant', prix: '4'},
  {id:5, name: 'Crème.contour.des.yeux' , prix:'70'},
  {id:6, name:'Fond.de.teint', prix: '50'},
  {id:7, name: 'Poudre.compacte' ,prix: '40'},
  {id:8, name:'Rouge.à.lèvres', prix:'30'}
]
function ListesProduits() {
  const [produits, setProduits]=useState(produitsinitial)
  const [newName, setNewName] = useState('')
  const [newPrix, setNewPrix]= useState('')
   
  const handleInputName=(e)=>{
    setNewName(e.target.value)
      console.log(newName)
  }
  const handleInputPrix=(e)=>{
      setNewPrix(e.target.value)
      console.log(newPrix)
  }
  const handleAddProduct=(e)=>{
    e.preventDefault()
    const newProduit = {
      id: produits.length,
      name: newName,
      prix: newPrix
    }

    setProduits([...produits, newProduit])
    console.log(newProduit)
    setNewName('')
    setNewPrix('')
  }

  const handleDelete=(id)=>{
    const updatedProducts = produits.filter(produit => produit.id !== id);
    setProduits(updatedProducts);
    console.log(produits)
  }
  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <hr/>
    <input className="form-control form-control-sm" type="text" name='name' placeholder='entrer le nom de produit'
      value={newName}
      onChange={handleInputName}/>
    <hr/>
    
    <input className="form-control form-control-sm" type="text" name='price' placeholder='entrer le prix de produit' aria-label=".form-control-sm example"
      value={newPrix}
      onChange={handleInputPrix}/>
        <hr/>
    <button type='submit'>Add Product</button>
    </form><hr/>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
    {produits.map(produit=>(
    <tr key={produit.id}>
    
      <td>{produit.id}</td>
      <td>{produit.name}</td>
      <td>{produit.prix} $</td>
      <td><button type='submit' className='Editbtn '>Edit</button></td>
      <td><button type='submit' className='deletebtn' onClick={()=>handleDelete(produit.id)}>Delete</button></td>
    </tr>
    
    ))}
    
  </tbody>
</table>
    </div>
  )
}

export default ListesProduits
