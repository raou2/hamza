import { useState } from "react";
import { createClient } from '@sanity/client'
import { Router, useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const {
    showCart,
    setShowCart,
    cartItems,
    totalPrice,
    totalQuantities,
    qty,
    incQty,
    decQty,
    onAdd,
    toggleCartItemQuanitity,
    onRemove,
    setCartItems,
    setTotalPrice,
    setTotalQuantities 
  } = useStateContext();
const client = createClient({
  projectId: 'w67ih30x',
  dataset: 'production',
  apiVersion: '2022-02-03',
  token:'sk7R1Ddz3KEqXWNH9WhwKErwMml2D328iBQvh67uU1XeXUC1l5WoOCuu6PSfB7fayKSz9SUmCki9IFIinKBLNhG9YkHtUhGU7WBbElfGjrWr959eTihGlmIBAmCGJlOMUtQtDTrevAJvwYnWacThsZJOo0JN2PSGjtsUSmkeYgUYr4BNycDK',
  useCdn: false
})

const router = useRouter()
const handleSubmit =async (event) => {
    const showToSanity = {...cartItems}
const details = showToSanity[0].details;
const productName = showToSanity[0].name;
const qtt = showToSanity[0].quantity;
const price = showToSanity[0].price;
const image = showToSanity[0].image[0].asset._ref;
const img = image.replace('-webp', '.webp');
console.log(img)
    console.log(showToSanity[0])
    event.preventDefault();
client.create({
    _type: 'Contact',
    name,
    phoneNumber,
    city,
    country,
    price,
    qtt,
    details,
    productName,
  
})
.then(response => console.log(response))
.then(()=>{
  router.push('/')
  setShowCart(false)
})
.catch(error => console.error(error))
  };

  return (
    <form  className="form" onSubmit={handleSubmit} style={{ color: "#f02d34" ,textAlign:'center',margin:'2rem',position: "relative",
    top: "3rem"}}>
      <label>
      
        <input
          placeholder="الاسم"
          style={{width:"300px",padding:'.31rem',margin:'.1rem'}}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
       
        <input
        placeholder="رقم الهاتف"
         style={{width:"300px",padding:'.31rem',margin:'.1rem'}}
          type="number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        
        <input
        required
        placeholder="البلدية"
         style={{width:'300px',padding:'.3rem',margin:'.1rem',outline:'#f02d34'}}
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </label>
      <br />
      <label>
        
        <select value={country} onChange={(event) => setCountry(event.target.value)}>
          <option value="">الولاية</option>
  <option value="Adrar">Adrar</option>
  <option value="Chlef">Chlef</option>
  <option value="Laghouat">Laghouat</option>
  <option value="Oum El Bouaghi">Oum El Bouaghi</option>
  <option value="Batna">Batna</option>
  <option value="Béjaïa">Béjaïa</option>
  <option value="Biskra">Biskra</option>
  <option value="Béchar">Béchar</option>
  <option value="Blida">Blida</option>
  <option value="Bouira">Bouira</option>
  <option value="Tamanrasset">Tamanrasset</option>
  <option value="Tébessa">Tébessa</option>
  <option value="Tlemcen">Tlemcen</option>
  <option value="Tiaret">Tiaret</option>
  <option value="Tizi Ouzou">Tizi Ouzou</option>
  <option value="Algiers">Algiers</option>
  <option value="Djelfa">Djelfa</option>
  <option value="Jijel">Jijel</option>
  <option value="Sétif">Sétif</option>
  <option value="Saida">Saida</option>
  <option value="Skikda">Skikda</option>
  <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
  <option value="Annaba">Annaba</option>
  <option value="Guelma">Guelma</option>
  <option value="Constantine">Constantine</option>
  <option value="Médéa">Médéa</option>
  <option value="Mostaganem">Mostaganem</option>
  <option value="Msila">Msila</option>
  <option value="Mascara">Mascara</option>
  <option value="Ouargla">Ouargla</option>
  <option value="Oran">Oran</option>
  <option value="El Bayadh">El Bayadh</option>
  <option value="Illizi">Illizi</option>
  <option value="Bordj Bou Arreridj">Bordj Bou Arreridj</option>
  <option value="Boumerdès">Boumerdès</option>
  <option value="El Tarf">El Tarf</option>
  <option value="Tindouf">Tindouf</option>
  <option value="Tissemsilt">Tissemsilt</option>
  <option value="El Oued">El Oued</option>
  <option value="Khenchela">Khenchela</option>
  <option value="Souk Ahras">Souk Ahras</option>
  <option value="Tipaza">Tipaza</option>
  <option value="Mila">Mila</option>
  <option value="Aïn Defla">Aïn Defla</option>
  <option value="Naâma">Naâma</option>
        </select>
      </label>
      <br />
      <button type="submit" style={{border:'#f02d34',margin:'1rem',outline:'#f02d34', cursor:'pointer',backgroundColor: "#f02d34", color: "#fff",width:'200px',borderRadius:'.21rem',padding:'.51rem' }}>ارسل</button>
    </form>
  );
};


export default FormComponent;
