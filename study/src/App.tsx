import {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import UseRef from './components/UseRef'
import UseImperativeHandle from './components/UseImperativeHandle'

const menuList = [
  {title: 'useRef', link: '/useRef'},
  {title: 'useImperativeHandle', link: '/useimperativehandle'}
]

const App = () => {
  const [menu, setMenu] = useState(menuList)

  return (
    <div className="App">
      <p>스터디</p>
      <div>
        {menu.map((item, index) => (
          <button key={index}>
            <Link to={item.link}>{item.title}</Link>
          </button>
        ))}
      </div>
      <Routes>
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useimperativehandle" element={<UseImperativeHandle />} />
      </Routes>
    </div>
  )
}

export default App
