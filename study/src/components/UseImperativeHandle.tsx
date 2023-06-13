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
        <ChildComponents2 ref={childRef} />
      </div>
    </div>
  )
}

//childcomponents
const ChildComponents = (props: any, ref: any) => {
  useImperativeHandle(
    ref,
    () => {
      return {
        onAlert: () => alert('자식컴포넌트')
      }
    },
    []
  )

  return <div>자식컴포넌트</div>
}

const ChildComponents2 = forwardRef(ChildComponents)

const UseImperativeHandle = () => {
  return (
    <div>
      <p>UseImperativeHandle 예제</p>
      <ParentComponents />
    </div>
  )
}

export default UseImperativeHandle
