console.log('on load main.js...')

const btnElm = document.getElementById('btn') as HTMLElement
const listElm = document.getElementById('list') as HTMLElement

const addMegList = (plusTime: number, currentTime: number): Promise<number> => {
  return new Promise((resolve) => {

    setTimeout(() => {

      // 合計経過時間
      const totalTime: number = currentTime + plusTime

      // 追加するli要素
      const liElm = document.createElement('li')
      const text = document.createTextNode(`${plusTime}秒追加され${totalTime}秒経過しました`)
      liElm.appendChild(text)
      listElm.appendChild(liElm)

      resolve(totalTime)

    }, plusTime * 1000)
  })
}

btnElm.addEventListener('click', () => {

  console.log('on click...')

  addMegList(1, 0)
    .then((currentTime: number) => {
      return addMegList(2, currentTime)
    })
    .then((currentTime: number) => {
      return addMegList(1, currentTime)
    })
    .then((currentTime: number) => {
      return addMegList(3, currentTime)
    })
    .then((currentTime: number) => {
      const liElm = document.createElement('li')
      const text = document.createTextNode('処理が終了しました')
      liElm.appendChild(text)
      listElm.appendChild(liElm)
    })
})