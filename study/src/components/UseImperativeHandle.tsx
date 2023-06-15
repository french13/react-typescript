import {forwardRef, useRef, useEffect, useImperativeHandle} from 'react'

//parentComponents
const ParentComponents = () => {
  const childRef = useRef<any>(null)

  const clickParentButton = () => {
    console.log(childRef.current?.onAlert())
  }
  return (
    <div>
      <div>
        부모컴포넌트
        <button onClick={clickParentButton}>부모</button>
        <ChildComponents ref={childRef} />
      </div>
    </div>
  )
}

//childcomponents
const ChildComponents = forwardRef((props: any, ref: any) => {
  const test = '자식 컴포넌트 입니다'

  const InputR = useRef<HTMLInputElement>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        onAlert: () => {
          return InputR.current?.value
        }
      }
    },
    []
  )

  return (
    <div>
      <div>자식컴포넌트</div>
      <input ref={InputR} type="text" />
    </div>
  )
})

const UseImperativeHandle = () => {
  return (
    <div>
      <p>UseImperativeHandle 예제</p>
      <ParentComponents />
    </div>
  )
}

export default UseImperativeHandle
