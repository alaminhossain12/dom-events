const handleJustClick = document.getElementById('handle-click').addEventListener('click', function () {
  const p = document.getElementById('click-method')
  p.innerText = 'Set By Using Just Function'
})

document.getElementById('handle-events').addEventListener('click', function () {
  const p = document.getElementById('click-method')
  p.innerText = 'Add Events Listener'
})

document.getElementById('update-name').addEventListener('click', function () {
  const nameField = document.getElementById('input-field')
  // console.log(nameField);
  const p = document.getElementById('click-method')
  p.innerText = nameField.value
  nameField.value = ''
})