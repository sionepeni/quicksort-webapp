import './style/Header.css'
import Card from "../utility/Card"

export default function Header() {
  return (
      <>
      <div className="header-container">
        <Card><button>Home</button></Card>
        <Card><button>Products</button></Card>
        <Card><button>About Us</button></Card>
          </div>
      </>
  )
}
