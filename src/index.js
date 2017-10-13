import './styles/index'

import Header from './scripts/header'

const headerNode = document.querySelector('._header')

if (headerNode) {
  // eslint-disable-next-line no-unused-vars
  const header = new Header({
    el: headerNode
  })
}

var btnsOpenForm = document.querySelectorAll('._open_form')

for (var i = 0; i < btnsOpenForm.length; i++) {
  var btnOpenForm = btnsOpenForm[i]
  btnOpenForm.addEventListener('click', function (e) {
    let target
    console.log('clock')

    e.preventDefault()
    e.stopPropagation()
    this.classList.add('hide')

    target = document.getElementById(this.dataset.target)
    target.classList.add('show')
  }, false)
}
