import { MyInput, MyInputDate } from './Main/Custom/MyFormElement'
export function goToFun(d) {
    if (d.field === "input") {
      return (
        <MyInput name={d.name} />
      )
    } else if ('MyInputDate') {
      return (
        <MyInputDate name={d.name} />
      )
    }
  }