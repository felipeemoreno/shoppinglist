import { v4 as uuidV4} from 'uuid';
import { useState, useEffect } from 'react';
import './App.css'
import Lista from './components/Lista';

const ShoppingList =  () => {
  const genericList = [
    {
      id: "2a1dc948-a057-423f-afd8-0b553e1abd05",
      name: "Controle Sem Fio Xbox + Cabo USB",
      description: "Controle Xbox Series X/S + Cabo Windows - Black - Microsoft 1V8-00013",
      quantity: 2,
      favList: false
    },
    {id: "bec93c3c-bad0-4434-a236-9c789d6cdca1", name: "Volante Logitech G920 Driving Force para Xbox Series X|S, Xbox One e PC", description: "O Logitech G920 Driving Force é volante simulador de corrida definitivo para os mais recentes títulos de Xbox One e PC, incluindo feedback de força de dois motores e embreagem helicoidal para uma direção silenciosa e macia.", quantity: 1, favList: false},
    {id: "def1e584-944a-4e87-83ea-e228c2b70fb0", name: "Headset Xbox - Sem fio", description: "ogue com o som alto e claro com o fone de ouvido sem fio Xbox, envolva-se com tecnologias de som espacial, incluindo Windows Sonic, Dolby Atmos e DTS Headphone: X.", quantity: 3, favList: false},
  ]
  const [ shoppingList, setShoppingList ] =  useState(genericList);
  const [ itemName, setItemName ] = useState("");
  const [ itemDescription, setItemDescription ] = useState("");
  const [ itemQuantity, setItemQuantity ] = useState("");


  useEffect(() => {
    setShoppingList(genericList);
  }, [])

  const handleItemName = (event) => {
    setItemName(event.target.value);
  }

  const handleItemDescription = (event) => {
    setItemDescription(event.target.value);
  }

  const handleItemQuantity = (event) => {
    setItemQuantity(event.target.value);
  }

  const handleAddItem = (event) => {
    event.preventDefault();

    const item = {
      id: uuidV4(),
      name: itemName,
      description: itemDescription,
      quantity: itemQuantity
    }

    setShoppingList( [...shoppingList, item]);
  }


  const handleRemoveProduct = (prodId) => {
    const products = shoppingList.filter(product => product.id !== prodId);
    setShoppingList(products);
  }

  const handleAddFavList = (prodId) => {
    if ( shoppingList.find(product => product.id === prodId && product.favList) )
      return false;

    const products = shoppingList.map(product => {
      if(product.id === prodId) {
        product.favList = true;
      }
      return product;
    });

    setShoppingList(products);
  }

  const handleRemoveFavList = (prodId) => {
    const products = shoppingList.map(product => {
      if(product.id === prodId) {
        product.favList = false;
      }
      return product;
    });

    setShoppingList(products);
  }

  const favList = () => {
    return shoppingList.filter(product => product.favList === true);
  }


  return (
    <div>
      <div>
        <h1>Shopping List</h1>
      </div>
      <div>
        <form onSubmit={ handleAddItem }>
          <div>
          <label>Produto</label>
            <input type="text" id="itemName" onChange={handleItemName} />
          </div>
          <div>
            <label>Descrição</label>
            <input type="text" id="itemDescription" onChange={handleItemDescription}  />
          </div>
          <div>
            <label>Quantidade</label>
            <input type="text" id="itemQuantity" onChange={handleItemQuantity}  />
          </div>
          <button>Inserir</button>
        </form>
      </div>
      <div class="row">
        <div className="col">
          <Lista listTitle="Lista Produtos"
          list={ shoppingList }
          favButton={ handleAddFavList }
          favButtonTitle="Adicionar aos Favoritos"
          removeButton={handleRemoveProduct}/>
        </div>
        <div className="col">
          <Lista listTitle="Lista Favoritos"
          list={favList()}
          favButton={handleRemoveFavList}
          favButtonTitle="Remover dos Favoritos"/>
        </div>
      </div>
    </div>
  )
  }

  export default ShoppingList;
