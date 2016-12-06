function clearTextFields(formObj) {
  for (elem in formObj) {
    if (formObj[elem].type == "text")
      formObj[elem].value = "";
  }
}
