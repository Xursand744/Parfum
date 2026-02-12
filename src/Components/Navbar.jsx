import { Search, User, Heart, ShoppingBag } from 'lucide-react'
import Logo from '../../public/Logo.png'

export default function Navbar() {
  return (
    <div>
        <nav className="container mx-auto  flex items-center justify-between py-6  ">
            <button><img src={Logo} alt="Logo" /></button>
            <ul className='flex gap-12 text-white'>
                <li><button>Home</button></li>
                <li><button>Shop</button></li>
                <li><button>About us</button></li>
                <li><button>Servises</button></li>
                <li><button>Blog</button></li>
            </ul>

            <ul className='flex gap-6 text-white'>
                <li><Search className="w-5 h-5" /></li>
                <li><User className="w-5 h-5" /></li>
                <li><Heart className="w-5 h-5" /></li>
                <li><ShoppingBag className="w-5 h-5" /></li>
            </ul>

        </nav>
    </div>
  )
}
