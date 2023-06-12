import {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import UseRef from './components/UseRef'

const menuList = [{title: 'useRef', link: '/useRef'}]

const App = () => {
  const [menu, setMenu] = useState(menuList)

  return (
    <div className="App">
      <div>
        {menu.map((item, index) => (
          <button>
            <Link to={item.link}>{item.title}</Link>
          </button>
        ))}
      </div>
      <Routes>
        <Route path="/useRef" element={<UseRef />} />
      </Routes>
    </div>
  )
}

export default App
