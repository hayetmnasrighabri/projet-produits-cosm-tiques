import React, { useState } from 'react'
import './ListesProduits.css'
import EditProduits from './EditProduits'

const produitsinitial=[
  {id:0, name: 'Nettoyant.visage' , price:'30'},
  {id:1, name: 'Crème.hydratante', price: '60'},
  {id:2, name: 'Sérum.anti-âge', price: '100'},
  {id:3, name: 'Masque-visage', price: '50'},
  {id:4, name: 'Exfoliant', price: '4'},
  {id:5, name: 'Crème.contour.des.yeux' , price:'70'},
  {id:6, name:'Fond.de.teint', price: '50'},
  {id:7, name: 'Poudre.compacte' ,price: '40'},
  {id:8, name:'Rouge.à.lèvres', price:'30'}
]
function ListesProduits() {
  const [produits, setProduits]=useState(produitsinitial)
  const [newName, setNewName] = useState('')
  const [newPrice, setNewPrice]= useState('')
  const [edit, setEdit]= useState(null)   
  const handleInputName=(e)=>{
    setNewName(e.target.value)
      console.log(newName)
  }
  const handleInputPrice=(e)=>{
      setNewPrice(e.target.value)
      console.log(newPrice)
  }
  const handleAddProduct=(e)=>{
    e.preventDefault()
    const newProduit = {
      id: produits.length,
      name: newName,
      price: newPrice
    }

    setProduits([...produits, newProduit])
    console.log(newProduit)
    setNewName('')
    setNewPrice('')
    console.log(newName)
  }

  const handleDelete=(id)=>{
    const updatedProducts = produits.filter(produit => produit.id !== id);
    setProduits(updatedProducts);
    console.log(produits)
  }
  const handleEdit=(id)=>{
    setEdit(id)
  }
 const handleReverse=()=>{
  const nextProduct = [...produits]
  nextProduct.reverse()
  setProduits(nextProduct)
 }
 const handletrie=()=>{
  const produitsTries = produits.sort((a,b)=>a.price - b.price)
  console.log(produitsTries)
  
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
      value={newPrice}
      onChange={handleInputPrice}/>
        <hr/>
    <button type='submit'>Add Product</button>
    
    </form><hr/>
    <button type='submit' onClick={handletrie}>trie</button>
    <button type='submit' onClick={handleReverse}>reverse</button>
    
      <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th>opération</th>
    </tr>
  </thead>
  <tbody>
    {produits.map(produit=>(
      edit===produit.id ? <EditProduits setEdit={setEdit} produit={produit} produits={produits} setProduits={setProduits}/> :
    <tr key={produit.id}>
    
      <td>{produit.id}</td>
      <td>{produit.name}</td>
      <td>{produit.price} $</td>
      <td><button type='submit' className='Editbtn ' onClick={()=>handleEdit(produit.id)}>Edit</button>
      <button type='submit' className='deletebtn' onClick={()=>handleDelete(produit.id)}>Delete</button></td>
    </tr>
      
    ))}
     
  </tbody>
</table>
    </div>
  )
}

export default ListesProduits
