const popover = {
  shouldAppendPicker(appendTo, isPopover) {
    return appendTo || isPopover
  },

  appendChild(parent, child) {
    try {
      let container = document.querySelector(parent || 'body')
      container.appendChild(child)
    } catch (er) {
      document.body.appendChild(child)
      console.warn(`Cannot append picker to "${parent}"!`)
    }
  },

  removeChild(element) {
    if (!element) return
    try {
      if (element.$el) element = element.$el
      if (element.parentNode) element.parentNode.removeChild(element)
    } catch (e) {
      console.warn("can't remove child", e)
    }
  },

  setPickerPosition(pickerWrapperEl, containerEl, inputWrapperEl, options) {
    if (!inputWrapperEl || !pickerWrapperEl) return

    let { placement = '', offsetX = 0, offsetY = 0 } = options
    let dataPlacement = ''
    let isOnTop = /top/.test(placement)
    let isOnLeft = /left/.test(placement)
    let isOnRight = /right/.test(placement)
    let isOnBottom = /bottom/.test(placement)

    pickerWrapperEl.style.width = inputWrapperEl.offsetWidth + 'px'
    pickerWrapperEl.style.top = '0px'
    pickerWrapperEl.style.left = '0px'

    const inputWrapperHeight = inputWrapperEl.offsetHeight
    const inputWrapperRect = inputWrapperEl.getBoundingClientRect()
    const top = inputWrapperRect.top + inputWrapperHeight
    const distanceY = 0

    if (!isOnTop && !isOnBottom)
      isOnTop = top + containerEl.offsetHeight > window.innerHeight

    if (!isOnLeft && !isOnRight)
      isOnLeft = inputWrapperRect.right > containerEl.offsetWidth

    dataPlacement += isOnTop ? 'top' : 'bottom'
    dataPlacement += isOnLeft ? '-left' : '-right'

    if (isOnTop) {
      pickerWrapperEl.style.top =
        inputWrapperRect.top - distanceY - offsetY + 'px'
    } else {
      pickerWrapperEl.style.top = top + distanceY + offsetY + 'px'
    }

    offsetX *= isOnRight ? 1 : -1
    pickerWrapperEl.setAttribute('data-placement', dataPlacement)
    pickerWrapperEl.style.left = inputWrapperRect.left + offsetX + 'px'
  }
}

export default popover
