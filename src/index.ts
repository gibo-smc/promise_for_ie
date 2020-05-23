import 'core-js'
import 'regenerator-runtime/runtime'

console.log('on load main.js...')

const btnElm = document.getElementById('btn') as HTMLElement
const btnElm2 = document.getElementById('btn2') as HTMLElement
const listElm = document.getElementById('list') as HTMLElement

const addListElm = (msg: string, containerElm: HTMLElement): void => {

  const liElm = document.createElement('li')
  const text = document.createTextNode(msg)
  liElm.appendChild(text)
  containerElm.appendChild(liElm)
}

const addMegList = (plusTime: number, currentTime: number, containerElm: HTMLElement): Promise<number> => {
  return new Promise((resolve) => {

    setTimeout(() => {

      // 合計経過時間
      const totalTime: number = currentTime + plusTime

      // li要素追加
      addListElm(`${plusTime}秒追加され${totalTime}秒経過しました`, containerElm)

      resolve(totalTime)

    }, plusTime * 1000)
  })
}

btnElm.addEventListener('click', () => {

  addListElm('Promiseで処理を開始しました', listElm)

  addMegList(1, 0, listElm)
    .then((currentTime: number) => {
      return addMegList(0.5, currentTime, listElm)
    })
    .then((currentTime: number) => {
      return addMegList(0.3, currentTime, listElm)
    })
    .then((currentTime: number) => {
      return addMegList(0.7, currentTime, listElm)
    })
    .then((currentTime: number) => {
      addListElm('処理を終了しました', listElm)
    })
})

btnElm2.addEventListener('click', async () => {

  addListElm('async awaitで処理を開始しました', listElm)

  let currentTime: number = await addMegList(1, 0, listElm)
  currentTime = await addMegList(0.2, currentTime, listElm)
  currentTime = await addMegList(0.3, currentTime, listElm)
  currentTime = await addMegList(0.5, currentTime, listElm)

  addListElm('処理を終了しました', listElm)
})
