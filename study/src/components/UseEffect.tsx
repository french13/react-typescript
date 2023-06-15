import {useEffect, useState} from 'react'

const UseEffect = () => {
  const [test, setTest] = useState(true)
  console.log(1)

  // 컴포넌트가 생성된 상태에서 데이터를 불러올때 return에 데이터불러오기를 초기화하고 가져오면
  // 좀더 깔끔하지 않을까?
  useEffect(() => {
    console.log(2)

    return () => {
      console.log(3)
    }
  }, [test])

  return (
    <div>
      <p>useEffect 예제</p>
      <button
        onClick={() => {
          setTest(!test)
        }}
      >
        버튼
      </button>
    </div>
  )
}

export default UseEffect
