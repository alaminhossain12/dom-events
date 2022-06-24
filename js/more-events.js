document.getElementById('delete-btn').addEventListener('click', function () {
  document.getElementById('secret-info').style.display = 'none'
})

document.getElementById('delete-confrim').addEventListener('focus', function () {
  document.body.style.backgroundColor = 'red'
})

// document.getElementById('delete-confrim').addEventListener('blur', function () {
//   document.body.style.backgroundColor = 'white'
// })

// document.getElementById('delete-confrim').addEventListener('keydown', function () {
//   const deleteField = document.getElementById('delete-confrim')
//   console.log(deleteField.value);
// })

document.getElementById('delete-confrim').addEventListener('keyup', function () {
  if (event.target.value == 'delete') {
    document.getElementById('delete-btn').removeAttribute('disabled')
  } else {
    document.getElementById('delete-btn').setAttribute('disabled', true)  
  }
})

document.getElementById('delete-confrim').addEventListener('change', function () {
  const deleteField = document.getElementById('delete-confrim')
  console.log(deleteField.value);
}) 