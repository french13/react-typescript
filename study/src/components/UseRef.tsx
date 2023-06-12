import {useState, useRef, useEffect} from 'react'

const UseRef = () => {
  // 예제 1
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  const increaseCount = () => {
    setCount(count + 1)
  }
  const increaseRefCount = () => {
    countRef.current = countRef.current + 1
  }

  useEffect(() => {
    console.log(countRef)
  }, [])
  // 그렇다면 useRef 와 일반적인 변수 의 차이는?
  // 변화는 감지해야 하지만 렌더링을 유발하지 않을떄 유용하다.

  // 예제2

  const inputRef = useRef<HTMLInputElement>(null)
  const checkRef = () => {
    alert(inputRef.current?.value)
  }

  const [move, setMove] = useState(true)
  return (
    <div>
      {move === false ? (
        <>
          <p
            onClick={() => {
              setMove(!move)
            }}
          >
            useRef 예제1
          </p>
          <div>
            <p>useState : {count}</p>
            <button onClick={increaseCount}>useState 증가</button>
          </div>
          <div>
            <p>useRef : {countRef.current}</p>
            <button onClick={increaseRefCount}>useState 증가</button>
          </div>
        </>
      ) : (
        <>
          <p
            onClick={() => {
              setMove(!move)
            }}
          >
            useRef 예제2
          </p>
          <div>
            <input ref={inputRef} type="text" placeholder="Ref예제2" />
            <button onClick={checkRef}>확인</button>
          </div>
        </>
      )}
    </div>
  )
}

export default UseRef
