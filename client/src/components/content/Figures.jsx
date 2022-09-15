import Card from "../utility/Card"
import '../../style/Content.css'

export default function Figures({item:{Name, Price, Quantity, Image}}) {
  return (
    <>
      <div className="figures-main">
        <img src={Image} width={800} height={500} alt="car" />
      <Card>
          <h2>{Name}</h2>
          <h4>{Quantity} in stock</h4>
          <h3>${Price}</h3>
      </Card>
      </div>
    </>
  )
}
