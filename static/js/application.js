fetch('/api/feature_names')
  .then(response => response.json())
  .then(column_names => {
      console.log(column_names);
      var text_inputs_html="";
      column_names.forEach(column_name => {
        text_inputs_html+=`
        <input class="application_inputs" placeholder="${column_name}" id="${column_name}"></input>
        <br>
        ` 
      });
      $("#text-input-div").html(text_inputs_html)
    });